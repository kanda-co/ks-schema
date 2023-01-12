import AutoSizeInputUncontrolled from "~/field/components/AutoSizeInput/AutoSizeInputUncontrolled";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import withFieldFormController from "../FieldFormController/withFieldFormController";

const WithFieldInfo = withFieldInfo(AutoSizeInputUncontrolled);

export { WithFieldInfo };

const AutoSizeNumberInput = withFieldFormController(
  WithFieldInfo,
  null,
  false,
  false,
  true
);

export default AutoSizeNumberInput;
