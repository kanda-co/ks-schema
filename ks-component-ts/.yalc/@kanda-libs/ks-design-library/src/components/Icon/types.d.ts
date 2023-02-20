export interface IconProps {
  /**
   * External HTML className
   */
  className?: string;
  /**
   * Stroke colour
   */
  stroke?: string;
  /**
   * Flag to flip icon
   */
  flip?: boolean;
  /**
   * The icon width
   */
  width?: number;
  /**
   * The icon height
   */
  height?: number;
  /**
   * The icon size (sets width and height together)
   */
  size?: number;
  /**
   * The icon background fill
   */
  fill?: string;
  /**
   * The loading state for the icon
   */
  isLoading?: boolean;
  /**
   * The icon name
   */
  icon?: string;
}
