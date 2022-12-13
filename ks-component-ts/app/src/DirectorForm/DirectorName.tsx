import React, { FunctionComponent } from "react";
import { Field, RowFields } from "@kanda-libs/ks-component-ts";

export interface Props {
  id: string;
  index: number;
}

const DirectorName: FunctionComponent<Props> = function ({ id, index }) {
  return (
    <RowFields>
      <Field.Array.Input name="firstName" key={id} index={index}>
        <Field.Validator
          validation={{
            required: {
              value: true,
              message: "First Name is required",
            },
          }}
        >
          <Field.Input label="First name" />
        </Field.Validator>
      </Field.Array.Input>
      <Field.Array.Input name="lastName" key={id} index={index}>
        <Field.Validator
          validation={{
            required: {
              value: true,
              message: "Last Name is required",
            },
          }}
        >
          <Field.Input label="Last name" />
        </Field.Validator>
      </Field.Array.Input>
    </RowFields>
  );
};

export default DirectorName;
