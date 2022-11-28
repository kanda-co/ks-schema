import { type FieldArrayWithId } from "react-hook-form";
import { type ArrayProps } from "../types";

export type ArrayWrapperField = {
  id: string,
  state: string;
  index: string;
}

export interface ArrayWrapperChildrenArgs {
  arrayName: string;
  fields: {
    id: string;
    state: string;
    index: number;
  }[];
  arrayProps: ArrayProps;
}
