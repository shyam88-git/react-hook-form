import { useForm } from "react-hook-form";
type IFormValues = {
  firstName: string;
  lastName: string;
};
const FormState7 = () => {
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
      isValid,
    },
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  console.log("isvalid", isValid);

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

export default FormState7;
