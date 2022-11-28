import { type FieldArrayWithId } from "react-hook-form";
import { type ArrayProps } from "../types";

export interface ArrayWrapperChildrenArgs {
  arrayName: string;
  fields: FieldArrayWithId[];
  arrayProps: ArrayProps;
}
