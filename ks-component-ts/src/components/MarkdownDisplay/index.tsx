import React, { type FunctionComponent } from "react";
import Field from "~/field";

export interface MarkdownDisplayProps {
  children: string;
}

const MarkdownDisplay: FunctionComponent<MarkdownDisplayProps> = function ({
  children,
}) {
  return <Field.RichTextInput readOnly initialValue={children} />;
};

export default MarkdownDisplay;
