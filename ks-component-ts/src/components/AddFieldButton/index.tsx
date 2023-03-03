import React, { type FunctionComponent } from "react";

export interface AddFieldButtonProps {
  label: string;
  onClick: () => void;
}

const AddFieldButton: FunctionComponent<AddFieldButtonProps> = function ({
  label,
  onClick,
}) {
  return (
    <div
      className="mb-3 text-sm cursor-pointer text-neutral-500"
      onClick={() => {
        onClick();
      }}
    >
      + {label}
    </div>
  );
};

export default AddFieldButton;
