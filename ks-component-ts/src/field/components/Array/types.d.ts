import { type UseFieldArrayReturn } from "react-hook-form";

export interface ArrayProps extends Omit<UseFieldArrayReturn, "fields"> {
  showRemove?: boolean;
}
