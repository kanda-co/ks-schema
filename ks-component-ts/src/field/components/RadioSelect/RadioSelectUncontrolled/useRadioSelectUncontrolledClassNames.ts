import { CLASS_NAMES } from "./constants";
import { type StringIndexedObject } from "~/types";

export default function useRadioSelectUncontrolledClassNames(
  inline: boolean
): StringIndexedObject<string> {
  const classNames = inline ? CLASS_NAMES.inline : CLASS_NAMES.multiline;

  return classNames;
}
