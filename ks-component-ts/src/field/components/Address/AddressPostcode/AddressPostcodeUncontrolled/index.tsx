import React, { FunctionComponent } from "react";
import type { PostcodeProps } from "~/field/components/Address/types";
import Input from "~/field/components/Input";
import usePostcodeInput from "./usePostcodeInput";
import { DefaultFormFieldProps, FieldInfoWrapperProps } from "~/field/types";

const AddressPostcodeUncontrolled: FunctionComponent<
  DefaultFormFieldProps<PostcodeProps> & FieldInfoWrapperProps
> = function (props) {
  const containerProps = usePostcodeInput(props);

  return <Input {...containerProps} />;
};

export default AddressPostcodeUncontrolled;
