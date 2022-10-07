import React, { FunctionComponent } from "react";
import { Field, RowFields } from "~/index";

export interface Props {
  id: string;
  index: number;
}

const DirectorName: FunctionComponent<Props> = function ({ id, index }) {
  return (
    <RowFields>
      <Field.Array.Input name="firstName" key={id} index={index}>
        <Field.Input label="First name" />
      </Field.Array.Input>
      <Field.Array.Input name="lastName" key={id} index={index}>
        <Field.Input label="Last name" />
      </Field.Array.Input>
    </RowFields>
  );
};

export default DirectorName;
