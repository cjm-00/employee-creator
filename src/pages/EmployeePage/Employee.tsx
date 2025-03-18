import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./Employee.module.scss";

export default function Employee() {
  return (
    <>
      <Header yHeading={"Employee"} wHeading={"Details"} />
      <div className={classes.employeePage}>
        <div className={classes.detailsPane}>
          <section className={classes.infoSection}>
            <h2 className={classes.sectionHeading}>Personal Details</h2>
            <div className={classes.info}>
              <p>First Name:</p>
              <p>Jennifer</p>
            </div>

            <div className={classes.info}>
              <p>Last Name:</p>
              <p>Doe</p>
            </div>

            <div className={classes.info}>
              <p>DOB:</p>
              <p>12-03-1901</p>
            </div>

            <div className={classes.info}>
              <p>Gender:</p>
              <p>Female</p>
            </div>
          </section>

          <section className={classes.infoSection}>
            <h2 className={classes.sectionHeading}>Contact Details</h2>
            <div className={classes.info}>
              <p>Mobile:</p>
              <p>0400-000-1234</p>
            </div>

            <div className={classes.info}>
              <p>Address:</p>
              <p>123 Example Way, VIC</p>
            </div>

            <div className={classes.info}>
              <p>Email:</p>
              <p>jdoe123@example.com</p>
            </div>

            <div className={classes.info}>
              <p>Emergency Contact:</p>
              <p>John (Brother): 0400-123-0000</p>
            </div>
          </section>

          <section className={classes.infoSection}>
            <h2 className={classes.sectionHeading}>Employment Details</h2>
            <div className={classes.info}>
              <p>Employment Type:</p>
              <p>Part-Time</p>
            </div>

            <div className={classes.info}>
              <p>Start Date:</p>
              <p>22-01-1945</p>
            </div>

            <div className={classes.info}>
              <p>End Date:</p>
              <p>22-01-1995</p>
            </div>

            <div className={classes.info}>
              <p>Job Title:</p>
              <p>Testing Tester</p>
            </div>
          </section>
        </div>

        <div className={classes.btnContainer}>
          <Button variant="primary" asLink linkTo={"/Employees"}>
            🠈 Back
          </Button>
          <div className={classes.changeBtnContainer}>
            <Button variant="primary">Edit</Button>
            <Button variant="secondary">DELETE</Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
