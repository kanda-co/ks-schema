import React, { FunctionComponent } from "react";
import { Field } from "../../../dist";
import AddDirectorButton from "./AddDirectorButton";
import DirectorName from "./DirectorName";
import DirectorSalary from "./DirectorSalary";

export interface Props {}

const DirectorForm: FunctionComponent<Props> = function ({}) {
  return (
    <Field.Array.Wrapper arrayName="director">
      {({ fields, arrayProps: { append } }) => (
        <>
          {fields.map((field, index) => (
            <>
              <DirectorName id={field.id} index={index} />
            </>
          ))}
        </>
      )}
    </Field.Array.Wrapper>
  );
};

export default DirectorForm;
