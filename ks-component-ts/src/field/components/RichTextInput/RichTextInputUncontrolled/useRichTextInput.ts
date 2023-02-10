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
  handleChange: (editorState: EditorState) => void;
}

export default function useRichTextEditor(
  onChange: (value: string) => void
): RichTextEditorHook {
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
    (nextEditorState: EditorState, ...args) => {
      onChange(asMarkdown);
      console.log(args);
      setEditorState(nextEditorState);
    },
    [onChange, setEditorState, asMarkdown]
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
