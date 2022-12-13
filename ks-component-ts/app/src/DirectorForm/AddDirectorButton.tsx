import React, { FunctionComponent } from "react";
import { type Director } from "./types";

export interface Props {
  append: (director: Director) => void;
}

const BASE_ITEM = {
  firstName: "",
  lastName: "",
};

const AddDirectorButton: FunctionComponent<Props> = function ({ append }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          append(BASE_ITEM);
        }}
      >
        Add new director
      </button>
    </div>
  );
};

export default AddDirectorButton;
