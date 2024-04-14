import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};
const HandleSubmit1 = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("firstName")} placeholder="First Name" />
        <br />
        <br />

        <input {...register("lastName")} placeholder="Last Name" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default HandleSubmit1;
