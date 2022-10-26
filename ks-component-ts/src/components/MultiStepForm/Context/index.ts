import { createContext, MutableRefObject } from "react";
import { StringIndexedObject } from "~/types";
import { SliderRef } from "~/components/MultiStepForm/useSteps";

interface MultiStepFormContextValue {
  /**
   * Function to handle continuing to next step
   */
  handleContinue?: (data: StringIndexedObject) => void;
  /**
   * Function to handle form submission
   */
  handleSubmit?: (data: StringIndexedObject) => void;
  /**
   * Function to handle going to next step - does not save data!
   */
  nextStep?: () => void;
  /**
   * Function to handle going to previous step
   */
  prevStep?: () => void;
  /**
   * Function to set data
   */
  setData?: (data: StringIndexedObject) => void;
  /**
   * Form data
   */
  data: StringIndexedObject;
  /**
   * Function to set specific step
   */
  setStep?: (step: string) => void;
  /**
   * Step the form is currently on
   */
  step: string | number;
  /**
   * Slider ref
   */
  sliderRef?: SliderRef;
  /**
   * Function for setting current step index
   */
  setCurrentStepIndex?: (index: number) => void;
  currentStepIndex?: number;
  /**
   * Locked state for the buttons
   */
  lockButtons?: MutableRefObject<boolean>;
  steps: string[];
}

export const Context = createContext<MultiStepFormContextValue>({
  step: 0,
  steps: [],
  data: {},
});
