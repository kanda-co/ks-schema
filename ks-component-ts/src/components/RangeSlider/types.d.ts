export interface RangeSliderProps {
  /**
   * Initial value, it can be array of values or a number
   */
  defaultValue?: number | number[];
  /**
   * Current value, it can be array of values or a number
   */
  value?: number | number[];
  /**
   * The minimal distance between two values. Can be decimal. Default is 1.
   */
  step?: number;
  /**
   * The range end. Can be decimal or negative. Default is 100.
   */
  max?: number;
  /**
   * The range start. Can be decimal or negative. Default is 0.
   */
  min?: number;
  colors?: string[];
  /**
   * Event to handle change
   */
  onChange?: (value?: number | number[]) => void;
}
