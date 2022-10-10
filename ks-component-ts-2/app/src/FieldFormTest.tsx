import React, { FunctionComponent } from "react";
import { Field } from "~/index";

export interface Props {}

const FieldFormTest: FunctionComponent<Props> = function ({}) {
  return (
    <>
      {/*<Field.Input name="hello" />*/}
      {/*<Field.Input autoSize name="autoSize" label="Autosizing input" />*/}
      {/*<Field.PasswordInput*/}
      {/*  name="password"*/}
      {/*  placeholder="Enter your password"*/}
      {/*  error="Please enter a valid password"*/}
      {/*/>*/}
      {/*<div className="mb-4">*/}
      {/*  <Field.BooleanInput*/}
      {/*    name="boolean"*/}
      {/*    label="Hello world"*/}
      {/*    handle="checkbox"*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<Field.Select*/}
      {/*  name="select"*/}
      {/*  label="Select"*/}
      {/*  options={[*/}
      {/*    { name: "hello", value: "one" },*/}
      {/*    { name: "world", value: "two" },*/}
      {/*    { name: "how are you?", value: "three" },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<Field.TextAreaInput name="name" label="Your name" />*/}
      {/*<Field.NumberFormatInput*/}
      {/*  name="sortCode1"*/}
      {/*  placeholder="Sort code"*/}
      {/*  format="##-##-##"*/}
      {/*/>*/}
      {/*<Field.SortCodeInput name="sortCode2" placeholder="Sort code field" />*/}
      <Field.Validator
        validation={{
          required: { value: true, message: "This is required" },
          min: { value: 0, message: "Value under min" },
          max: { value: 100, message: "Value over max" },
        }}
      >
        <Field.QuantityInput
          name="quantity"
          label="Quantity"
          placeholder="Quantity"
        />
      </Field.Validator>
      {/*<Field.PriceInput name="price" label="Price" />*/}
      {/*<Field.DatePickerInput name="date" label="Date" />*/}
      {/*/!*<Field.FingerprintBooleanInput*!/*/}
      {/*/!*  handle="checkbox"*!/*/}
      {/*/!*  name="acceptedTerms"*!/*/}
      {/*/!*  fieldText="I acknowledge that by clicking the submit button I agree the job has been completed satisfactorily"*!/*/}
      {/*/!*/
      /*/}
      {/*<Field.RadioSelect*/}
      {/*  name="gender"*/}
      {/*  label="Gender"*/}
      {/*  options={[*/}
      {/*    { name: "Male", value: "male" },*/}
      {/*    { name: "Female", value: "female" },*/}
      {/*  ]}*/}
      {/*/>*/}
    </>
  );
};

export default FieldFormTest;
