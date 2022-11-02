import { useEffect, useState } from "react";
import clsx from "clsx";
import { CLASS_NAMES, ICONS } from "./constants";
import { StringIndexedObject } from "~/types";
import useFormTheme from "~/hooks/useFormTheme";
import type {
  JobPdfFileCardPropsHook,
  JobPdfFileCardPropsHookArgs,
} from "./types";

export default function useJobPdfFileCardProps({
  file,
  fileProgress,
  loadingFiles,
  small,
  hasLabel,
}: JobPdfFileCardPropsHookArgs): JobPdfFileCardPropsHook {
  const [progress, setProgress] = useState<number | undefined>();
  /**
   * Creates a listener function to progress updates
   * */
  useEffect(() => {
    if (fileProgress && fileProgress.current) {
      // eslint-disable-next-line no-param-reassign
      (fileProgress.current as StringIndexedObject)[file?.name || ""] = (
        value: number
      ) => setProgress(value);
    }
  }, [file, fileProgress]);

  /**
   * Updates progress when loadingFiles changes
   * */
  useEffect(() => {
    if (Array.isArray(loadingFiles) && loadingFiles.includes(file.name))
      setProgress(0);
    else setProgress(undefined);
  }, [loadingFiles, file]);

  const { baseClasses, inputClasses } = useFormTheme();

  const wrapper = clsx(
    baseClasses,
    inputClasses,
    "border-solid border overflow-hidden border-neutral-200 relative rounded-b-none max-h-38 p-3",
    !small && !hasLabel ? "rounded-2xl" : ""
  );

  const otherClassNames = small ? CLASS_NAMES.small : CLASS_NAMES.default;

  const classNames = {
    wrapper,
    ...otherClassNames,
  };

  const imageUrl = file.preview;

  const width = `${Math.round((progress || 0) * 100)}%`;

  const icons = small ? ICONS.small : ICONS.default;

  return { classNames, icons, imageUrl, progress, width };
}
