import "@kanda-libs/ks-component-ts/dist/library.css";
import { Field, useForm, FormWrapper } from "@kanda-libs/ks-component-ts";

function App() {
  const form = useForm({
    defaultValues: {
      select: "three",
      boolean: true,
      customer_details: {
        gender: "Male",
      },
      director: [
        {
          firstName: "Steve",
          lastName: "Jones",
        },
      ],
    },
  });

  return (
    <div className="App">
      <h2 className="block mt-2">Form values</h2>
      <div className="px-4 py-4">
        Hello world
        <FormWrapper
          form={form}
          onSubmit={() => {
            console.log("Hello world");
          }}
        >
          <Field.Input name="testing" />
        </FormWrapper>
      </div>
    </div>
  );
}

export default App;
