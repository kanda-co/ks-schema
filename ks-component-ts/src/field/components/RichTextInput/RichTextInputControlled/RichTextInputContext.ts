import { createContext, MutableRefObject } from "react";
import type { EditorState, Editor } from "draft-js";

export interface RichTextInputContextValue {
  editorState?: EditorState;
  setEditorState?: (editorState: EditorState) => void;
  editorRef?: MutableRefObject<Editor | undefined>;
}

const RichTextInputContext = createContext<RichTextInputContextValue>({});

export default RichTextInputContext;
