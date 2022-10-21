import { useContext } from "react";
import {
  DEFAULT_PREV_BUTTON_PROPS,
  DEFAULT_NEXT_BUTTON_PROPS,
} from "./constants";
import { Context } from "../Context";
import { StringIndexedObject } from "~/types";

export interface FooterButtonPropsHook {
  nextButtonProps: StringIndexedObject;
  prevButtonProps: StringIndexedObject;
}

export default function useFooterButtonProps(
  initialNextButtonProps?: StringIndexedObject,
  initialPrevButtonProps?: StringIndexedObject
): FooterButtonPropsHook {
  const { prevStep, currentStepIndex, nextStep } = useContext(Context);

  const disablePrev = currentStepIndex === 0;

  const onClick = !initialNextButtonProps?.submit
    ? initialNextButtonProps?.onClick || nextStep
    : undefined;

  const prevOnClick = initialPrevButtonProps?.onClick || prevStep;

  const prevButtonProps = {
    ...DEFAULT_PREV_BUTTON_PROPS,
    ...initialPrevButtonProps,
    disabled: disablePrev,
    onClick: prevOnClick,
  };

  const nextButtonProps = {
    ...DEFAULT_NEXT_BUTTON_PROPS,
    ...initialNextButtonProps,
    onClick,
  };

  return {
    nextButtonProps,
    prevButtonProps,
  };
}
