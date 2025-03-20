import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import classes from "./CreatePage.module.scss";

export default function CreatePage() {
  return (
    <>
      <div className={classes.createPage}>
        <div className={classes.headerContainer}>
          <Header yHeading="Create" wHeading="New Employee" />
        </div>
        <form className={classes.newEmployeeForm}>
          <div className={classes.formSection}>
            <h2 className={classes.sectionHeading}>Personal Details</h2>
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Email" />
          </div>

          <div className={classes.formSection}>
            <h2 className={classes.sectionHeading}>Contact Details</h2>
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Email" />
          </div>

          <div className={classes.formSection}>
            <h2 className={classes.sectionHeading}>Employment Details</h2>
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Email" />
          </div>

          <div className={classes.btnContainer}>
            <Button variant="primary" asLink linkTo="/">
              Cancel
            </Button>
            <Button variant="secondary">Save</Button>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
}
