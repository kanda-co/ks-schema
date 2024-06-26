import FormTheme from "./components/FormTheme";
import FormWrapper from "./components/FormWrapper";
import Field, { type FieldProps } from "~/field";

export { Field, FormTheme, FormWrapper };

export {
  MultiStepFormContext,
  MultiStepFormRouter,
  MultiStepFormIndicator,
  MultiStepFormFooter,
  useMultiStepFormContext,
} from "./components/MultiStepForm";

export { makeIsAllowed } from "./field/helpers";

export { default as Label } from "./field/components/Label";
export { default as Error } from "./field/components/Error";

export { default as useMultiStep } from "./hooks/useMultiStep";
export { default as useDownloadPdf } from "./hooks/useDownloadPdf";
export { default as useDownloadDocument } from "./hooks/useDownloadDocument";

export { type FieldProps };

export * from "./components";

export { Widget } from "./generated";

export { default as FieldHandle } from "./components/Handle";

export {
  CommonWrapper,
  ModalsWrapper,
  ModalsWrapperContext,
  ModalContainer,
  ModalLayoutCenter,
  ModalLayoutFullScreen,
  ModalLayoutSlideLeft,
  ModalLayoutSlideUp,
} from "@kanda-libs/ks-design-library";

export {
  useForm,
  useFormContext,
  Controller,
  useFieldArray,
  useFormState,
  useWatch,
  useController,
  type UseFormReturn,
} from "react-hook-form";
