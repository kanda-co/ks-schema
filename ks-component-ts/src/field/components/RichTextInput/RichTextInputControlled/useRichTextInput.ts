import {
  type MutableRefObject,
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  EditorState,
  RichUtils,
  convertToRaw,
  type Editor,
  convertFromRaw,
} from "draft-js";
import { markdownToDraft, draftToMarkdown } from "markdown-draft-js";
import { CLASS_NAMES, DISABLED_COMMANDS } from "./constants";
import useInputBaseClass from "../../Input/useInputBaseClass";
import clsx from "clsx";

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

export default function useRichTextEditor(
  initialValue?: string,
  readOnly = false
): RichTextEditorHook {
  const [focused, setFocused] = useState(false);
  const [initialValueSet, setInitialValueSet] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const editorRef = useRef<Editor>();
  const menuRef = useRef<HTMLDivElement>();

  const inputBaseClass = useInputBaseClass();
  const inputClass = clsx(inputBaseClass, "py-0 rounded-lg");

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

  // useEffect call to set the initial value of the editor
  useEffect(() => {
    if (initialValue && !initialValueSet) {
      const rawData = markdownToDraft(initialValue);
      const contentState = convertFromRaw(rawData);
      setEditorState(EditorState.createWithContent(contentState));
      setInitialValueSet(true);
    }
  }, [initialValue, initialValueSet]);

  // useEffect call to add focus states / input base classes to the
  // input as draft-js does not support the className attribute
  useEffect(() => {
    // Don't apply input classes if readOnly is true
    if (readOnly) return;
    if (editorRef?.current?.editor) {
      const classList = editorRef.current.editor.classList;

      inputClass.split(" ").forEach((className) => {
        classList.add(className);
      });

      const placeholder =
        editorRef.current.editorContainer?.parentElement?.querySelector(
          ".public-DraftEditorPlaceholder-inner"
        );

      const focusClassMethod = focused ? "add" : "remove";

      CLASS_NAMES.focusedInput.split(" ").forEach((className) => {
        classList[focusClassMethod](className);
      });

      if (placeholder) {
        CLASS_NAMES.focusedPlaceHolder.split(" ").forEach((className) => {
          placeholder?.classList[focusClassMethod](className);
        });
      }
    }
  }, [editorRef, editorState, inputClass, focused]);

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
