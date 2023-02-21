import React, { type FunctionComponent, type MutableRefObject } from "react";
import "draft-js/dist/Draft.css";
import { Controller } from "react-hook-form";
import type { FieldFormControllerChildrenArgs } from "../../FieldFormController/types";
import RichTextInputUncontrolled from "./RichTextInputUncontrolled";

export interface RichTextInputControlledProps {
  name?: string;
  placeholder?: string;
  forwardRef?: MutableRefObject<HTMLDivElement>;
  initialValue?: string;
  readOnly?: boolean;
  inputHasMinHeight?: boolean;
}

const RichTextInputControlled: FunctionComponent<
  FieldFormControllerChildrenArgs<RichTextInputControlledProps>
> = function ({ name = "", control, ...props }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <RichTextInputUncontrolled {...props} onChange={onChange} />
      )}
    />
  );
};

export default RichTextInputControlled;
