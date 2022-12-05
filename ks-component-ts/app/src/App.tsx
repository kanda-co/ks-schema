import "@kanda-libs/ks-component-ts/dist/library.css";
import {
  Field,
  useForm,
  FormWrapper,
  type StringIndexedObject,
} from "@kanda-libs/ks-component-ts";
import { Button } from "@kanda-libs/ks-design-library";

function App() {
  const form = useForm();

  return (
    <div className="App">
      <h2 className="block mt-2">Form values</h2>
      <div className="px-4 py-4">
        Hello world
        <FormWrapper
          form={form}
          onSubmit={(formValues: StringIndexedObject) =>
            console.log(formValues)
          }
        >
          <Field.NumberInput type="price" name="price" label="Price " />
          <Button.Text label="Submit" submit />
        </FormWrapper>
      </div>
    </div>
  );
}

export default App;
