import clsx from "clsx";
import {
  type ChangeEvent,
  type KeyboardEvent,
  useCallback,
  useState,
} from "react";
import { preventDefaultOnEnter } from "./helpers";
import { type AutoSizeTextAreaUncontrolledProps } from "./types";
import useFormTheme from "~/hooks/useFormTheme";

export type AutoSizeTextAreaUncontrolledPropsHookArgs = Omit<
  AutoSizeTextAreaUncontrolledProps,
  "name" | "id" | "placeholder" | "onChange"
>;

export interface AutoSizeTextAreaUncontrolledPropsHook {
  placeholderClassName: string;
  className: string;
  skeletonClasses: string;
  onKeyDown?: false | ((e: KeyboardEvent) => boolean);
  onBlur?: false | ((e: ChangeEvent<HTMLInputElement>) => void);
  value?: string | number | readonly string[];
  showPlaceholder?: boolean;
}

export default function useAutoSizeTextAreaUncontrolledProps({
  error,
  className: initialClassName,
  onBlur: initialOnBlur,
  collapsible,
  disableNewLine,
  defaultValue,
}: AutoSizeTextAreaUncontrolledPropsHookArgs): AutoSizeTextAreaUncontrolledPropsHook {
  const [value, setValue] = useState(defaultValue);

  const {
    baseClasses,
    inputClasses,
    paddingClasses,
    focusClasses,
    makeErrorClasses,
    skeletonClasses,
  } = useFormTheme();

  const showPlaceholder = !!(collapsible && value);

  const className = clsx(
    "resize-none",
    baseClasses,
    inputClasses,
    paddingClasses,
    focusClasses,
    makeErrorClasses(error as string),
    initialClassName,
    showPlaceholder &&
      "h-full absolute opacity-0 focus:opacity-100 focus:relative focus:h-auto"
  );

  const placeholderClassName = clsx(
    baseClasses.replace("flex", "").replace("w-full", ""),
    paddingClasses,
    focusClasses,
    makeErrorClasses(error as string),
    initialClassName,
    "block field-focus:hidden whitespace-nowrap truncat overflow-ellipsis overflow-hidden min-w-0"
  );

  const onKeyDown = disableNewLine && preventDefaultOnEnter;

  /**
   * Overrrides onBlur event to store the value
   * @param e onBlur event
   */
  const onBlur = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (collapsible) {
        setValue(e.target.value);
      }

      if (!initialOnBlur) return;

      return initialOnBlur(e);
    },
    [initialOnBlur, collapsible]
  );

  return {
    placeholderClassName,
    className,
    skeletonClasses,
    onKeyDown,
    onBlur,
    value,
    showPlaceholder,
  };
}
