import React, { FunctionComponent } from "react";
import { Context } from "./Context";
import useMultiStepValue from "./useMultiStepValue";
import type { MultiStepFormProps } from "./types";
import Router from "./Router";

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

export { Context as MultiStepFormContext, Router as MultiStepFormRouter };

export default MultiStepForm;
