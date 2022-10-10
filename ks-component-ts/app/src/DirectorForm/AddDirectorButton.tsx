import React, { FunctionComponent } from "react";
import { type Director } from "./types";

export interface Props {
  append: (director: Director) => void;
}

const AddDirectorButton: FunctionComponent<Props> = function ({ append }) {
  return (
    <div>
      <button
        onClick={() => {
          append({ firstName: "", lastName: "", salary: "" });
        }}
      >
        Add new director
      </button>
    </div>
  );
};

export default AddDirectorButton;
