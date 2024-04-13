import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
}
const Watch5 = () => {
  const { register, watch } = useForm<IFormInputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  useEffect(() => {
    const Subcription = watch((data) => {
      console.log(data);
    });
    return () => {
      Subcription.unsubscribe();
    };
  }, [watch]);
  return (
    <form>
      <input {...register("firstName")} />
      <br />
      <br />

      <input {...register("lastName")} />
      <br />
      <br />

      <input {...register("email")} />
      <br />
      <br />

      <input type="submit" />
    </form>
  );
};

export default Watch5;
