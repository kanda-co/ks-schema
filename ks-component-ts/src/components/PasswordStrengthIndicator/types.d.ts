import { StringIndexedObject } from "~/types";

export interface PasswordStrengthIndicatorProps {
  className?: string;
  passwordFieldName?: string;
  passwordScoreFieldName?: string;
  /**
   * User input field names
   * ex?: ['email', 'firstName', 'lastNName', ...]
   */
  userInputFieldNames?: string[];
  /**
   * Extra user inpus to check
   * ex?: ['name@company.com', 'Lorem ipsum', ...]
   */
  userInputs?: string[];
  /**
   * Field description
   */
  description?: string;
}

export type Dictionaries = StringIndexedObject<string>;
