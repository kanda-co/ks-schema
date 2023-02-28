import React, { type FunctionComponent } from "react";
import { Context, type MultiStepFormContextValue } from "./Context";
import useMultiStepValue from "./useMultiStepValue";
import type { MultiStepFormProps } from "./types";
import Router from "./Router";
import Indicator from "./Indicator";
import Footer from "./Footer";
import useMultiStepFormContext from "./Context/useMultiStepFormContext";

const MultiStepForm: FunctionComponent<MultiStepFormProps> = function ({
  children,
  onSubmit,
  initialData,
  steps = [],
  initialStepIndex = 0,
  initialStepSafeIndex = 0,
  addStepsToUrl = false,
}) {
  const hookArgs = {
    steps,
    initialStepIndex,
    initialStepSafeIndex,
    addStepsToUrl,
    onSubmit,
    initialData,
  };

  const value = useMultiStepValue(hookArgs);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export {
  Context as MultiStepFormContext,
  Router as MultiStepFormRouter,
  Indicator as MultiStepFormIndicator,
  Footer as MultiStepFormFooter,
  useMultiStepFormContext,
  type MultiStepFormContextValue,
};

export default MultiStepForm;
