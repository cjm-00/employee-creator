import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/globals.module.scss";
import Landing from "./pages/Landing/Landing";
import Employees from "./pages/Employees/Employees";
import Employee from "./pages/EmployeePage/Employee";
import CreatePage from "./pages/CreatePage/CreatePage";
import EditPage from "./pages/EditPage/EditPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<Employee />} />
          <Route path="/Create" element={<CreatePage />} />
          <Route path="/employees/:id/edit" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
