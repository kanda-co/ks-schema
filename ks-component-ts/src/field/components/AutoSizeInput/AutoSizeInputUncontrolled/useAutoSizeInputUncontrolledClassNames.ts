import useFormTheme from "~/hooks/useFormTheme";
import clsx from "clsx";

export interface AutoSizeInputUncontrolledClassNamesHook {
  className: string;
  skeletonClasses: string;
}

export default function useAutoSizeInputUncontrolledClassNames(
  initialClassName: string,
  error: string
): AutoSizeInputUncontrolledClassNamesHook {
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
