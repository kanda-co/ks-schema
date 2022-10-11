import React, { FunctionComponent } from "react";
import usePostcodeInput from "./usePostcodeInput";
import type { PostcodeProps } from "../types";
import FieldFormController from "~/field/components/FieldFormController";
import Input from "~/field/components/Input";
import type { FieldFormControllerChildrenArgs } from "~/field/components/FieldFormController/types";

const PostcodeUncontrolled: FunctionComponent<PostcodeProps> = function (
  props
) {
  const containerProps = usePostcodeInput(props);

  return (
    <FieldFormController {...containerProps} register>
      {(fieldProps: FieldFormControllerChildrenArgs) => (
        <Input {...fieldProps} />
      )}
    </FieldFormController>
  );
};

export default PostcodeUncontrolled;
