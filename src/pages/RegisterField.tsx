import { SubmitHandler, useForm } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

type FormInputs = {
  name: string;
  gender: GenderEnum;
};

const RegisterField = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
  console.log(watch("name"));
  console.log(watch("gender"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register("name", { required: true })} />
      {errors.name && <span>Name is required</span>}
      <br />
      <br />

      <label>Gender</label>
      <select {...register("gender", { required: true })}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      {errors.gender && <span>Please select one gender</span>}
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default RegisterField;
