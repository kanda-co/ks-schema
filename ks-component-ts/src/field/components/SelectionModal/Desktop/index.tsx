import React, { FunctionComponent } from "react";
import useDesktopProps from "./useDesktopProps";
import SelectionModalButton from "../SelectionModalButton";
import SelectionModalSelect from "../SelectionModalSelect";
import { Popover } from "@kanda-libs/ks-design-library";
import FormTheme from "~/components/FormTheme";
import { SelectionModalProps } from "~/field/components/SelectionModal";

const Desktop: FunctionComponent<SelectionModalProps> = function ({
  name,
  options = [],
  label,
  error,
  isLoading,
  forwardRef,
  children,
}) {
  const { buttonId, buttonText } = useDesktopProps(name, options);

  return (
    <Popover.Standard
      button={
        <SelectionModalButton
          id={buttonId}
          label={label}
          buttonText={children || buttonText}
          error={error}
          isLoading={isLoading}
        />
      }
    >
      {({ handleClose }) => (
        <FormTheme variant="popover-clean">
          <div className="min-w-36 px-2">
            <SelectionModalSelect
              handleClose={handleClose}
              variant="popover-clean"
              name={name}
              options={options}
            />
          </div>
        </FormTheme>
      )}
    </Popover.Standard>
  );
};

export default Desktop;
