import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import classes from "./EmployeeForm.module.scss";
import { useNavigate, useParams } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createEmployee,
  getEmployeeById,
  updateEmployee,
} from "../../services/employee-services";
import NotificationModal from "../NotificationModal/NotificationModal";
import { useEffect, useState } from "react";

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

interface EmployeeFormProps {
  variant: "create" | "edit";
}

export default function EmployeeForm({ variant }: EmployeeFormProps) {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [notificationMsg, setNotification] = useState("");
  let navigate = useNavigate();

  const { id } = useParams();
  let queryClient = useQueryClient();
  const employeeQueryInfo =
    variant === "edit"
      ? useQuery({
          queryKey: ["employee", id],
          queryFn: () => getEmployeeById(Number(id)),
        })
      : null;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>(
    variant === "edit" && employeeQueryInfo?.data
      ? {
          defaultValues: employeeQueryInfo.data,
        }
      : {}
  );
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (variant === "create") {
      createMutation.mutate(data);
    } else if (variant === "edit") {
      editMutation.mutate(data);
    }
  };

  const genderOptions = ["Female", "Male", "Other", "Na"];

  useEffect(() => {
    if (!notificationMsg) return;
    setIsNotificationModalOpen(true);
    setTimeout(function () {
      setIsNotificationModalOpen(false);
    }, 4000);
  }, [notificationMsg]);

  const createMutation = useMutation({
    mutationFn: (data: IFormInput) => createEmployee(data),
    onError: (error) => {
      setNotification(`${error}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["employees"],
        refetchType: "active",
      });
      navigate(`/employees`);
    },
  });

  const editMutation = useMutation({
    mutationFn: (data: IFormInput) => updateEmployee(Number(id), data),
    onError: (error) => {
      setNotification(`${error}`);
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

  return (
    <>
      <NotificationModal
        setIsModalOpen={setIsNotificationModalOpen}
        isModalOpen={isNotificationModalOpen}
        variant="err"
        message={notificationMsg}
      />

      <form className={classes.EmployeeForm} onSubmit={handleSubmit(onSubmit)}>
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
            <Input
              variant="radio"
              type="radio"
              required
              label="Contract"
              name={"contractType"}
              value="CT"
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
          <Button variant="primary" asLink linkTo="/employees">
            Cancel
          </Button>
          <Button type="submit" variant="secondary">
            Save
          </Button>
        </div>
      </form>
    </>
  );
}
