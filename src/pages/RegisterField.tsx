import { SubmitHandler, useForm } from "react-hook-form";

enum Genderenum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  gender: Genderenum;
}
const RegisterField = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <br />
      <br />

      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>

      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default RegisterField;
