import "@kanda-libs/ks-component-ts/dist/library.css";
import {
  Field,
  useForm,
  Form,
  type StringIndexedObject,
} from "@kanda-libs/ks-component-ts";
import { Button, CommonWrapper } from "@kanda-libs/ks-design-library";

function App() {
  const form = useForm();

  return (
    <CommonWrapper>
      <div className="App">
        <div className="px-4 py-4">
          <h2 className="block mt-2">Form values</h2>
          <Form
            form={form}
            id="test-form"
            onSubmit={(formValues: StringIndexedObject) =>
              console.log(formValues)
            }
          >
            <Field.NumberInput
              type="price"
              name="price"
              label="Price"
              validation={{
                required: {
                  value: true,
                  message: "error",
                },
              }}
            />
            <Button.Text label="Submit" submit />
          </Form>
        </div>
      </div>
    </CommonWrapper>
  );
}

export default App;
