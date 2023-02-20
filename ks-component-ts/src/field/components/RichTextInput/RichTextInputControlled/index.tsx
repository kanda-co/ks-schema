import React, { type FunctionComponent, type MutableRefObject } from "react";
import { Editor, type EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import useRichTextInput from "./useRichTextInput";
import RichTextInputContext from "./RichTextInputContext";
import { Controller } from "react-hook-form";
import type { FieldFormControllerChildrenArgs } from "../../FieldFormController/types";
import RichTextInputMenu from "./RichTextInputMenu";
import { CLASS_NAMES } from "./constants";

export interface RichTextInputControlledProps {
  name?: string;
  placeholder?: string;
  forwardRef?: MutableRefObject<HTMLDivElement>;
}

const RichTextInputControlled: FunctionComponent<
  FieldFormControllerChildrenArgs<RichTextInputControlledProps>
> = function ({ name = "", placeholder, control, forwardRef }) {
  const {
    editorState,
    setEditorState,
    handleKeyCommand,
    editorRef,
    handleChange,
    onFocus,
    onBlur,
    focused,
  } = useRichTextInput();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <>
          <RichTextInputContext.Provider
            value={{
              editorState,
              setEditorState,
              editorRef,
            }}
          >
            <div className={CLASS_NAMES.wrapper}>
              {focused && <RichTextInputMenu />}
              <div className={CLASS_NAMES.editorWrapper} ref={forwardRef}>
                <Editor
                  editorState={editorState}
                  onChange={(nextEditorState: EditorState) => {
                    handleChange(nextEditorState, onChange);
                  }}
                  handleKeyCommand={handleKeyCommand}
                  placeholder={placeholder}
                  ref={editorRef as MutableRefObject<Editor>}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
            </div>
          </RichTextInputContext.Provider>
        </>
      )}
    />
  );
};

export default RichTextInputControlled;
