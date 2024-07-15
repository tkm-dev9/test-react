import { forwardRef } from "react";
import { Path, SubmitHandler, useForm, UseFormRegister } from "react-hook-form";

type IFormValues = {
  firstName: string;
  age: number;
}
type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
}

const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, {required})} />
  </>
)

const Select = forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

export default function Form4() {
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="firstName" register={register} required />
      <Select label="age" {...register("age")} />
      <input type="submit" />
    </form>
  )
}