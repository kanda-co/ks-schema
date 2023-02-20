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
  } = useFormTheme();

  const inputBaseClass = useInputBaseClass(italic);

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
      iconVariant &&
        CLASS_NAMES.iconContainer["@iconVariant"][
          iconVariant as "default" | "dark" | "search"
        ]
    ),
    input: inputBaseClass,
  };

  const iconProps = {
    className: classNames.icon,
    ...(iconVariant &&
      ICON_PROPS[iconVariant as "default" | "dark" | "search"]),
  };

  return {
    classNames,
    iconProps,
  };
}
