import {
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
  useRef,
} from "react";
import useSteps, { StepsHook } from "./useSteps";
import { MultiStepFormProps } from "./types";
import { StringIndexedObject } from "~/types";

export type MultiStepFormValueArgs = Omit<MultiStepFormProps, "children">;

export interface MultiStepValueHook extends Omit<StepsHook, "nextStep"> {
  data: StringIndexedObject;
  steps: number[];
  setData: (data: StringIndexedObject) => void;
  handleSubmit: (data: StringIndexedObject) => void;
  handleContinue: (data: StringIndexedObject) => void;
  nextStep: () => void;
}

export default function useMultiStepValue({
  steps,
  onSubmit,
  initialData,
  initialStepIndex,
  initialStepSafeIndex,
  addStepsToUrl,
}: MultiStepFormValueArgs): MultiStepValueHook {
  /**
   * keeps the data from all forms
   */
  const initialDataRef = useRef(initialData);
  const [data, setData] = useState(initialData);
  const { nextStep, ...stepProps } = useSteps(
    steps as number[],
    initialStepIndex as number,
    initialStepSafeIndex as number,
    addStepsToUrl as boolean
  );
  const [submitting, setSubmitting] = useState(false);

  /**
   * Continues to next step and updates data state
   * @param {Object} newData - the new data passed from current form:
   */
  const handleContinue = useCallback(
    (newData) => {
      setData(newData);
      nextStep();
    },
    [nextStep, setData]
  );

  /**
   * Sets subbmitting true in order to call onSubmit on next render
   */
  const handleSubmit = useCallback(() => {
    setSubmitting(true);
  }, []);

  /**
   * triggers on submit on next render in case setData and handleSubmit are called together
   * in order to have te latest data
   */
  useLayoutEffect(() => {
    if (submitting && onSubmit) {
      onSubmit(data as StringIndexedObject);
    }
    setSubmitting(false);
  }, [data, submitting, onSubmit]);

  /**
   * triggers when initial data is changed
   */
  useEffect(() => {
    if (
      JSON.stringify(initialDataRef.current) !== JSON.stringify(initialData)
    ) {
      setData(initialData);
      initialDataRef.current = initialData;
    }
  }, [initialData]);

  return {
    ...stepProps,
    data: data as StringIndexedObject,
    steps: steps as number[],
    setData,
    handleSubmit,
    handleContinue,
    nextStep,
  };
}
