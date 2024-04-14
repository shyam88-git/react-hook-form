import { useForm } from "react-hook-form";
type IFormValues = {
  firstName: string;
  lastName: string;
};
const FormState6 = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isDirty,
      isSubmitting,
      touchedFields,
      isSubmitSuccessful,
      submitCount,
    },
  } = useForm<IFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  console.log("submitCount", submitCount);

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

export default FormState6;
