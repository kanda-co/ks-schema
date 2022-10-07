import Uncontrolled from "./TextAreaInputUncontrolled";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";

const WithFieldInfo = withFieldInfo(Uncontrolled);

export { Uncontrolled, WithFieldInfo };

const TextAreaInput = withFieldFormController(WithFieldInfo);

export default TextAreaInput;
