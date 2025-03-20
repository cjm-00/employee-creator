import { useParams } from "react-router";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { EmployeeBp, getEmployeeById } from "../../services/employee-services";
import classes from "./Employee.module.scss";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function Employee() {
  const { id } = useParams();

  const employeeQueryInfo = useQuery({
    queryKey: ["employee", id],
    queryFn: () => getEmployeeById(Number(id)),
  });
  if (employeeQueryInfo.isPending) {
    return <span>Loading...</span>;
  }

  if (employeeQueryInfo.isError) {
    return <span>Error: {employeeQueryInfo.error.message}</span>;
  }

  const em = employeeQueryInfo.data;
  return (
    <>
      <div className={classes.employeePage}>
        <div className={classes.headerContainer}>
          <Header yHeading={"Employee"} wHeading={"Details"} />
        </div>

        <div className={classes.detailsPane}>
          <section className={classes.infoSection}>
            <h2 className={classes.sectionHeading}>Personal Details</h2>
            <div className={classes.info}>
              <p>First Name:</p>
              <p>{em.firstname}</p>
            </div>

            <div className={classes.info}>
              <p>Last Name:</p>
              <p>{em.surname}</p>
            </div>

            <div className={classes.info}>
              <p>DOB:</p>
              <p>{em.dob}</p>
            </div>

            <div className={classes.info}>
              <p>Gender:</p>
              <p>{em.gender}</p>
            </div>
          </section>

          <section className={classes.infoSection}>
            <h2 className={classes.sectionHeading}>Contact Details</h2>
            <div className={classes.info}>
              <p>Phone:</p>
              <p>{em.phone}</p>
            </div>

            <div className={classes.info}>
              <p>Address:</p>
              <p>{em.address}</p>
            </div>

            <div className={classes.info}>
              <p>Email:</p>
              <p>{em.email}</p>
            </div>
          </section>

          <section className={classes.infoSection}>
            <h2 className={classes.sectionHeading}>Employment Details</h2>
            <div className={classes.info}>
              <p>Employment Type:</p>
              <p>{em.contractType}</p>
            </div>

            <div className={classes.info}>
              <p>Start Date:</p>
              <p>{em.startDate}</p>
            </div>

            <div className={classes.info}>
              <p>End Date:</p>
              <p>{em.endDate}</p>
            </div>

            <div className={classes.info}>
              <p>Job Title:</p>
              <p>{em.jobTitle}</p>
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
