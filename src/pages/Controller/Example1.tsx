import { Controller, useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
type FormValues = {
  ReactDatePicker: string;
};
const Example1 = () => {
  const { control, handleSubmit } = useForm<FormValues>();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        control={control}
        name="ReactDatePicker"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <ReactDatePicker
            onChange={onChange}
            onBlur={onBlur}
            // selected={value}
          />
        )}
      />
      <br />
      <br />

      <input type="submit" />
    </form>
  );
};

export default Example1;
