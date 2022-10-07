import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";
import Controlled from "./FingerprintBooleanInputControlled";
import { getStructureName } from "~/field/components/FingerprintBooleanInput/helpers";

export { Controlled };

const FingerprintBooleanInput = withFieldFormController(
  Controlled,
  getStructureName
);

export default FingerprintBooleanInput;
