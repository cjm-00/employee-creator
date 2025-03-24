import { useQuery, useQueryClient } from "@tanstack/react-query";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./Employees.module.scss";
import { EmployeeBp, getEmployees } from "../../services/employee-services";
import { useState } from "react";
import Button from "../../components/Button/Button";

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
      </div>

      <div className={classes.newBtnDiv}>
        <Button variant="secondary" asLink linkTo={`/create`}>
          + Create New
        </Button>
      </div>

      <div className={classes.backBtnDiv}>
        <Button asLink linkTo="/" variant="subtle--large">
          🠈 Back
        </Button>
      </div>
      <Footer />
    </div>
  );
}
