import { useForm } from "react-hook-form";

interface IFormPops {
  firstName: string;
  lastName: string;
}
const Watch6 = () => {
  const { register, watch } = useForm<IFormPops>({
    defaultValues: {
      firstName: "Shyam",
      lastName: "Kumar",
    },
  });
  const firstName = watch("firstName");
  return (
    <form>
      {firstName === "Shyam" ? "wait" : "Fake name"}
      <br />
      <br />
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

export default Watch6;
