import { SubmitHandler, useForm } from "react-hook-form";

interface IFormProps {
  firstName: string;
  lastName: string;
  category: string;
  checkbox: string[];
  radio: string;
}
const Example = () => {
  const { register, handleSubmit } = useForm<IFormProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      category: "",
      checkbox: [],
      radio: "",
    },
  });

  const onSubmit: SubmitHandler<IFormProps> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: true })}
        placeholder="First Name"
      />
      <br />
      <br />
      <input
        {...register("lastName", { minLength: 2 })}
        placeholder="Last Name"
      />
      <br />
      <br />

      <select {...register("category")}>
        <option value="">Select ....</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
      <br />
      <br />

      <input {...register("checkbox")} type="checkbox" value="A" />
      <input {...register("checkbox")} type="checkbox" value="B" />
      <input {...register("checkbox")} type="checkbox" value="C" />

      <br />
      <br />

      <input {...register("radio")} type="radio" value="A" />
      <input {...register("radio")} type="radio" value="B" />
      <input {...register("radio")} type="radio" value="C" />
      <br />
      <br />

      <input type="submit" />
    </form>
  );
};

export default Example;
