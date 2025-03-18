import classes from "./EmployeeCard.module.scss";
import user from "../../assets/user.svg";
import Button from "../Button/Button";

export default function EmployeeCard() {
  return (
    <div className={classes.card}>
      <div className={classes.nameLine}>
        <img src={user} className={classes.user} />
        <h2 className={classes.name}>Jennifer Doe</h2>
      </div>
      <div className={classes.infoLine}>
        <h3 className={classes.info}>PT | System Tester</h3>
      </div>

      <div className={classes.btnLine}>
        <Button variant={"subtle--p"} asLink={true} linkTo={"/Employee"}>
          View
        </Button>
        <Button variant={"subtle--s"}>Delete</Button>
      </div>
    </div>
  );
}
