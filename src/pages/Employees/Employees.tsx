import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./Employees.module.scss";

export default function Employees() {
  return (
    <div className={classes.employeesPage}>
      <Header yHeading={"Current"} wHeading={"Employees"} />

      <div className={classes.cardContainer}>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>

      <Footer />
    </div>
  );
}
