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
import { DISABLED_COMMANDS } from "./constants";

export interface RichTextEditorHook {
  editorState: EditorState;
  setEditorState: (editorState: EditorState) => void;
  handleKeyCommand: (
    command: string,
    editorState: EditorState
  ) => "handled" | "not-handled";
  asMarkdown: string;
  editorRef: MutableRefObject<Editor | undefined>;
  menuRef: MutableRefObject<HTMLDivElement | undefined>;
  handleChange: (
    nextEditorState: EditorState,
    onChange: (...event: any[]) => any
  ) => void;
  onFocus: () => void;
  onBlur: () => void;
  focused: boolean;
}

export default function useRichTextEditor(): RichTextEditorHook {
  const [focused, setFocused] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const editorRef = useRef<Editor>();
  const menuRef = useRef<HTMLDivElement>();

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
      if (DISABLED_COMMANDS.includes(command)) return "not-handled";

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

  const onFocus = useCallback(() => {
    setFocused(true);
  }, [setFocused]);
  const onBlur = useCallback(() => {
    setFocused(false);
  }, [setFocused]);

  return {
    editorState,
    setEditorState,
    handleKeyCommand,
    asMarkdown,
    editorRef,
    menuRef,
    handleChange,
    onFocus,
    onBlur,
    focused,
  };
}
