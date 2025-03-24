import { useNavigate, useParams } from "react-router";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { getEmployeeById } from "../../services/employee-services";
import classes from "./Employee.module.scss";
import { useQuery } from "@tanstack/react-query";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { useState } from "react";

export default function Employee() {
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleDeleteClick = () => {
    setIsModalOpen(true);
    // navigate(`/employees`);
  };

  return (
    <>
      <DeleteModal
        fn={em.firstname}
        sn={em.surname}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        employeeId={em.id}
      />

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
          <Button variant="subtle--large" asLink linkTo={"/employees"}>
            🠈 Back
          </Button>
          <div className={classes.changeBtnContainer}>
            <Button
              variant="primary"
              asLink
              linkTo={`/employees/${em.id}/edit`}
            >
              Edit
            </Button>
            <Button variant="secondary" onClick={handleDeleteClick}>
              DELETE
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
