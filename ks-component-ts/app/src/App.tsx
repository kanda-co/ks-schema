import "@kanda-libs/ks-component-ts/dist/library.css";
import { Form, useForm, Field } from "@kanda-libs/ks-component-ts";
import { useWatch } from "react-hook-form";

function App() {
  const form = useForm();

  const [quantity] = useWatch({
    name: ["quantity"],
    control: form.control,
  });

  return (
    <div className="App">
      <h2 className="block mt-2">Form values</h2>
      <div className="px-4 py-4">Hello world</div>
      <Form form={form} onSubmit={() => {}}>
        <Field.BasicNumberInput
          name="quantity"
          label="Quantity"
          formatForDisplay={(value: number) => value / 100}
          formatForValue={(value: number) => value * 100}
        />
      </Form>
      <div>
        <pre>{JSON.stringify(quantity)}</pre>
      </div>
    </div>
  );
}

export default App;
