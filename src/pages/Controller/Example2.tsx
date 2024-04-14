import { Controller, useForm } from "react-hook-form";

interface IFormValues {
  firstName: string;
  lastName: string;
}

const Example2 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            className={errors.firstName ? "is-invalid" : ""}
          />
        )}
      />
      {errors.firstName && (
        <div className="invalid-feedback">First name is required.</div>
      )}

      <Controller
        control={control}
        name="lastName"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <input
            type="text"
            placeholder="Last Name"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            className={errors.lastName ? "is-invalid" : ""}
          />
        )}
      />
      {errors.lastName && (
        <div className="invalid-feedback">Last name is required.</div>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Example2;
