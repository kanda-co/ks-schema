import { useMemo } from "react";

import { CLASS_NAMES } from "./constants";
import { type StringIndexedObject } from "~/types";
import clsx from "clsx";

export default function useRadioSelectUncontrolledClassNames(
  inline: boolean,
  wrap: boolean,
  className?: string
): StringIndexedObject<string> {
  const classNames = useMemo(() => {
    if (wrap) return CLASS_NAMES.wrap;
    if (inline) return CLASS_NAMES.inline;
    return CLASS_NAMES.multiline;
  }, [inline, wrap]);

  return { ...classNames, container: clsx(classNames.container, className) };
}
