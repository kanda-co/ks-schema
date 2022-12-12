import { StringIndexedObject } from "@kanda-libs/ks-amplitude-provider/src/types";
import React, { useEffect, type FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";
// import { Amplitude, useAmplitude } from "@kanda-libs/ks-amplitude-provider";

const formatErrorBody = (
  id: string,
  values: StringIndexedObject,
  errors: StringIndexedObject
) => {};

export interface FormErrorTrackerProps {
  id: string;
}

const FormErrorTracker: FunctionComponent<FormErrorTrackerProps> = function ({
  id,
}) {
  const {
    getValues,
    formState: { errors },
  } = useFormContext();
  // const x = useFormContext();
  // console.log(x);
  // const { logEvent } = useAmplitude();
  // const { flush } = Amplitude;

  useEffect(() => {
    if (Object.keys(errors).length === 0) return;
    console.log(errors);
    console.log(id);
  }, [errors]);

  return null;
};

export default FormErrorTracker;
