import { useEffect } from "react";
import { useForm } from "react-hook-form";
type IFormValues = {
  firstName: string;
  lastName: string;
};
const FormState9 = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  useEffect(() => {
    console.log("formState", formState.errors);
  }, [formState]);

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

export default FormState9;
