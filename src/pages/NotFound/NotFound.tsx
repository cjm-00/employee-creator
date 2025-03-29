import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <>
      <div className={classes.notFoundPage}>
        <Header wHeading="" yHeading="" />

        <div className={classes.notFound}>
          <h2 className={classes.yHeading}>404</h2>
          <h3 className={classes.wHeading}>Page Not Found</h3>
        </div>
        <div className={classes.btnContainer}>
          <Button variant="secondary" asLink linkTo={"/"}>
            Return Home
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
}
