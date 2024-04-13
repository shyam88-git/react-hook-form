import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type Inputs = {
  name: string;
  age: string;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.string().required(),
  })
  .required();

const YupValidation = () => {
  const { register, handleSubmit } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input {...register("name")} />
      <br />
      <br />
      <input {...register("age")} />
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default YupValidation;
