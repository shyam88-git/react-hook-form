import { SubmitHandler, useForm } from "react-hook-form";
import { IFormValues, Input, Select } from "./pages/RegiserForm";

const App = () => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="First Name" register={register} required />
        <br />
        <br />
        <Select label="Age" {...register("Age")} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default App;
