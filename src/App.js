import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/userForm" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
