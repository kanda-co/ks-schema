import "@kanda-libs/ks-component-ts/dist/library.css";
import {
  Field,
  useForm,
  Form,
  type StringIndexedObject,
  Widget,
} from "@kanda-libs/ks-component-ts";
import { Button, CommonWrapper } from "@kanda-libs/ks-design-library";
import { AmplitudeProvider } from "@kanda-libs/ks-amplitude-provider";

import DirectorForm from "./DirectorForm";

const BASE_ITEM = {
  title: undefined,
};

function App() {
  const form = useForm();

  return (
    <AmplitudeProvider>
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
              <Field.Validator
                validation={{
                  required: {
                    value: true,
                    message: "Price is required",
                  },
                }}
              >
                <Field.NumberInput type="price" name="price" label="Price" />
              </Field.Validator>
              <DirectorForm />
              <Button.Text id="test-form-button" label="Submit" submit />
            </Form>
          </div>
        </div>
      </CommonWrapper>
    </AmplitudeProvider>
  );
}

export default App;
