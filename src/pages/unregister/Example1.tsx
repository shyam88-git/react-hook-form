import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface IFormInputs {
  firstName: string;
  lastName: string;
}
const Example1 = () => {
  const { register, unregister, handleSubmit } = useForm<IFormInputs>();
  useEffect(() => {
    register("lastName");
  }, [register]);

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("firstName")} placeholder="first name" />
      <br />
      <br />
      <input {...register("lastName")} placeholder="Lat Name" />
      <br />
      <br />
      <button type="button" onClick={() => unregister("lastName")}>
        Unregister
      </button>
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default Example1;
