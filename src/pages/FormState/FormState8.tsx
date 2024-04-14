import { useForm } from "react-hook-form";
type IFormValues = {
  firstName: string;
  lastName: string;
};
const FormState8 = () => {
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
      isValidating,
    },
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  console.log("isvalidating", isValidating);

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("firstName")} />
      <br />
      <br />
      <input
        {...register("lastName", {
          validate: async () => {
            return true;
          },
        })}
      />
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default FormState8;
