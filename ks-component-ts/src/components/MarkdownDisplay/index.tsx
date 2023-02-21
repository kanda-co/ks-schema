import React, { type FunctionComponent } from "react";
import RichTextInputUncontrolled from "~/field/components/RichTextInput/RichTextInputControlled/RichTextInputUncontrolled";

export interface MarkdownDisplayProps {
  children: string;
}

const MarkdownDisplay: FunctionComponent<MarkdownDisplayProps> = function ({
  children,
}) {
  return <RichTextInputUncontrolled readOnly initialValue={children} />;
};

export default MarkdownDisplay;
