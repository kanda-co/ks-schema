import React, { type FunctionComponent } from "react";
import FieldFormController from "~/field/components/FieldFormController";
import PhoneNumberInputUncontrolled from "../PhoneNumberInputUncontrolled";
import type {
  FieldFormControllerChildrenArgs
} from "~/field/components/FieldFormController/types";
import type { PhoneNumberInputUncontrolledProps } from "../types";
import type {
  FieldFormControllerPropsWithoutChildren
} from "~/field/components/FieldFormController/withFieldFormController";

export type PhoneNumberInputControlledProps
  = FieldFormControllerPropsWithoutChildren<PhoneNumberInputUncontrolledProps & {
  /**
   * Name of the input required for form to work
   */
  name?: string;
  /**
   * Name of the input required for form to work
   */
  countryCodeName?: string;
  /**
   * Field label
   */
  label?: string | JSX.Element;
  /**
   * Field warning message
   */
  warning?: string | JSX.Element;
  /**
   * Other props that are passed to wrapper component
   */
  phoneNumberProps?: any;
  /**
   * Other props that are passed to wrapper component
   */
  countryCodeProps?: any;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
}>

const PhoneNumberInputControlled: FunctionComponent<PhoneNumberInputControlledProps> =
  function ({
    name = "phoneNumber",
    countryCodeName = "countryCode",
    phoneNumberProps = {},
    countryCodeProps = {},
    ...restProps
  }) {
    return (
      <FieldFormController name={name} {...restProps} passRegister>
        {({ register, ...fieldProps }: FieldFormControllerChildrenArgs) => (
          <PhoneNumberInputUncontrolled
            name={name}
            countryCodeName={countryCodeName}
            phoneNumberProps={{
              ...register(name, restProps),
              ...phoneNumberProps
            }}
            {...fieldProps}
          />
        )}
      </FieldFormController>
    );
  };

export default PhoneNumberInputControlled;
