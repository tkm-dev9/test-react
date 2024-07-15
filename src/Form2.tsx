import { SubmitHandler, useForm } from "react-hook-form"

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

type IFormInput = {
  firstName: string;
  gender: GenderEnum;
}

export default function Form2() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">male</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  )

}