import React, { FunctionComponent } from "react";
import usePostcodeInput from "./usePostcodeInput";
import type { PostcodeProps } from "../types";
import FieldFormController from "~/field/components/FieldFormController";
import InputUncontrolled from "~/field/components/Input/InputUncontrolled";
import type { FieldFormControllerChildrenArgs } from "~/field/components/FieldFormController/types";

const PostcodeUncontrolled: FunctionComponent<PostcodeProps> = function (
  props
) {
  const containerProps = usePostcodeInput(props);

  return (
    <FieldFormController {...containerProps} register>
      {(fieldProps: FieldFormControllerChildrenArgs) => (
        <InputUncontrolled {...fieldProps} />
      )}
    </FieldFormController>
  );
};

export default PostcodeUncontrolled;
