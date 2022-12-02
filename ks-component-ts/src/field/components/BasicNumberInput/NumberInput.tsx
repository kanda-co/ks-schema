import { WithFieldInfo } from "~/field/components/Input";
import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";

const NumberInput = withFieldFormController(
  WithFieldInfo,
  null,
  false,
  false,
  true
);

export default NumberInput;
