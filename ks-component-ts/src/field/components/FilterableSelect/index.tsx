import Uncontrolled, {
  type FilterableSelectUncontrolledProps,
} from "./FilterableSelectUncontrolled";
import withFieldFormController, {
  type FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import {
  type DefaultFormFieldProps,
  type WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";

const WithFieldInfo = withFieldInfo(Uncontrolled);

export { Uncontrolled, WithFieldInfo };

const FilterableSelect = withFieldFormController(WithFieldInfo);

export type FilterableSelectBaseProps =
  DefaultFormFieldProps<FilterableSelectUncontrolledProps>;

export type FilterableSelectWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<FilterableSelectBaseProps>;

export type FilterableSelectProps =
  FieldFormControllerPropsWithoutChildren<FilterableSelectWithInfoProps>;

export default FilterableSelect;
