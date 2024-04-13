import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  name: string;
  showAge: boolean;
  age: number;
}

const Watch = () => {
  const { register, handleSubmit, watch } = useForm<IFormInputs>();

  const watchShowAge = watch("showAge", false); //after click only show the conditional field.
  //   const watchShowAge = watch(); //if you pass nothing  as argument , you are watching everything.

  //   const watchFields = watch(["showAge", "age"]); //you can also targe specific field by theri names

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 50 })} />
        <br />
        <br />
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input type="number" {...register("age", { min: 50 })} />
        )}

        <br />
        <br />

        <input type="submit" />
      </form>
    </>
  );
};

export default Watch;
