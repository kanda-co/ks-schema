import Controlled from "./PriceInputControlled";
import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "../FieldInfo/withFieldInfo";

const WithFieldInfo = withFieldInfo(Controlled);

export { Controlled, WithFieldInfo };

const PriceInput = withFieldFormController(WithFieldInfo);

export default PriceInput;
