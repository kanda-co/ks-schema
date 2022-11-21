import React, { FunctionComponent } from "react";
import { BreakPoints } from "@kanda-libs/ks-design-library";
import { DefaultFormFieldProps } from "~/field/types";
import { SelectionModalProps } from "./types";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

export type SelectionModalUncontrolledProps =
  DefaultFormFieldProps<SelectionModalProps>;

const SelectionModalUncontrolled: FunctionComponent<SelectionModalUncontrolledProps> =
  function (props) {
    return (
      <BreakPoints
        mobile={<Mobile {...props} />}
        desktop={<Desktop {...props} />}
      />
    );
  };

export default SelectionModalUncontrolled;
