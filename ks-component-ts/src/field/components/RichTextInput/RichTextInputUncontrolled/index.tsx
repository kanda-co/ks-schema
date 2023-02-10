import React, { type FunctionComponent, type MutableRefObject } from "react";
import "core-js";
import { Editor } from "draft-js";
import "draft-js/dist/Draft.css";
import useRichTextInput from "./useRichTextInput";
import RichTextInputContext from "./RichTextInputContext";
import RichTextInputStyleButton from "./RichTextInputStyleButton";

export interface RichTextInputUncontrolledProps {
  name: string;
  placeholder?: string;
  forwardRef?: MutableRefObject<HTMLDivElement>;
  onChange: (value: string) => void;
}

const RichTextInputUncontrolled: FunctionComponent<RichTextInputUncontrolledProps> =
  function ({ placeholder, forwardRef, onChange }) {
    const {
      editorState,
      setEditorState,
      handleKeyCommand,
      editorRef,
      handleChange,
    } = useRichTextInput(onChange);

    return (
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
              onChange={setEditorState}
              handleKeyCommand={handleKeyCommand}
              placeholder={placeholder}
              ref={editorRef as MutableRefObject<Editor>}
            />
          </div>
        </div>
      </RichTextInputContext.Provider>
    );
  };

export default RichTextInputUncontrolled;
