import { useForm } from "react-hook-form";
type IFormValues = {
  firstName: string;
  lastName: string;
};
const FormState3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm<IFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  console.log("touchedFields", touchedFields);

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("firstName")} />
      <br />
      <br />
      <input {...register("lastName")} />
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default FormState3;
