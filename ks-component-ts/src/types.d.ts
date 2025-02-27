export type StringIndexedObject<T = any> = Record<string, T>;

export type FieldWrapperType = "Simple" | "Default";

export interface Theme {
  fieldWrapper: FieldWrapperType;
  baseClasses: string;
  inputClasses?: string;
  focusClasses: string;
  paddingClasses: string;
  skeletonClasses: string;
  chevronClasses?: string;
  themeIconVariant?: "default" | "search" | "dark" | "small";
  placeholderClasses?: string;
  makeErrorClasses: (error?: string) => string;
  wrapperClasses?: {
    baseContainer: string;
    error: string;
    warning?: string;
    label: string;
    helperText: string;
  };
  buttonClasses?: string;
  variant?: string;
}
