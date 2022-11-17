import { useForm } from "react-hook-form";
import "../../dist/library.css";
import { FormWrapper } from "../../src";
// import FieldFormTest from "./FieldFormTest";
import DirectorForm from "./DirectorForm";
// import DirectorSalary from "./DirectorForm/DirectorSalary";

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
        <FormWrapper
          form={form}
          onSubmit={() => {
            console.log("Hello world");
          }}
        >
          <DirectorForm />
          {/*<FieldFormTest />*/}
          <button
            onClick={() => {
              form.handleSubmit(
                () => {
                  alert("yo!");
                },
                () => {
                  alert("oh no!");
                }
              );
            }}
          >
            Hello world
          </button>
        </FormWrapper>
      </div>
    </div>
  );
}

export default App;
