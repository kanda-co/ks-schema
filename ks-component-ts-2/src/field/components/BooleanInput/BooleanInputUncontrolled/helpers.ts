import {
  type HandleType,
  type HandleComponent,
} from "~/components/Handle/types";
import { TYPES } from "~/components/Handle/constants";
import Handle from "~/components/Handle";

export const getHandle = (type: HandleType | undefined): HandleComponent => {
  switch (type) {
    case TYPES.SWITCH:
      return Handle.Switch;
    case TYPES.CHECKBOX:
      return Handle.Checkbox;
    case TYPES.RADIO:
      return Handle.RadioButton;
    case TYPES.RADIOCHECK:
      return Handle.RadioCheck;
    default:
      return Handle.Switch;
  }
};
