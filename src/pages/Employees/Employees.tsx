import { useQuery, useQueryClient } from "@tanstack/react-query";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./Employees.module.scss";
import { EmployeeBp, getEmployees } from "../../services/employee-services";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import NotificationModal from "../../components/NotificationModal/NotificationModal";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";

export default function Employees() {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [notificationMsg, setNotification] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const employeesQueryInfo = useQuery({
    queryKey: ["employees"],
    queryFn: () => getEmployees(pageNumber),
  });

  const employeesData = employeesQueryInfo.data?.employeesData || [];
  const totalPages = employeesQueryInfo.data?.totalPages || 0;

  useEffect(() => {
    if (employeesQueryInfo.isError && employeesQueryInfo.error) {
      setNotification(employeesQueryInfo.error.message);
    }
  }, [employeesQueryInfo.isError, employeesQueryInfo.error]);

  useEffect(() => {
    if (!notificationMsg) return;
    setIsNotificationModalOpen(true);
  }, [notificationMsg]);

  let queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ["employees"],
      refetchType: "active",
    });
  }, [pageNumber]);

  return (
    <div className={classes.employeesPage}>
      <Header yHeading={"Current"} wHeading={"Employees"} />

      <NotificationModal
        setIsModalOpen={setIsNotificationModalOpen}
        isModalOpen={isNotificationModalOpen}
        variant="err"
        message={notificationMsg}
      />

      <div className={classes.cardContainer}>
        {employeesQueryInfo.isLoading ? (
          <Loading />
        ) : (
          <>
            {employeesData.map((employee: EmployeeBp) => (
              <EmployeeCard data={employee} key={employee.id} />
            ))}
          </>
        )}
      </div>
      <div className={classes.newBtnDiv}>
        <Button variant="secondary" asLink linkTo={`/create`}>
          + Create New
        </Button>
      </div>

      <Pagination
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        totalPages={totalPages}
      />

      <div className={classes.backBtnDiv}>
        <Button asLink linkTo="/" variant="subtle--large">
          🠈 Back
        </Button>
      </div>
      <Footer />
    </div>
  );
}
