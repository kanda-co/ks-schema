import { HandleType, HandleProps } from "~/components/Handle/types";

export interface FingerprintBooleanInputProps extends HandleProps {
  name?: string;
  handle: HandleType;
  fieldText?: string;
}
