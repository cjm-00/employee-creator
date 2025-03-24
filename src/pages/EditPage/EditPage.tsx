import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import classes from "./EditPage.module.scss";
import {
  getEmployeeById,
  updateEmployee,
} from "../../services/employee-services";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

export interface IFormInput {
  firstname: string;
  surname: string;
  dob: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  contractType: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
}
export default function EditPage() {
  const { id } = useParams();
  let navigate = useNavigate();
  const employeeQueryInfo = useQuery({
    queryKey: ["employee", id],
    queryFn: () => getEmployeeById(Number(id)),
  });

  const { handleSubmit, register } = useForm<IFormInput>({
    defaultValues: employeeQueryInfo.data,
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    updateEmployee(Number(id), data);
    redirect();
  };

  const redirect = () => {
    navigate(`/employees/${id}`);
  };

  return (
    <>
      <div className={classes.editPage}>
        <div className={classes.headerContainer}>
          <Header yHeading="Edit" wHeading="Employee" />
        </div>
        <form
          className={classes.updatedEmployeeForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={classes.formSection}>
            <h2 className={classes.sectionHeading}>Personal Details</h2>
            <Input label="First Name" name="firstname" register={register} />
            <Input label="Last Name" register={register} name={"surname"} />
            <Input label="Date of Birth" register={register} name={"dob"} />
            <Input label="Gender" register={register} name={"gender"} />
          </div>

          <div className={classes.formSection}>
            <h2 className={classes.sectionHeading}>Contact Details</h2>
            <Input label="Email" name={"email"} register={register} />
            <Input label="Phone Number" name={"phone"} register={register} />
            <Input label="Address" name={"address"} register={register} />
          </div>

          <div className={classes.formSection}>
            <h2 className={classes.sectionHeading}>Employment Details</h2>
            <Input
              label="Contract Type"
              name={"contractType"}
              register={register}
            />
            <Input label="Start Date" name={"startDate"} register={register} />
            <Input label="End Date" name={"endDate"} register={register} />
            <Input label="Job Title" name={"jobTitle"} register={register} />
          </div>

          <div className={classes.btnContainer}>
            <Button variant="primary" asLink linkTo={`/employees/${id}`}>
              Cancel
            </Button>
            <Button type="submit" variant="secondary">
              Save
            </Button>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
}
