import classes from "./Input.module.scss";

interface inputProps {
  variant?: "primary" | "secondary";
  label?: string;
}

/// https://react-hook-form.com/get-started

export default function Input({ variant = "primary", label }: inputProps) {
  return (
    <>
      <div className={`${classes.inputWrap} ${classes[variant]}`}>
        <label className={classes.label}>{label}</label>
        <input className={classes.input} />
      </div>
    </>
  );
}
