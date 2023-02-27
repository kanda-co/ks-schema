import { useMemo } from "react";

import { CLASS_NAMES } from "./constants";
import { type StringIndexedObject } from "~/types";

export default function useRadioSelectUncontrolledClassNames(
  inline: boolean,
  wrap: boolean
): StringIndexedObject<string> {
  const classNames = useMemo(() => {
    if (wrap) return CLASS_NAMES.wrap;
    if (inline) return CLASS_NAMES.inline;
    return CLASS_NAMES.multiline;
  }, [inline, wrap]);

  return classNames;
}
