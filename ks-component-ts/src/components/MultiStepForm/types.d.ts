import { StringIndexedObject } from "~/types";
import { FunctionComponent } from "react";

export type Pages = StringIndexedObject<FunctionComponent<any>>;

export interface SliderProps {
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  adaptiveHeight: boolean;
  infinite: boolean;
}

export interface MultiStepFormProps {
  children?: JSX.Element | JSX.Element[];
  /**
   * Initial data of parent form
   */
  initialData?: StringIndexedObject;
  /**
   * Steps as array
   */
  steps: string[];
  /**
   * Redirect
   */
  onStepChange?: (data: StringIndexedObject) => void;
  /**
   * First step to display starting from 0
   */
  initialStepIndex?: number;
  /**
   * Maximum safe step index
   */
  initialStepSafeIndex?: number;
  /**
   * callback when the the form is submitted
   */
  onSubmit?: (data: StringIndexedObject) => void;
  /**
   * add steps to url
   */
  addStepsToUrl?: boolean;
}
