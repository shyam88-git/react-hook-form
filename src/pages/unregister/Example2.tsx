import { useEffect } from "react";
import { useForm } from "react-hook-form";

type IFormValues = {
  FirstName: string;
  checkbox: boolean;
};
const Example2 = () => {
  const { register, handleSubmit, unregister, watch } = useForm<IFormValues>({
    defaultValues: {
      FirstName: "",
      checkbox: true,
    },
  });
  const checkbox = watch("checkbox");
  console.log(checkbox);

  useEffect(() => {
    if (!checkbox) {
      unregister("FirstName");
    }
  }, [unregister, checkbox]);
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("checkbox")} type="checkbox" value="A" />
      <br />
      {checkbox && (
        <input {...register("FirstName")} placeholder="First Name" />
      )}
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default Example2;
