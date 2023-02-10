import {
  type MutableRefObject,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { EditorState, RichUtils, convertToRaw, type Editor } from "draft-js";
// @ts-ignore
import draftToMarkdown from "draftjs-to-markdown";

export interface RichTextEditorHook {
  editorState: EditorState;
  setEditorState: (editorState: EditorState) => void;
  handleKeyCommand: (
    command: string,
    editorState: EditorState
  ) => "handled" | "not-handled";
  asMarkdown: string;
  editorRef: MutableRefObject<Editor | undefined>;
  handleChange: (
    nextEditorState: EditorState,
    onChange: (...event: any[]) => any
  ) => void;
}

export default function useRichTextEditor(): RichTextEditorHook {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const editorRef = useRef<Editor>();

  const rawContentState = useMemo(
    () => convertToRaw(editorState.getCurrentContent()),
    [editorState]
  );

  const asMarkdown = useMemo(
    () => draftToMarkdown(rawContentState) as string,
    [rawContentState]
  );

  const handleKeyCommand = useCallback(
    (command: string, newEditorState: EditorState) => {
      const newState = RichUtils.handleKeyCommand(newEditorState, command);

      if (newState) {
        setEditorState(newState);
        return "handled";
      }

      return "not-handled";
    },
    []
  );

  const handleChange = useCallback(
    (nextEditorState: EditorState, onChange: (...event: any[]) => any) => {
      onChange(asMarkdown);
      setEditorState(nextEditorState);
    },
    [setEditorState, asMarkdown]
  );

  return {
    editorState,
    setEditorState,
    handleKeyCommand,
    asMarkdown,
    editorRef,
    handleChange,
  };
}
