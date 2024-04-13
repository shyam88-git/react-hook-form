import { useForm } from "react-hook-form";

interface IFormInputs {
  firstName: string;
  lastName: string;
}
const Watch2 = () => {
  const { register, handleSubmit, watch } = useForm<IFormInputs>();

  console.log(watch());

  return (
    <>
      <form>
        <input {...register("firstName", { required: true, maxLength: 6 })} />
        <br />
        <br />
        <input {...register("lastName", { required: true, maxLength: 6 })} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Watch2;
