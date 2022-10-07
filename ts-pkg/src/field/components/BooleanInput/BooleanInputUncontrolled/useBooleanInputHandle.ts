import clsx from "clsx";
import {
  type HandleComponent,
  type HandleType,
} from "~/components/Handle/types";
import useFormTheme from "~/hooks/useFormTheme";
import { CLASS_NAMES } from "./constants";
import { getHandle } from "~/field/components/BooleanInput/BooleanInputUncontrolled/helpers";

export interface Hook {
  Handle: HandleComponent;
  skeletonClassName: string;
}

export default function useBooleanInputHandle(
  type: HandleType | undefined
): Hook {
  const { skeletonClasses } = useFormTheme();

  const skeletonClassName = clsx(skeletonClasses, CLASS_NAMES.skeleton);

  return {
    Handle: getHandle(type),
    skeletonClassName,
  };
}
