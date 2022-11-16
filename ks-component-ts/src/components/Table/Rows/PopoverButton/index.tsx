import React, { type FunctionComponent } from "react";
import type { TableRow } from "~/components/Table/types";
import usePopoverButtonProps from "./usePopoverButtonProps";
import { CLASS_NAMES, BUTTON_PROPS } from "./constants";
import { Button, Popover } from "@kanda-libs/ks-design-library";

export interface PopoverButtonHoverPopoverProps {
  row: TableRow;
  handleClose: () => void;
}

export interface PopoverButtonProps {
  row: TableRow;
  hoverPopover: FunctionComponent<PopoverButtonHoverPopoverProps>;
}

const PopoverButton: FunctionComponent<PopoverButtonProps> = function ({
  row,
  hoverPopover: HoverPopover,
}) {
  const popoverProps = usePopoverButtonProps(row);

  return (
    <div className={CLASS_NAMES.stickyContainer}>
      <div className={CLASS_NAMES.relativeContainer}>
        <div className={CLASS_NAMES.absoluteContainer}>
          <div className={CLASS_NAMES.fadeLeft} />
          <div className={CLASS_NAMES.button}>
            <div className={CLASS_NAMES.wrapper}>
              <Popover.Standard
                button={<Button.Icon {...BUTTON_PROPS} />}
                {...popoverProps}
              >
                {({ handleClose }) => (
                  <HoverPopover row={row} handleClose={handleClose} />
                )}
              </Popover.Standard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopoverButton;
