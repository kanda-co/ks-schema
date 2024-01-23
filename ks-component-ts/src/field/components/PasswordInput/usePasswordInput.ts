import { useCallback, useState } from "react";
import clsx from "clsx";
import useFormTheme from "~/hooks/useFormTheme";

export interface Hook {
  className: string;
  skeletonClasses: string;
  buttonClassName: string;
  type: string;
  showPassword: boolean;
  toggleShowPassword: () => void;
}

export default function usePasswordInput(error: string): Hook {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword, setShowPassword]);

  const type = showPassword ? "text" : "password";

  const {
    baseClasses,
    inputClasses,
    paddingClasses,
    focusClasses,
    makeErrorClasses,
    skeletonClasses,
    buttonClasses,
  } = useFormTheme();

  const className = clsx(
    baseClasses,
    inputClasses,
    paddingClasses,
    focusClasses,
    makeErrorClasses(error),
    "pr-12"
  );
  const buttonClassName = [
    buttonClasses || "mt-3.5 mr-4",
    "absolute right-0 stroke-current text-neutral-500",
  ].join(" ");

  return {
    className,
    skeletonClasses,
    buttonClassName,
    type,
    showPassword,
    toggleShowPassword,
  };
}
