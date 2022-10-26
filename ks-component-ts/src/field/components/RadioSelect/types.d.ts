import { SelectOption } from "~/field/components/Select/types";

type RadioSelectVariant =
  | "default"
  | "small"
  | "popover"
  | "popover-clean"
  | "text-only"
  | "narrow"
  | "narrow-lg"
  | "clean";

export interface RadioSelectUncontrolledProps {
  multiple?: boolean;
  inline?: boolean;
  variant?: RadioSelectVariant;
  options?: SelectOption[];
}
