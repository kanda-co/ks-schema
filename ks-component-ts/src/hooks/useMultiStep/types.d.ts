export interface MultiStepRouterState<T extends StringIndexedObject> {
  page: keyof T;
  data: T[keyof T];
}

export interface FormWrapperProps {
  children: JSX.Element | JSX.Element[];
}
