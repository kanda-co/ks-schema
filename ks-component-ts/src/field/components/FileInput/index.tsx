import Uncontrolled from "./FileInputUncontrolled";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import type { FileInputUncontrolledProps } from "./types";
import type { WrappedWithFieldInfoFormComponentProps } from "~/field/types";

export type FileInputProps =
  WrappedWithFieldInfoFormComponentProps<FileInputUncontrolledProps>;

export { Uncontrolled };

const WithFieldInfo = withFieldInfo(Uncontrolled);

export default WithFieldInfo;
