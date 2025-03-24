import classes from "./Select.module.scss";

interface selectProps {
  variant?: "primary";
  label?: string;
  name: string;
  register?: any;
  options: string[];
  required?: boolean;
  error?: string;
}

export default function Select({
  variant = "primary",
  label,
  name,
  register,
  options,
  error,
}: selectProps) {
  return (
    <>
      <div className={`${classes.selectWrap} ${classes[variant]}`}>
        <label className={classes.label}>{label}</label>
        <select
          {...register(name)}
          className={classes.select}
          defaultValue={"Please Select"}
        >
          <option disabled>Please Select</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>

        {error && <p className={classes.error}>{error}</p>}
      </div>
    </>
  );
}
