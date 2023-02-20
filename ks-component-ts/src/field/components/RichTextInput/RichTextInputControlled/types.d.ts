export type RichTextSupportedStyle =
  | "bold"
  | "italic"
  | "underline"
  | "blockquote"
  | "ordered-list-item"
  | "unordered-list-item";

export interface SelectionPosition {
  x: number;
  y: number;
}
