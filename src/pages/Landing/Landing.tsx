import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import classes from "./Landing.module.scss";

export default function Landing() {
  return (
    <>
      <div className={classes.landing}>
        <span className={classes.headingContainer}>
          <h1 className={classes.heading}>Employ</h1>
          <h1
            className={classes.heading}
            style={{ color: "#e8b931", fontFamily: "serif" }}
          >
            .
          </h1>
        </span>

        <div className={classes.btnContainer}>
          <Button asLink={true} linkTo={`/Employees`} variant={"primary"}>
            Employee List
          </Button>
          <Button asLink={true} linkTo={`/Create`} variant={"secondary"}>
            + Create New
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}
