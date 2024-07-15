import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  example: string;
  exampleRequired: string;
}

export default function From() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input defaultValue="test" {...register("example")} />
      </div>
      <div>
        <input {...register("exampleRequired", { required: true })} />
      </div>
      <p>
        {errors.exampleRequired && <span>This field is required.</span>}
      </p>
      <input type="submit" />
    </form>
  )
}