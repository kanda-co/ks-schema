import React, { type FunctionComponent } from "react";
import { BreakPoints } from "@kanda-libs/ks-design-library";
import { type SelectionModalUncontrolledProps } from "./types";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

export type { SelectionModalUncontrolledProps };

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
