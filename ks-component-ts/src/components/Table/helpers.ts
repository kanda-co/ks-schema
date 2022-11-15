/**
 * Creates placeholder data for loading state
 *
 * @param {Object} columns - columns for table
 */
import { TableHeaderColumn } from "./types";

export const generatePlaceholderData = (columns: TableHeaderColumn[]) => {
  // Fetch accessors - lets us know how many columns are needed and keys for
  // the columns
  const accessors = columns.map((column) => column.accessor);
  // Create the placeholder data object
  const placholder = accessors.reduce(
    (data, accessor) => ({ ...data, [accessor]: "placholder" }),
    {}
  );
  // Create an array of length 10 to hold the placholder data and fill each row
  return new Array(10).fill(placholder);
};

/**
 * Re-orders an array by moving the value at startIndex to endIndex
 */
export const reorder = (
  startIndex: number,
  endIndex: number,
  list: number[]
): number[] => {
  // Create new array from list
  const reordered = Array.from(list);
  // Extract the moved value
  const [moved] = reordered.splice(startIndex, 1);
  // Splice moved value back in
  reordered.splice(endIndex, 0, moved);
  // Return reordered array
  return reordered;
};
