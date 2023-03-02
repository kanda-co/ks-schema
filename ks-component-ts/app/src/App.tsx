window.global ||= window;
import "@kanda-libs/ks-component-ts/dist/library.css";
import "@kanda-libs/ks-design-library/dist/library.css";
import {
  useForm,
  Field,
  Form,
  FormTheme,
  OptionalHiddenField,
} from "@kanda-libs/ks-component-ts";
import { useWatch } from "react-hook-form";
import { StringIndexedObject } from "~/types";
import { Icon, Text } from "@kanda-libs/ks-design-library";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFormContext } from "~/index";

if (!(Window.prototype as StringIndexedObject).setImmediate) {
  (Window.prototype as StringIndexedObject).setImmediate = function () {
    return false;
  };
}

export const PRICE_COMPONENT_PROPS = {
  autoWidth: true,
  label: "Price",
  placeholder: "1.00",
  prefix: "",
  wrapperProps: {
    className: "mr-2",
  },
  // append: <Append />,
  // isAllowed: makeIsAllowed(0, 1000000),
  type: "price",
  // validation: PRICE_VALIDATION,
};

export const FIRST_NAME_COMPONENT_PROPS = {
  label: "First Name",
  placeholder: "First name",
};

export const TITLE_COMPONENT_PROPS = {
  label: "Title",
  placeholder: "Select...",
  options: [
    {
      name: "Mr",
      value: "mr",
    },
    {
      name: "Mrs",
      value: "mrs",
    },
  ],
};

const JOB_VALUE = 240000;

const formatToCurrency = (
  value: number,
  currency = "GBP",
  locale = "en-US",
  minorUnit = 2
): string => {
  const majorUnitValue = value / 10 ** minorUnit;
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: minorUnit,
  });
  return formatter.format(majorUnitValue);
};

function PriceEdit() {
  const [edit, setEdit] = useState<boolean>(false);
  const [deposit, pct] = useWatch({ name: ["deposit", "pct"] });
  const { setValue } = useFormContext();

  const depositCalc = (pct * JOB_VALUE) / 100;

  const displayDeposit = formatToCurrency(depositCalc);

  const onClick = useCallback(() => setEdit(true), [setEdit]);
  const onBlur = useCallback(() => {
    setEdit(false), [setEdit];
    const percent = (deposit / JOB_VALUE) * 100;
    setValue("pct", percent);
  }, [deposit, setValue]);

  return (
    <div className="flex flex-row w-full ml-4">
      {edit && (
        <div className="my-auto">
          <FormTheme variant="streamline-inline">
            <Field.NumberInput type="price" onBlur={onBlur} name="deposit" />
          </FormTheme>
        </div>
      )}
      {!edit && (
        <button type="button" onClick={onClick} className="flex flex-row">
          <Text
            text={displayDeposit}
            className="my-auto mr-3 text-16-20-em text-neutral-700"
          />
          <Icon
            icon="edit"
            stroke="neutral-700"
            size={16}
            className="my-auto"
          />
        </button>
      )}
    </div>
  );
}

function App() {
  const form = useForm({
    defaultValues: {
      pct: 10,
      deposit: JOB_VALUE * (10 / 100),
    },
  });

  const { watch, setValue } = form;
  const pct = watch("pct");
  const term = watch("term");
  const options = [
    { name: "1 year", value: 12 },
    { name: "2 years", value: 24, disabled: pct < 10 },
    { name: "5 years", value: 60, disabled: pct > 50 },
    { name: "10 years", value: 120 },
  ];

  const [toggle, setToggle] = useState<boolean>(false);
  const onClick = useCallback(() => setToggle(!toggle), [toggle, setToggle]);

  const limits = {
    lowerLimit: 0,
    upperLimit: 60,
  };

  const warning = useMemo(() => {
    if (pct >= 10 && pct <= 50) return null;
    if (pct < 10) return "Some terms are not available below 10% deposit";
    return "Some terms are not available above 50% deposit";
  }, [pct]);

  useEffect(() => {
    console.log({ pct });
    setValue("deposit", Math.round((pct * JOB_VALUE) / 100));
  }, [pct]);

  return (
    <Form
      id="app"
      form={form}
      onSubmit={() => {
        console.log("test");
      }}
    >
      <div className="App">
        <div className="px-8 py-4">
          <div style={{ maxWidth: "400px" }}>
            <Field.RadioSelect
              name="term"
              label="Term"
              inline
              wrap
              variant="streamline"
              options={[
                { name: "\u00201 year\u0020", value: "12" },
                { name: "2 years", value: "24" },
                { name: "5 years", value: "60" },
                { name: "10 years", value: "120" },
              ]}
            />
          </div>

          <div style={{ maxWidth: "400px" }}>
            <Field.RadioSelect
              name="gender"
              id="gender"
              label="Gender"
              inline
              wrap
              variant="streamline-radio"
              options={[
                { name: "Male", value: "male" },
                { name: "Female", value: "female" },
              ]}
            />
          </div>
          <FormTheme variant="streamline">
            <div style={{ maxWidth: "400px" }}>
              <OptionalHiddenField label="Price">
                <Field.NumberInput
                  name="price"
                  id="price"
                  {...PRICE_COMPONENT_PROPS}
                />
              </OptionalHiddenField>
              <Field.Input
                name="firstName"
                id="firstName"
                {...FIRST_NAME_COMPONENT_PROPS}
              />
              <Field.Select
                name="title"
                id="title"
                {...TITLE_COMPONENT_PROPS}
              />
              <Field.Input name="test" id="test" icon="pound" />
              <Field.DatePickerInput name="date" id="date" />
            </div>
          </FormTheme>
        </div>
      </div>
    </Form>
  );
}

export default App;

// <div style={{ maxWidth: "400px" }}>
// <Field.NumberIncrementInput
//   name="deposit"
//   id="deposit"
//   label="Deposit"
//   minValue={10}
//   maxValue={50}
// />
// </div>
