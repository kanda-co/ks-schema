import React, { type FunctionComponent } from "react";
import RichTextInputUncontrolled from "~/field/components/RichTextInput/RichTextInputControlled/RichTextInputUncontrolled";
import FormTheme from "../FormTheme";

export interface MarkdownDisplayProps {
  children: string;
}

const MarkdownDisplay: FunctionComponent<MarkdownDisplayProps> = function ({
  children,
}) {
  return (
    <FormTheme variant="inline">
      <RichTextInputUncontrolled
        readOnly
        inputHasMinHeight={false}
        initialValue={children}
      />
    </FormTheme>
  );
};

export default MarkdownDisplay;
