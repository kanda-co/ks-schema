import Uncontrolled from "./FileInputUncontrolled";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import type { FileInputUncontrolledProps } from "./types";
import type { WrappedWithFieldInfoFormComponentProps } from "~/field/types";
import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";

export type FileInputProps =
  WrappedWithFieldInfoFormComponentProps<FileInputUncontrolledProps>;

export { Uncontrolled };

const WithFieldInfo = withFieldInfo(Uncontrolled);

export default withFieldFormController(WithFieldInfo);
