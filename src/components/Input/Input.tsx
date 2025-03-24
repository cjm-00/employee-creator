import classes from "./Input.module.scss";

interface inputProps {
  variant?: "primary" | "radio";
  label?: string;
  name: string;
  register?: any;
  type?: string;
  placeholder?: string;
  pattern?: string;
  required?: boolean;
  min?: number;
  max?: number;
  error?: string;
  value?: string;
}

export default function Input({
  variant = "primary",
  label,
  name,
  register,
  type = "text",
  required,
  pattern,
  min,
  max,
  error,
  value,
}: inputProps) {
  return (
    <>
      <div className={`${classes.inputWrap} ${classes[variant]}`}>
        <label className={classes.label}>{label}</label>
        <input
          {...register(name, {
            required: required ? "Field is required" : false,
            pattern: pattern
              ? {
                  value: new RegExp(pattern),
                  message: `Invalid format for ${name} field`,
                }
              : false,
            minLength: min
              ? {
                  value: min,
                  message: `Min character length for ${name} is ${min}`,
                }
              : false,

            maxLength: max
              ? {
                  value: max,
                  message: `Max character length for ${name} is ${max}`,
                }
              : false,
          })}
          className={classes.input}
          type={type}
          {...(value != undefined ? { value } : {})}
        />

        {error && <p className={classes.error}>{error}</p>}
      </div>
    </>
  );
}
