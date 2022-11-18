import React, { type FunctionComponent, useEffect } from "react";
import type { PostcodeProps } from "~/field/components/Address/types";
import Input from "~/field/components/Input";
import usePostcodeInput from "./usePostcodeInput";

const AddressPostcodeUncontrolled: FunctionComponent<PostcodeProps> = function (
  props
) {
  const containerProps = usePostcodeInput(props);

  return <Input {...containerProps} />;
};

export default AddressPostcodeUncontrolled;
