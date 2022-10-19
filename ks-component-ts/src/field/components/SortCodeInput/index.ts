import Controlled from "./SortCodeInputControlled";
import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";

const WithInfo = withFieldInfo(Controlled);

export { Controlled, WithInfo };

const SortCodeInput = withFieldFormController(WithInfo);

export default SortCodeInput;
