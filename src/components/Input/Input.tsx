import { SubmitHandler, useForm } from "react-hook-form";
import classes from "./Input.module.scss";
import { IFormInput } from "../../pages/CreatePage/CreatePage";

interface inputProps {
  variant?: "primary" | "secondary";
  label?: string;
  name:
    | "firstname"
    | "surname"
    | "dob"
    | "gender"
    | "email"
    | "phone"
    | "address"
    | "contractType"
    | "startDate"
    | "endDate"
    | "jobTitle";
  register?;
}

/// https://react-hook-form.com/get-started

export default function Input({
  variant = "primary",
  label,
  name,
  register,
}: inputProps) {
  return (
    <>
      <div className={`${classes.inputWrap} ${classes[variant]}`}>
        <label className={classes.label}>{label}</label>
        <input {...register(name)} className={classes.input} />
      </div>
    </>
  );
}
