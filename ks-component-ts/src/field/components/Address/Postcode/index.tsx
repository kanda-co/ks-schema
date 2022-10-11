import Uncontrolled from "field/components/Address/Postcode/PostcodeUncontrolled";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";

export { type PostcodeProps } from "~/field/components/Address/types";

export { Uncontrolled };

const Postcode = withFieldInfo(Uncontrolled);

export default Postcode;
