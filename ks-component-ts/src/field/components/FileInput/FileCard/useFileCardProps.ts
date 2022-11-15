import { useEffect, useState } from "react";
import clsx from "clsx";
import { CLASS_NAMES, ICONS } from "./constants";
import type { FileCardPropsHook, FileCardPropsHookArgs } from "./types";
import useFormTheme from "~/hooks/useFormTheme";
import { StringIndexedObject } from "~/types";

export default function useFileCardProps({
  file,
  fileProgress,
  loadingFiles,
  small,
  hasLabel,
}: FileCardPropsHookArgs): FileCardPropsHook {
  const [progress, setProgress] = useState<number | undefined>();
  /**
   * Creates a listener function to progress updates
   * */
  useEffect(() => {
    if (fileProgress && fileProgress.current) {
      (fileProgress.current as StringIndexedObject)[file?.name || ""] = (
        value: number
      ) => setProgress(value);
    }
  }, [file, fileProgress]);

  /**
   * Updates progress when loadingFiles changes
   * */
  useEffect(() => {
    if (Array.isArray(loadingFiles) && loadingFiles.includes(file?.name || ""))
      setProgress(0);
    else setProgress(undefined);
  }, [loadingFiles, file]);

  const { baseClasses, inputClasses } = useFormTheme();

  const wrapper = clsx(
    baseClasses,
    inputClasses,
    "border-solid border overflow-hidden border-turquoise-300 relative",
    !small && !hasLabel ? "rounded-2xl" : ""
  );

  const otherClassNames = small ? CLASS_NAMES.small : CLASS_NAMES.default;

  const classNames = {
    wrapper,
    ...otherClassNames,
  };

  const imageUrl = file?.preview;

  const width = `${Math.round((progress || 0) * 100)}%`;

  const icons = small ? ICONS.small : ICONS.default;

  return { classNames, icons, imageUrl, progress, width };
}
