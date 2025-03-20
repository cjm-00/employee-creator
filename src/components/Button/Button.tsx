import { Link } from "react-router";
import classes from "./Button.module.scss";

interface btnProps {
  children: any;
  variant: "primary" | "secondary" | "subtle--p" | "subtle--s";
  asLink?: boolean;
  linkTo?: string;
}

export default function Button({
  children,
  variant = "primary",
  asLink = false,
  linkTo = "",
}: btnProps) {
  return (
    <>
      {asLink == true ? (
        <Link to={linkTo} className={`${classes.button} ${classes[variant]}`}>
          {children}
        </Link>
      ) : (
        <button className={`${classes.button} ${classes[variant]}`}>
          {children}
        </button>
      )}
    </>
  );
}
