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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Select from "../../components/Select/Select";

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
  let queryClient = useQueryClient();
  const employeeQueryInfo = useQuery({
    queryKey: ["employee", id],
    queryFn: () => getEmployeeById(Number(id)),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: employeeQueryInfo.data,
  });

  const mutation = useMutation({
    mutationFn: (data: IFormInput) => updateEmployee(Number(id), data),
    onError: (error) => {
      console.log(`error on update:`, error);
    },
    onSuccess: () => {
      console.log("successful update bro");
      queryClient.invalidateQueries({
        queryKey: ["employees", "employee"],
        refetchType: "active",
      });
      navigate(`/employees/${id}`);
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutation.mutate(data);
  };

  const genderOptions = ["Female", "Male", "Other", "Na"];

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
            <Input
              required
              label="First Name"
              name="firstname"
              register={register}
              min={2}
              max={20}
              error={errors.firstname?.message}
            />
            <Input
              required
              label="Last Name"
              register={register}
              name={"surname"}
              min={2}
              max={30}
              error={errors.surname?.message}
            />
            <Input
              required
              label="Date of Birth"
              register={register}
              name={"dob"}
              type="date"
              error={errors.dob?.message}
            />
            <Select
              name={"gender"}
              label="Gender"
              register={register}
              options={genderOptions}
              error={errors.gender?.message}
              required
            />
          </div>

          <div className={classes.formSection}>
            <h2 className={classes.sectionHeading}>Contact Details</h2>
            <Input
              required
              label="Email"
              name={"email"}
              type="email"
              register={register}
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              error={errors.email?.message}
            />
            <Input
              label="Phone Number (0000-000-000)"
              type="tel"
              name={"phone"}
              register={register}
              placeholder="04XX-XXX-XXX"
              pattern="^[0-9]{4}-[0-9]{3}-[0-9]{3}$"
              required
              error={errors.phone?.message}
            />
            <Input
              required
              label="Street Address (123 Test Street)"
              name={"address"}
              register={register}
              pattern="^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$"
              error={errors.address?.message}
            />
          </div>

          <div className={classes.formSection}>
            <h2 className={classes.sectionHeading}>Employment Details</h2>
            <div className={classes.contractTypeDiv}>
              <Input
                variant="radio"
                type="radio"
                required
                label="Full-Time"
                name={"contractType"}
                value="FT"
                register={register}
                error={errors.contractType?.message}
              />
              <Input
                variant="radio"
                type="radio"
                required
                label="Part-Time"
                name={"contractType"}
                value="PT"
                register={register}
                error={errors.contractType?.message}
              />
            </div>

            <Input
              required
              label="Start Date"
              type="date"
              name={"startDate"}
              register={register}
              error={errors.startDate?.message}
            />
            <Input
              label="End Date"
              type="date"
              name={"endDate"}
              register={register}
              error={errors.endDate?.message}
            />
            <Input
              required
              label="Job Title"
              name={"jobTitle"}
              register={register}
              error={errors.jobTitle?.message}
              min={2}
              max={35}
            />
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
