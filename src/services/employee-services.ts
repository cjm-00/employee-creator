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

interface PaginatedEmployees {
  employeesData: EmployeeBp[];
  totalPages: number;
}

export const getEmployees = async (
  page: number
): Promise<PaginatedEmployees> => {
  // throw new Error("Data request denied by API");

  const response = await fetch(
    `http://localhost:8080/employees?page=${page}&size=9`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Data request denied by API");
  }
  const employeesData = data.content;
  const totalPages = data.totalPages;
  return { employeesData, totalPages };
};

export const getEmployeeById = async (id: number) => {
  const response = await fetch(`http://localhost:8080/employees/${id}`);
  const employeeData = await response.json();
  if (!response.ok) {
    throw new Error("Specific-Data request denied by API");
  }

  return employeeData;
};

export const createEmployee = async (data) => {
  // throw new Error("Create request denied by API");

  const response = await fetch("http://localhost:8080/employees", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Create request denied by API");
  }
  return await response.json();
};

export const deleteEmployee = async (id: number) => {
  // throw new Error("Delete request denied by API");

  const response = await fetch(`http://localhost:8080/employees/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Delete request denied by API");
  }
};

export const updateEmployee = async (id: number, data) => {
  // throw new Error("Update request denied by API");

  const response = await fetch(`http://localhost:8080/employees/${id}/edit`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Update request denied by API");
  }
  const text = await response.text();
  return text ? JSON.parse(text) : null;
};
