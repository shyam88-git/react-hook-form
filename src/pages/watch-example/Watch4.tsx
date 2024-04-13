import { useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  Age: number;
}
const Watch4 = () => {
  const { register, watch } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      Age: 0,
    },
  });
  console.log(watch(["firstName", "lastName"]));

  return (
    <>
      <form>
        <input {...register("firstName")} placeholder="First Name" />
        <br />
        <br />
        <input {...register("lastName")} placeholder="Last Name" />
        <br />
        <br />
        <input {...register("Age")} placeholder="Ente Age" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Watch4;
