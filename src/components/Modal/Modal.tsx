import classes from "./Modal.module.scss";

export default function Modal({
  isModalOpen,
  children,
}: {
  isModalOpen: boolean;
  children: any;
}) {
  if (isModalOpen == false) {
    return null;
  }

  return (
    <div className={classes.backdrop}>
      <section className={classes.modal}>{children}</section>
    </div>
  );
}
