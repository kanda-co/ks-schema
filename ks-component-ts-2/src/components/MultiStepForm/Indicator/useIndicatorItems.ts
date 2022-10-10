import { useContext } from "react";
import clsx from "clsx";
import { Context } from "../Context";
import { CLASS_NAMES } from "./constants";

export default function useIndicatorItems(): string[] {
  const { currentStepIndex, steps } = useContext(Context);

  const totalSteps = steps.length;

  const { pageBase, pageActive, pageInactive } = CLASS_NAMES;

  const items = Array.from(Array(totalSteps), (_, index) =>
    clsx(pageBase, currentStepIndex === index ? pageActive : pageInactive)
  );

  return items;
}
