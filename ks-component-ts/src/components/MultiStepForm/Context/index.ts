import { createContext, MutableRefObject } from "react";
import { StringIndexedObject } from "~/types";
import { SliderRef } from "~/components/MultiStepForm/useSteps";

export interface MultiStepFormContextValue<T = StringIndexedObject> {
  /**
   * Function to handle continuing to next step
   */
  handleContinue: (data: T) => void;
  /**
   * Function to handle form submission
   */
  handleSubmit: (data: T) => void;
  /**
   * Function to handle going to next step - does not save data!
   */
  nextStep: () => void;
  /**
   * Function to handle going to previous step
   */
  prevStep: () => void;
  /**
   * Function to set data
   */
  setData: (data: T) => void;
  /**
   * Form data
   */
  data: T;
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
  handleContinue: () => {
    // Empty
  },
  handleSubmit: () => {
    // Empty
  },
  nextStep: () => {
    // Empty
  },
  prevStep: () => {
    // Empty
  },
  setData: () => {
    // Empty
  },
  setStep: () => {
    // Empty
  },
  setCurrentStepIndex: () => {
    // Empty
  },
});
