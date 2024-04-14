import { Controller, useForm } from "react-hook-form";

interface IFormValues {
  firstName: string;
  lastName: string;
}

const Example3 = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        control={control}
        name="firstName"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <input
            type="text"
            placeholder="First Name"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            className={errors.firstName ? "is Invalid" : ""}
          />
        )}
      />
      {errors.firstName && (
        <div className="invalid-feedback">First Name is required</div>
      )}

      <Controller
        control={control}
        name="lastName"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <input
            type="text"
            placeholder="Last name"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />

      <input type="submit" />
    </form>
  );
};

export default Example3;
