import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEmployee } from "../../services/employee-services";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import classes from "./DeleteModal.module.scss";
import { useNavigate } from "react-router";

export default function DeleteModal({
  fn,
  sn,
  isModalOpen,
  setIsModalOpen,
  employeeId,
}: {
  fn: string;
  sn: string;
  isModalOpen: boolean;
  setIsModalOpen: (arg: boolean) => void;
  employeeId: number;
}) {
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleDeleteConfirmedClick = () => {
    mutation.mutate(employeeId);
  };

  let queryClient = useQueryClient();
  let navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (employeeId: number) => deleteEmployee(employeeId),
    onError: (error) => {
      console.log(`error on deletion:`, error);
      setIsModalOpen(false);
    },
    onSuccess: () => {
      console.log("successful delete bro");
      queryClient.invalidateQueries({
        queryKey: ["employees"],
        refetchType: "active",
      });
      setIsModalOpen(false);
      navigate(`/employees`);
    },
  });

  return (
    <Modal isModalOpen={isModalOpen}>
      <div className={classes.modal}>
        <h2>
          Confirm Deletion of Employee '{fn} {sn}'?
        </h2>
        <p>
          WARNING: This process is permanent, please be certain you want to
          delete this employee's information.
        </p>

        <div className={classes.btnDiv}>
          <Button variant="small--p" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="small--s" onClick={handleDeleteConfirmedClick}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}
