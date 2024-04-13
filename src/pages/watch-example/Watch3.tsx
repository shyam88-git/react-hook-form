import { useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
}
const Watch3 = () => {
  const { register, watch } = useForm<IFormInput>();
  console.log(watch("firstName"));
  return (
    <>
      <form>
        <input {...register("firstName")} />
        <br />
        <br />

        <input {...register("lastName")} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Watch3;
