import React, { FunctionComponent } from "react";
import { Field } from "../../../src";
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
              {/*<DirectorSalary id={field.id} index={index} />*/}
            </>
          ))}
          <AddDirectorButton append={append} />
        </>
      )}
    </Field.Array.Wrapper>
  );
};

export default DirectorForm;
