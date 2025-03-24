import { Link } from "react-router";
import classes from "./Button.module.scss";
import { MouseEventHandler } from "react";

interface btnProps {
  children?: any;
  variant?:
    | "primary"
    | "secondary"
    | "subtle--p"
    | "subtle--s"
    | "small--p"
    | "small--s"
    | "subtle--large";
  asLink?: boolean;
  linkTo?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({
  children,
  variant = "primary",
  asLink = false,
  linkTo = "",
  type = "button",
  onClick,
}: btnProps) {
  return (
    <>
      {asLink == true ? (
        <Link to={linkTo} className={`${classes.button} ${classes[variant]}`}>
          {children}
        </Link>
      ) : (
        <button
          type={type}
          className={`${classes.button} ${classes[variant]}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}
