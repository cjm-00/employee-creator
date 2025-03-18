import { Link } from "react-router";
import classes from "./Logo.module.scss";

export default function Logo() {
  return (
    <Link to={"/"} className={classes.logo}>
      <h1 className={classes.heading}>Employ</h1>
      <h1
        className={classes.heading}
        style={{ color: "#e8b931", fontFamily: "serif" }}
      >
        .
      </h1>
    </Link>
  );
}
