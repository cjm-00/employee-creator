import { useQuery, useQueryClient } from "@tanstack/react-query";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./Employees.module.scss";
import { EmployeeBp, getEmployees } from "../../services/employee-services";

export default function Employees() {
  const employeesQueryInfo = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  return (
    <div className={classes.employeesPage}>
      <Header yHeading={"Current"} wHeading={"Employees"} />

      <div className={classes.cardContainer}>
        {employeesQueryInfo.data?.map((employee: EmployeeBp) => (
          <EmployeeCard data={employee} key={employee.id} />
        ))}
        {/* <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard /> */}
      </div>

      <Footer />
    </div>
  );
}
