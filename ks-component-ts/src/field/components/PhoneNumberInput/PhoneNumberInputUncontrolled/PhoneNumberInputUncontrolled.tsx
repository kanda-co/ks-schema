import React, { type FunctionComponent } from "react";
import Skeleton from "react-loading-skeleton";
import usePhoneNumberInputUncontrolled from "~/field/components/PhoneNumberInput/PhoneNumberInputUncontrolled/usePhoneNumberInputUncontrolled";
import { PhoneNumberInputUncontrolledProps } from "../types";
import { BASE_OPTIONS } from "../constants";

const PhoneNumberInputUncontrolled: FunctionComponent<PhoneNumberInputUncontrolledProps> =
  function ({
    name,
    id = "phoneNumber",
    options = BASE_OPTIONS,
    defaultValue = "+44",
    forwardRef,
    placeholder,
    error,
    className,
    isLoading,
    phoneNumberProps,
    countryCodeName,
    ...rest
  }) {
    const { classNames, skeletonClasses, code } =
      usePhoneNumberInputUncontrolled({
        error,
        className,
        isLoading,
        defaultValue,
        name: countryCodeName,
      });

    return (
      <div className={classNames.container}>
        {isLoading ? (
          <div className={skeletonClasses}>
            <Skeleton />
          </div>
        ) : (
          <>
            <div className={classNames.selectWrapper}>
              <span className={classNames.country}>UK</span>
            </div>
            <label htmlFor={id} className={classNames.code}>
              {code}
            </label>
            <input
              type="tel"
              id={id}
              className={classNames.phoneInput}
              name={name}
              placeholder={placeholder as string}
              {...phoneNumberProps}
              {...rest}
            />
          </>
        )}
      </div>
    );
  };

export default PhoneNumberInputUncontrolled;
