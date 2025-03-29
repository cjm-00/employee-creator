import classes from "./Pagination.module.scss";
import Button from "../Button/Button";

export default function Pagination({
  setPageNumber,
  pageNumber,
  totalPages,
}: {
  setPageNumber: (arg0: number) => void;
  pageNumber: number;
  totalPages: number;
}) {
  const prevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  return (
    <>
      <div className={classes.paginationDiv}>
        {pageNumber > 0 ? (
          <Button variant="subtle--p" onClick={prevPage}>
            Prev
          </Button>
        ) : (
          <div className={classes.emptyDiv} />
        )}

        {[...Array(totalPages)].map((n, index) =>
          index + 1 === pageNumber + 1 ? (
            <p key={index} className={classes.pageNumberY}>
              {index + 1}
            </p>
          ) : (
            <p key={index} className={classes.pageNumberW}>
              {index + 1}
            </p>
          )
        )}

        {pageNumber + 1 < totalPages ? (
          <Button variant="subtle--p" onClick={nextPage}>
            Next
          </Button>
        ) : (
          <div className={classes.emptyDiv} />
        )}
      </div>
    </>
  );
}
