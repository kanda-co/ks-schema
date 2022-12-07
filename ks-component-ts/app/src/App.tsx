import "@kanda-libs/ks-component-ts/dist/library.css";
import { Form, useForm, Field } from "@kanda-libs/ks-component-ts";
import { useWatch } from "react-hook-form";

const Append = () => (
  <span className="relative field-focus:hidden field-error:hidden field-loading:hidden">
    <span className="py-1 -ml-4 inline-block text-style-f mt-px absolute">
      x
    </span>
  </span>
);

export const QUANTITY_COMPONENT_PROPS = {
  autoWidth: true,
  label: "Qty",
  placeholder: "1",
  symbol: "",
  fixedDecimalScale: false,
  wrapperProps: {
    className: "mr-7",
  },
  append: <Append />,
  autoSize: true,
  quantity: true,
  type: "price",
};

function App() {
  const form = useForm();

  const [quantity, price] = useWatch({
    name: ["quantity", "price"],
    control: form.control,
  });

  return (
    <div className="App">
      <h2 className="block mt-2">Form values</h2>
      <div className="px-4 py-4">Hello world</div>
      <Form form={form} onSubmit={() => {}}>
        <Field.BasicNumberInput
          name="quantity"
          formatForDisplay={(value: number) => value / 100}
          formatForValue={(value: number) => value * 100}
          {...QUANTITY_COMPONENT_PROPS}
        />
        <Field.NumberInput autoSize type="price" name="price" label="Price 2" />
      </Form>
      <div>
        <pre>{JSON.stringify({ quantity, price })}</pre>
      </div>
    </div>
  );
}

export default App;
