import Home from "@/page/Home";
import AddFormPage from "@/page/AddForm";
import EditFormPage from "@/page/EditForm";
import { Navigate, Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<AddFormPage />} />
      <Route path="/edit/:id" element={<EditFormPage />} />
    </Routes>
  );
}

export default App;
