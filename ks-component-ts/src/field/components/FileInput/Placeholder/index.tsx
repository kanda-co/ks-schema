import React, { type FunctionComponent } from "react";

const Placeholder: FunctionComponent = function ({}) {
  return (
    <div className="py-6 flex flex-row">
      <span className="text-14-22 text-neutral-600">
        <span className="mr-1 text-14-22-em text-green-400">
          Click to upload file
        </span>
        or drag & drop
      </span>
    </div>
  );
};

export default Placeholder;
