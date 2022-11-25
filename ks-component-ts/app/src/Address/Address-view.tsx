import { Field, Widget } from "@kanda-libs/ks-component-ts";
import { Button } from "@kanda-libs/ks-design-library";

import Container from "./Address-container";
import { POSTCODE_NAME } from "./Address-constants";

const ViewComponent = () => (
  <Container>
    {({
      addresses,
      postcodeCallback,
      manual,
      addManualInput,
      showSelect,
      selectProps,
    }) => (
      <div className="flex flex-col">
        <Widget.JobCustomerAddressPostcode
          callback={postcodeCallback}
          placeholder="add a postcode"
          autoComplete="none"
        />
        {showSelect && (
          <>
            <div className="mt-3" />
            <Field.Address.Select
              postcodeName={POSTCODE_NAME}
              data={addresses}
              {...selectProps}
            />
            {!manual && (
              <Button.Link
                className="mt-3 mr-auto"
                variant="light-grey"
                size={14}
                onClick={addManualInput}
              >
                Manually enter address
              </Button.Link>
            )}
            {manual && (
              <>
                <div className="mt-3" />
                <Widget.JobCustomerAddressLine1 placeholder="add address line 1" />
                <div className="mt-3" />
                <Widget.JobCustomerAddressLine2 placeholder="add address line 2" />
                <div className="mt-3" />
                <Widget.JobCustomerAddressCity placeholder="add a city" />
                <div className="mt-3" />
                <Widget.JobCustomerAddressCounty placeholder="add a county" />
                <div className="mt-3" />
                <Widget.JobCustomerAddressCountry placeholder="add a country" />
              </>
            )}
          </>
        )}
      </div>
    )}
  </Container>
);

ViewComponent.displayName = "CreateJob-Desktop-Customer-Field-Address-view";

export default ViewComponent;
