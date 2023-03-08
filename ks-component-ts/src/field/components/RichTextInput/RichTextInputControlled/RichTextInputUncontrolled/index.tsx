import { Editor, type EditorState } from "draft-js";
import React, { type MutableRefObject, type FunctionComponent } from "react";
import type { RichTextInputControlledProps } from "..";
import { CLASS_NAMES } from "../constants";
import RichTextInputContext from "../RichTextInputContext";
import RichTextInputMenu from "../RichTextInputMenu";
import useRichTextInput from "../useRichTextInput";

export interface RichTextInputUncontrolledProps
  extends RichTextInputControlledProps {
  onChange?: (...event: any[]) => void;
}

const RichTextInputUncontrolled: FunctionComponent<RichTextInputUncontrolledProps> =
  function ({
    placeholder,
    forwardRef,
    initialValue,
    readOnly = false,
    inputHasMinHeight = true,
    inputHasFocusedBorder = true,
    onChange = () => {},
  }) {
    const {
      editorState,
      setEditorState,
      handleKeyCommand,
      editorRef,
      handleChange,
      onFocus,
      onBlur,
      focused,
      classNames,
    } = useRichTextInput(initialValue, readOnly, inputHasFocusedBorder);

    return (
      <RichTextInputContext.Provider
        value={{
          editorState,
          setEditorState,
          editorRef,
        }}
      >
        <div className={classNames.wrapper}>
          {focused && !readOnly && <RichTextInputMenu />}
          <div
            className={inputHasMinHeight ? CLASS_NAMES.editorWrapper : ""}
            ref={forwardRef}
          >
            <Editor
              readOnly={readOnly}
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
    );
  };

export default RichTextInputUncontrolled;
