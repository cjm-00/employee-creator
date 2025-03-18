import Logo from "../Logo/Logo";
import classes from "./Header.module.scss";

export default function Header({
  yHeading,
  wHeading,
}: {
  yHeading: string;
  wHeading: string;
}) {
  return (
    <div className={classes.header}>
      <span className={classes.headingContainer}>
        <h1 className={classes.heading} style={{ color: "#e8b931" }}>
          {yHeading}
        </h1>
        <h1 className={classes.heading}>{wHeading}</h1>
      </span>
      <Logo />
    </div>
  );
}
