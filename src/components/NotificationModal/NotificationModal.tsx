import Modal from "../Modal/Modal";
import classes from "./NotificationModal.module.scss";

interface modalProps {
  message: string;
  variant?: "err" | "ok";
  isModalOpen: boolean;
  setIsModalOpen: (arg: boolean) => void;
}

export default function NotificationModal({
  isModalOpen,
  setIsModalOpen,
  message,
  variant,
}: modalProps) {
  return (
    <Modal isModalOpen={isModalOpen} variant={variant}>
      <div className={classes.modal}>
        <h3>{message}</h3>
      </div>
    </Modal>
  );
}
