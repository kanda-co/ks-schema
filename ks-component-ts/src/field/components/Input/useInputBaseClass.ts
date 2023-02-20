import clsx from "clsx";
import useFormTheme from "~/hooks/useFormTheme";
import { CLASS_NAMES } from "./constants";

export type InputBaseClassHook = string;

export default function useInputBaseClass(italic = ""): InputBaseClassHook {
  const { paddingClasses, inputClasses } = useFormTheme();

  return clsx(
    CLASS_NAMES.input.base,
    paddingClasses,
    inputClasses,
    italic && CLASS_NAMES.input.italic
  );
}
