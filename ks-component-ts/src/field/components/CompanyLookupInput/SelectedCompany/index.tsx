import React, { FunctionComponent } from "react";
import { Button, Card, Icon } from "@kanda-libs/ks-design-library";
import Input from "~/field/components/Input";
import useSelectedCompanyProps from "./useSelectedCompanyProps";
import type { SelectedCompanyInputProps } from "./types";

const SelectedCompanyInput: FunctionComponent<SelectedCompanyInputProps> =
  function ({
    name,
    selectedLabel,
    removeSelected,
    removeSelectedLabel,
    selectedDisplay,
    ...props
  }) {
    const { companyName, companyNumber, address } = useSelectedCompanyProps({
      name,
      ...props,
    });

    return (
      <div className="relative">
        <div className="flex absolute right-0 top-0">
          <Button.InlineLink
            variant="turquoise"
            label={removeSelectedLabel}
            onClick={removeSelected}
          />
        </div>
        {selectedDisplay === "field" ? (
          <Input
            label="Company Name"
            name={name}
            readOnly
            disabled
            defaultValue={companyName}
          />
        ) : (
          <div className="flex">
            <Card
              className="mt-7 mb-6"
              title={
                <div className="flex">
                  <Icon
                    size={20}
                    stroke="neutral-700"
                    icon="office"
                    className="mr-3"
                  />
                  <span className="text-14-22-em text-neutral-900">
                    {companyName}
                  </span>
                </div>
              }
              footer={
                <span className="text-14-22 text-neutral-500">
                  {companyNumber}
                </span>
              }
            >
              <span className="text-14-22 text-neutral-600">{address}</span>
            </Card>
          </div>
        )}
      </div>
    );
  };

export default SelectedCompanyInput;