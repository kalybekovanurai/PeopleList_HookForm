import { Routes, Route } from "react-router";
import EditFormPage from "./page/EditForm";
import AddFormPage from "./page/AddForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/edit" element={<EditFormPage />} />
      <Route path="/add" element={<AddFormPage />} />
    </Routes>
  );
}

export default App;
