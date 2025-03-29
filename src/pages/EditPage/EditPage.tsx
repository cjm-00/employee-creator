import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./EditPage.module.scss";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";

export default function EditPage() {
  return (
    <>
      <div className={classes.editPage}>
        <div className={classes.headerContainer}>
          <Header yHeading="Edit" wHeading="Employee" />
        </div>

        <EmployeeForm variant="edit" />

        <Footer />
      </div>
    </>
  );
}
