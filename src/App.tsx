import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/globals.module.scss";
import Landing from "./pages/Landing/Landing";
import Employees from "./pages/Employees/Employees";
import Employee from "./pages/EmployeePage/Employee";
import CreatePage from "./pages/CreatePage/CreatePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Employee/:id" />
          <Route path="/Create" element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
