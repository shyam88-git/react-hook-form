import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const RegiserPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <br />
      <br />
      <input
        {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
      />
      {}
      <br />
      <br />
      <input {...register("age", { min: 8, max: 99 })} />
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default RegiserPage;
