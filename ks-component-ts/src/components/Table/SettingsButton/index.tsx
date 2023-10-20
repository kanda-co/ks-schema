import React, { type FunctionComponent } from "react";
import type { SettingsButtonProps } from "./types";
import { CLASS_NAMES, BUTTON_PROPS } from "./constants";
import { Button, Popover } from "@kanda-libs/ks-design-library";
import SettingsPopover from "~/components/Table/SettingsButton/SettingsPopover";

const SettingsButton: FunctionComponent<SettingsButtonProps> = function ({
  columns,
  setColumnOrder,
}) {
  return (
    <div className={CLASS_NAMES.container}>
      <div className={CLASS_NAMES.fadeLeft} />
      <div className={CLASS_NAMES.button}>
        <div className={CLASS_NAMES.wrapper}>
          <Popover.Standard
            id="table-settings"
            button={<Button.Icon id="table-settings" {...BUTTON_PROPS} />}
            right
          >
            {() => (
              <SettingsPopover
                columns={columns}
                setColumnOrder={setColumnOrder}
              />
            )}
          </Popover.Standard>
        </div>
      </div>
      <div className={CLASS_NAMES.fadeRight} />
    </div>
  );
};

export default SettingsButton;
