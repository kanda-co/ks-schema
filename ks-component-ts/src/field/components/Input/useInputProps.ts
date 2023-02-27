import useFormTheme from "~/hooks/useFormTheme";
import clsx from "clsx";
import { ErrorMessage } from "~/field/types";
import { CLASS_NAMES, ICON_PROPS } from "./constants";
import useInputBaseClass from "./useInputBaseClass";

interface HookClassNames {
  containerBase: string;
  iconBase: string;
  container: string;
  skeleton: string;
  icon: string;
  iconContainer: string;
  input: string;
}

export interface Hook {
  classNames: HookClassNames;
  iconProps: {
    className: string;
    size?: number;
  };
}

/**
 * Returns the classNames object and icon props that are used for rendering the uncontrolled input
 */
export default function useInputProps(
  error?: string | ErrorMessage,
  iconColor?: string,
  iconVariant?: string,
  italic?: string
): Hook {
  const {
    baseClasses,
    paddingClasses,
    focusClasses,
    makeErrorClasses,
    skeletonClasses,
    themeIconVariant,
  } = useFormTheme();

  const inputBaseClass = useInputBaseClass(italic);

  const baseIconVariant = themeIconVariant || iconVariant || null;

  const classNames = {
    ...CLASS_NAMES,
    container: clsx(
      CLASS_NAMES.containerBase,
      baseClasses,
      focusClasses && focusClasses.replaceAll("focus:", "focus-within:"),
      makeErrorClasses && error && makeErrorClasses(error as string)
    ),
    skeleton: clsx(skeletonClasses, paddingClasses),
    icon: clsx(CLASS_NAMES.iconBase, iconColor),
    iconContainer: clsx(
      CLASS_NAMES.iconContainer.base,
      baseIconVariant &&
        CLASS_NAMES.iconContainer["@iconVariant"][
          baseIconVariant as "default" | "dark" | "search" | "small"
        ]
    ),
    input: inputBaseClass,
  };

  const iconProps = {
    className: classNames.icon,
    ...(baseIconVariant &&
      ICON_PROPS[baseIconVariant as "default" | "dark" | "search" | "small"]),
  };

  return {
    classNames,
    iconProps,
  };
}
