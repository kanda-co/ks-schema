import Uncontrolled from "./PostcodeUncontrolled";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";

export { type PostcodeProps } from "./types";

export { Uncontrolled };

const Postcode = withFieldInfo(Uncontrolled);

export default Postcode;
