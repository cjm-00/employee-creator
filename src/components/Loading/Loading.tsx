import classes from "./Loading.module.scss";

export default function Loading() {
  return (
    <>
      <div className={classes.loadingDiv}>
        <h1 className={`${classes.dots} ${classes.one}`}>.</h1>
        <h1 className={`${classes.dots} ${classes.two}`}>.</h1>
        <h1 className={`${classes.dots} ${classes.three}`}>.</h1>
      </div>
    </>
  );
}
