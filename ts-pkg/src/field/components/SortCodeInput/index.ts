import Controlled from "./SortCodeInputControlled";
import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";

export { Controlled };

const SortCodeInput = withFieldFormController(Controlled);

export default SortCodeInput;
