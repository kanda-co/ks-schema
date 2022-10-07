import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";
import Controlled from "./QuantityInputControlled";
import withFieldInfo from "../FieldInfo/withFieldInfo";

const WithFieldInfo = withFieldInfo(Controlled);

export { Controlled, WithFieldInfo };

const QuantityInput = withFieldFormController(WithFieldInfo);

export default QuantityInput;
