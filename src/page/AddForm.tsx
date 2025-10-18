import AppForm from "@/components/ui/form";
import { addPerson } from "@/store/slices/peopleSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function AddFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function kowuu(data) {
 dispatch(addPerson({ ...data, id: Date.now() }));
 navigate("/home");
  }

  return (
    <AppForm
      formLabel="Форма добавления"
      addButtonText="Добавить"
      cancelButtonText="Отменить"
      onSubmit={kowuu}
    />
  );
}

export default AddFormPage;
