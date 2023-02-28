import { useContext, type Context } from "react";
import { Context as MultiStepFormContext, MultiStepFormContextValue } from ".";

export default function useMultiStepFormContext<
  T
>(): MultiStepFormContextValue<T> {
  return useContext<MultiStepFormContextValue<T>>(
    MultiStepFormContext as unknown as Context<MultiStepFormContextValue<T>>
  );
}
