import classes from "./EmployeeCard.module.scss";
import user from "../../assets/user.svg";
import Button from "../Button/Button";
import { deleteEmployee, EmployeeBp } from "../../services/employee-services";

export default function EmployeeCard({ data }: { data: EmployeeBp }) {
  const handleDeleteClick = () => {
    deleteEmployee(data.id);
  };

  return (
    <div className={classes.card}>
      <div className={classes.nameLine}>
        <img src={user} className={classes.user} />
        <h2 className={classes.name}>{`${data.firstname} ${data.surname}`}</h2>
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
  );
}
