import clsx from "clsx";
import {
  CLASS_NAMES,
  LEFT_ALIGNED_CLASS_NAMES,
  RowFieldsClassNames,
  VERTICALLY_CENTERED_CLASS_NAME,
} from "./constants";

export type RowFieldsClassNamesHook = RowFieldsClassNames;

export default function useRowFieldsClassNames(
  leftAligned: boolean,
  verticallyCentered: boolean
): RowFieldsClassNamesHook {
  const baseClassNames = leftAligned ? LEFT_ALIGNED_CLASS_NAMES : CLASS_NAMES;

  return {
    ...baseClassNames,
    container: clsx(
      baseClassNames.container,
      verticallyCentered ? VERTICALLY_CENTERED_CLASS_NAME : ""
    ),
  };
}
