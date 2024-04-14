import { useForm } from "react-hook-form";
type IFormValues = {
  test: string;
};
const FormState1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm<IFormValues>();
  console.log("errors", errors);

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("test")} />
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default FormState1;
