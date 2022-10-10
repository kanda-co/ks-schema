import Uncontrolled from "./PasswordInputUncontrolled";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";

const WithFieldInfo = withFieldInfo(Uncontrolled);

export { Uncontrolled, WithFieldInfo };

const PasswordInput = withFieldFormController(WithFieldInfo);

export default PasswordInput;
