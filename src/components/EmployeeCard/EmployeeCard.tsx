import classes from "./EmployeeCard.module.scss";
import user from "../../assets/user.svg";
import Button from "../Button/Button";
import { deleteEmployee, EmployeeBp } from "../../services/employee-services";
import { useState } from "react";
import Modal from "../Modal/Modal";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function EmployeeCard({ data }: { data: EmployeeBp }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <DeleteModal
        fn={data.firstname}
        sn={data.surname}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        employeeId={data.id}
      />

      <div className={classes.card}>
        <div className={classes.nameLine}>
          <img src={user} className={classes.user} />
          <h2
            className={classes.name}
          >{`${data.firstname} ${data.surname}`}</h2>
        </div>
        <div className={classes.infoLine}>
          <h3
            className={classes.info}
          >{`${data.contractType} | ${data.jobTitle}`}</h3>
        </div>

        <div className={classes.btnLine}>
          <Button
            variant={"subtle--p"}
            asLink={true}
            linkTo={`/employees/${data.id}`}
          >
            View
          </Button>
          <Button variant={"subtle--s"} onClick={handleDeleteClick}>
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}
