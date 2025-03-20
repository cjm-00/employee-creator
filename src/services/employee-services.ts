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
    throw new Error("Could not retrieve entry from database :(");
  }

  return employeeData;
};
