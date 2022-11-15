import type { HTMLAttributes } from "react";

export interface DropZoneCardProps {
  /**
   * Fetches the props for the input html tag
   */
  getInputProps: () => HTMLAttributes<HTMLInputElement>;
  /**
   * Fetches the props for the root div html tag
   */
  getRootProps: () => HTMLAttributes<HTMLDivElement>;
  /**
   * Field has a label
   */
  hasLabel?: boolean;
  placeholder?: string | React.ReactElement;
  isDragActive?: boolean;
  /**
   * Name of input
   */
  name?: string;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Whether to display the small variant or not
   */
  small?: boolean;
  /**
   * Whether to center the placeholder text or not
   */
  centerPlaceholder?: boolean;
  /**
   * Error with uploaded file
   */
  fileError?: string;
  /**
   * Style as job PDF input
   */
  jobPdfInput?: boolean;
  /**
   * Show spinner for file compression
   */
  compressing?: boolean;
}
