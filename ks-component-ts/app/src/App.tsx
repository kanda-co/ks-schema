window.global ||= window;
import "@kanda-libs/ks-component-ts/dist/library.css";
import "@kanda-libs/ks-design-library/dist/library.css";
import { useForm, Field, Form } from "@kanda-libs/ks-component-ts";
import { useWatch } from "react-hook-form";
import { StringIndexedObject } from "~/types";

const Append = () => (
  <span className="relative field-focus:hidden field-error:hidden field-loading:hidden">
    <span className="absolute inline-block py-1 mt-px -ml-4 text-style-f">
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

if (!(Window.prototype as StringIndexedObject).setImmediate) {
  (Window.prototype as StringIndexedObject).setImmediate = function () {
    return false;
  };
}

function App() {
  const form = useForm();

  const [description] = useWatch({
    name: ["description"],
    control: form.control,
  });

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
          <h2 className="block mt-2">Rich text editor</h2>

          <div>
            <Field.RichTextInput
              readOnly
              name="description"
              placeholder="Enter a description"
              onChange={() => {}}
              initialValue={`HELLO

EHLLOsd

ELL!!

- asdasdasdasd
- **asdasdasd**
- qweqweqweqwe`}
            />
          </div>
          <pre>{JSON.stringify({ description })}</pre>
        </div>
      </div>
    </Form>
  );
}

export default App;
