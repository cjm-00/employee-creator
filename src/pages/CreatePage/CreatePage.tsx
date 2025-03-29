import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./CreatePage.module.scss";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";

export default function CreatePage() {
  return (
    <>
      <div className={classes.createPage}>
        <div className={classes.headerContainer}>
          <Header yHeading="Create" wHeading="New Employee" />
        </div>

        <EmployeeForm variant="create" />

        <Footer />
      </div>
    </>
  );
}
