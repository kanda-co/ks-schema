import React, { FunctionComponent } from "react";
import { Field } from "@kanda-libs/ks-component-ts";

export interface Props {
  id: string;
  index: number;
}

const VALIDATION = {
  required: { value: true, message: "Salary is required." },
  min: { value: 0, message: "Salary must be great than 0" },
  max: {
    value: 2147483647,
    message: "Salary must be smaller than 2.147483647e+09",
  },
};

const DirectorSalary: FunctionComponent<Props> = function ({ id, index }) {
  return (
    <Field.Array.Input name="salary" key={id} index={index}>
      <Field.PriceInput label="Salary" />
    </Field.Array.Input>
  );
};

export default DirectorSalary;
