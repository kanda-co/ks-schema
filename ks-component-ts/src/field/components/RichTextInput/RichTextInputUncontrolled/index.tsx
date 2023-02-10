import React, { type FunctionComponent, type MutableRefObject } from "react";
import "core-js";
import { Editor, type EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import useRichTextInput from "./useRichTextInput";
import RichTextInputContext from "./RichTextInputContext";
import RichTextInputStyleButton from "./RichTextInputStyleButton";
import { Controller } from "react-hook-form";
import type { FieldFormControllerChildrenArgs } from "../../FieldFormController/types";

export interface RichTextInputUncontrolledProps {
  name: string;
  placeholder?: string;
  forwardRef?: MutableRefObject<HTMLDivElement>;
  onChange: (value: string) => void;
}

const RichTextInputUncontrolled: FunctionComponent<
  FieldFormControllerChildrenArgs<RichTextInputUncontrolledProps>
> = function ({ name, placeholder, control, forwardRef }) {
  const {
    editorState,
    setEditorState,
    handleKeyCommand,
    editorRef,
    handleChange,
  } = useRichTextInput();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <RichTextInputContext.Provider
          value={{
            editorState,
            setEditorState,
            editorRef,
          }}
        >
          <div className="flex flex-col">
            <div className="flex flex-row mb-2 border border-solid gap-x-2 border-neutral-200">
              <RichTextInputStyleButton label="B" editorStyle="bold" />
              <RichTextInputStyleButton label="I" editorStyle="italic" />
              <RichTextInputStyleButton label="U" editorStyle="underline" />
              <RichTextInputStyleButton
                isBlock
                label="UL"
                editorStyle="unordered-list-item"
              />
              <RichTextInputStyleButton
                isBlock
                label="OL"
                editorStyle="ordered-list-item"
              />
            </div>
            <div className="min-h-20" ref={forwardRef}>
              <Editor
                editorState={editorState}
                onChange={(nextEditorState: EditorState) => {
                  handleChange(nextEditorState, onChange);
                }}
                handleKeyCommand={handleKeyCommand}
                placeholder={placeholder}
                ref={editorRef as MutableRefObject<Editor>}
              />
            </div>
          </div>
        </RichTextInputContext.Provider>
      )}
    />
  );
};

export default RichTextInputUncontrolled;
