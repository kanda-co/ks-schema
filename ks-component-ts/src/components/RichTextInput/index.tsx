import React, { type FunctionComponent, type MutableRefObject } from "react";
import { Editor } from "draft-js";
import "draft-js/dist/Draft.css";
import useRichTextInput from "./useRichTextInput";
import RichTextInputContext from "./RichTextInputContext";
import RichTextInputStyleButton from "./RichTextInputStyleButton";

const RichTextInput: FunctionComponent = function () {
  const { editorState, setEditorState, handleKeyCommand, editorRef } =
    useRichTextInput();

  return (
    <RichTextInputContext.Provider
      value={{
        editorState,
        setEditorState,
        editorRef,
      }}
    >
      <div className="flex flex-row gap-x-2">
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
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        ref={editorRef as MutableRefObject<Editor>}
      />
    </RichTextInputContext.Provider>
  );
};

export default RichTextInput;
