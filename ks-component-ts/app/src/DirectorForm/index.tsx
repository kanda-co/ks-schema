import React, { FunctionComponent } from "react";
import { Field } from "@kanda-libs/ks-component-ts";
import AddDirectorButton from "./AddDirectorButton";
import DirectorName from "./DirectorName";
import DirectorSalary from "./DirectorSalary";
import { StringIndexedObject } from "@kanda-libs/ks-amplitude-provider/src/types";

export interface Props {}

interface ArrayProps {
  append: () => void;
}

interface WrapProps {
  fields: StringIndexedObject;
  arrayProps: ArrayProps;
}

const BASE_ITEM = {
  firstName: "",
  lastName: "",
};

const DirectorForm: FunctionComponent<Props> = function ({}) {
  return (
    <Field.Array.Wrapper arrayName="director" initialData={[BASE_ITEM]}>
      {({ fields, arrayProps: { append } }: WrapProps): JSX.Element => (
        <>
          {fields.map((field: StringIndexedObject, index: number) => (
            <DirectorName key={field.id} id={field.id} index={index} />
          ))}
          <AddDirectorButton append={append} />
        </>
      )}
    </Field.Array.Wrapper>
  );
};

export default DirectorForm;
