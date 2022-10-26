import {
  MutableRefObject,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Context } from "./Context";

export interface SliderRefValue {
  slickGoTo: (index: number) => void;
}

export type SliderRef = MutableRefObject<SliderRefValue | undefined>;

export interface StepsHook {
  sliderRef: SliderRef;
  lockButtons: MutableRefObject<boolean>;
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
  step: string | number;
  setStep: (step: string | number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function useSteps(
  steps: string[],
  initialStepIndex: number,
  initialStepSafeIndex: number,
  addStepsToUrl: boolean
): StepsHook {
  const sliderRef = useRef<SliderRefValue>();
  const lockButtons = useRef(false);

  const parentContext = useContext(Context);
  const isNested = Boolean(parentContext);

  const stepIndexRef = useRef(initialStepIndex || 0);
  const stepSafeIndexRef = useRef(initialStepSafeIndex || 0);

  const [currentStepIndex, setCurrentStepState] = useState(
    initialStepIndex || 0
  );
  const [currentStep, setCurrentStep] = useState(steps[currentStepIndex]);

  /**
   * Updates step
   */
  const setCurrentStepIndex = useCallback(
    (stepIndex, checkSafe = false, changeUrl = true) => {
      if (checkSafe && stepIndex > stepSafeIndexRef.current) return;

      stepIndexRef.current = stepIndex;
      stepSafeIndexRef.current = Math.max(stepSafeIndexRef.current, stepIndex);

      setCurrentStep(steps[stepIndex]);
      setCurrentStepState(stepIndex);

      if (!isNested && changeUrl) {
        // Set timeout needed for firefix

        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);

        if (addStepsToUrl) {
          const url = new URL(window.location.href);
          url.searchParams.set("step", steps[stepIndex]?.toString());
          window.history.pushState({}, "", url);
        }
      }
    },
    [addStepsToUrl, isNested, steps]
  );

  /**
   * Handles previous step
   */
  const prevStep = useCallback(() => {
    if (lockButtons.current) {
      return;
    }

    if (stepIndexRef.current > 0) {
      setCurrentStepIndex(stepIndexRef.current - 1);

      if (sliderRef.current?.slickGoTo) {
        // move slider if slider is available
        sliderRef.current?.slickGoTo(stepIndexRef.current);
      }
    }
  }, [setCurrentStepIndex]);

  /**
   * Handles next step
   */
  const nextStep = useCallback(() => {
    if (lockButtons.current) {
      return;
    }

    if (stepIndexRef.current < steps.length - 1) {
      setCurrentStepIndex(stepIndexRef.current + 1);

      if (sliderRef.current?.slickGoTo) {
        // move slider if slider is available
        sliderRef.current?.slickGoTo(stepIndexRef.current);
      }
    }
  }, [setCurrentStepIndex, steps]);

  /**
   * Changes current step to a givend one
   * @param {any} step - value of steps array
   */
  const setStep = useCallback(
    (step, checkSafe = false, changeUrl = true) => {
      const index = steps.indexOf(step);

      if (index !== -1) {
        setCurrentStepIndex(index, checkSafe, changeUrl);
      }
    },
    [setCurrentStepIndex, steps]
  );

  useEffect(() => {
    if (isNested) return undefined;

    const url = new URL(window.location.href);
    const urlStep = url.searchParams.get("step");

    if (urlStep) {
      return setStep(urlStep, true, false);
    }

    return setCurrentStepIndex(initialStepIndex, true, false);
  }, [initialStepIndex, isNested, setCurrentStepIndex, setStep]);

  return {
    sliderRef,
    lockButtons,
    currentStepIndex,
    setCurrentStepIndex,
    step: currentStep,
    setStep,
    nextStep,
    prevStep,
  };
}
