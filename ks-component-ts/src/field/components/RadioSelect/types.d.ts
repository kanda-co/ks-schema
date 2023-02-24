import { SelectOption } from "~/field/components/Select/types";

type RadioSelectVariant =
  | "default"
  | "small"
  | "popover"
  | "popover-clean"
  | "text-only"
  | "narrow"
  | "narrow-lg"
  | "clean"
  | "streamline"
  | "streamline-radio";

export interface RadioSelectUncontrolledProps {
  multiple?: boolean;
  inline?: boolean;
  wrap?: boolean;
  variant?: RadioSelectVariant;
  options?: SelectOption[];
  onClick?: () => void;
}
