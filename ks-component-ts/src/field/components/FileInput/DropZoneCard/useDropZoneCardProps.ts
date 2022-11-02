import clsx from "clsx";
import useFormTheme from "~/hooks/useFormTheme";
import { CLASS_NAMES, ICON, SKELETONS } from "./constants";
import type { DropZoneCardProps } from "./types";
import { IconProps } from "@kanda-libs/ks-design-library";
import { StringIndexedObject } from "~/types";

export type DropZoneCardPropsHookArgs = Pick<
  DropZoneCardProps,
  "isDragActive" | "small" | "hasLabel" | "centerPlaceholder"
>;

export interface DropZoneCardPropsHook {
  classNames: {
    container: string;
    span: string;
    center: string;
    error?: string;
  };
  icon: IconProps;
  skeletonClasses: string;
  skeletons: StringIndexedObject<StringIndexedObject<string | number>>;
}

export default function useDropZoneCardProps({
  isDragActive,
  small,
  hasLabel,
  centerPlaceholder,
}: DropZoneCardPropsHookArgs): DropZoneCardPropsHook {
  const { baseClasses, inputClasses, skeletonClasses, wrapperClasses } =
    useFormTheme();

  const container = clsx(
    baseClasses,
    inputClasses,
    "border overflow-hidden mt-3",
    !small && !hasLabel ? "rounded-2xl" : "",
    isDragActive ? "border-turquoise-300" : "border-dashed border-neutral-300"
  );

  const error = wrapperClasses?.error;

  const span = small ? CLASS_NAMES.small : CLASS_NAMES.default;

  const icon = small ? ICON.small : ICON.default;

  const center = clsx(
    CLASS_NAMES.center,
    centerPlaceholder ? "mx-auto" : "w-full"
  );

  const skeletons = small ? SKELETONS.small : SKELETONS.default;

  return {
    classNames: {
      container,
      span,
      center,
      error,
    },
    icon,
    skeletonClasses,
    skeletons,
  };
}
