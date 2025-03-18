import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <p>© 2025 Ceara McKenna - No Rights Reserved - </p>
      <a href="https://github.com/cjm-00/employee-creator" target="_blank">
        {" "}
        GitHub
      </a>
    </div>
  );
}
