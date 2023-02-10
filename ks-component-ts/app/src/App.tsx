import "@kanda-libs/ks-component-ts/dist/library.css";
import { useForm, Field, Form } from "@kanda-libs/ks-component-ts";
import { useWatch } from "react-hook-form";

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
              name="description"
              placeholder="Enter a description"
            />
          </div>
          <pre>{JSON.stringify({ description })}</pre>
        </div>
      </div>
    </Form>
  );
}

export default App;
