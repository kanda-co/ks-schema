import Uncontrolled from "./PhoneNumberInputUncontrolled";
import Controlled, {
  PhoneNumberInputControlledProps,
} from "./PhoneNumberInputControlled";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";

export { Uncontrolled, Controlled, type PhoneNumberInputProps };

type PhoneNumberInputProps = PhoneNumberInputControlledProps;

const WithFieldInfo = withFieldInfo(Controlled);

export default WithFieldInfo;
