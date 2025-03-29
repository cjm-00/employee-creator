import classes from "./Modal.module.scss";

interface modalProps {
  children?: any;
  variant?: "primary" | "err" | "ok";
  isModalOpen: boolean;
}

export default function Modal({
  isModalOpen,
  children,
  variant = "primary",
}: modalProps) {
  if (isModalOpen == false) {
    return null;
  }

  return (
    <div className={`${classes.backdrop} ${classes[`backdrop--${variant}`]}`}>
      <section className={`${classes.modal} ${classes[`modal--${variant}`]}`}>
        {children}
      </section>
    </div>
  );
}
