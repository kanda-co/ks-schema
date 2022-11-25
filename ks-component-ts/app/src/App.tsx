import "@kanda-libs/ks-component-ts/dist/library.css";
import { Field, useForm, FormWrapper } from "@kanda-libs/ks-component-ts";
import { Button } from "@kanda-libs/ks-design-library";
import Address from "./Address";

function App() {
  const form = useForm();

  const onSubmit = () => {
    console.log(form.getValues());
  };

  return (
    <div className="App">
      <h2 className="block mt-2">Form values</h2>
      <div className="px-4 py-4">
        Hello world
        <FormWrapper form={form} onSubmit={onSubmit}>
          <Address />
          <Button.Text label="Submit" submit />
        </FormWrapper>
      </div>
    </div>
  );
}

export default App;
