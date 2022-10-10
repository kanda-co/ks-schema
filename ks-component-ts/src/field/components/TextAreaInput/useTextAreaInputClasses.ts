import clsx from "clsx";
import useFormTheme from "~/hooks/useFormTheme";

interface Hook {
  className: string;
  skeletonClasses: string;
}

export default function useTextAreaInputClasses(
  initialClassName?: string,
  error?: string
): Hook {
  const {
    baseClasses,
    inputClasses,
    paddingClasses,
    focusClasses,
    makeErrorClasses,
    skeletonClasses,
  } = useFormTheme();

  const className = clsx(
    baseClasses,
    inputClasses,
    paddingClasses,
    focusClasses,
    makeErrorClasses(error),
    initialClassName
  );

  return {
    className,
    skeletonClasses,
  };
}
