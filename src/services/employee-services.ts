import { useQuery, useQueryClient } from "@tanstack/react-query";

export interface EmployeeBp {
  id: number;
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

export const getEmployees = async () => {
  const response = await fetch("http://localhost:8080/employees");
  const employeesData = await response.json();
  if (!response.ok) {
    throw new Error("Problem pulling data into app from database :(");
  }

  return employeesData;
};

export const getEmployeeById = async (id: number) => {
  const response = await fetch(`http://localhost:8080/employees/${id}`);
  const employeeData = await response.json();
  if (!response.ok) {
    throw new Error("Problem pulling entry data into app from database :(");
  }

  return employeeData;
};

export const createEmployee = async (data) => {
  const response = await fetch("http://localhost:8080/employees", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(
      "Problem with creation :( request not accepted by database"
    );
  }
  return await response.json();
};

export const deleteEmployee = async (id: number) => {
  const response = await fetch(`http://localhost:8080/employees/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Delete request denied by databse :(");
  }
};

export const updateEmployee = async (id: number, data) => {
  const response = await fetch(`http://localhost:8080/employees/${id}/edit`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(
      "Problem with updating entry :( request denied by database"
    );
  }
  return await response.json();
};
