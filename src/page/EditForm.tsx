import { useDispatch, useSelector } from "react-redux";

import { editPerson } from "@/store/slices/peopleSlice";
import AppForm from "@/components/ui/form";
import { useNavigate, useParams } from "react-router";
import type { RootState } from "../store";

function EditFormPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const person = useSelector((state: RootState) =>
    state.people.list.find((p) => p.id === Number(id))
  );

  function handleEdit(data) {
    dispatch(editPerson({ ...data, id: Number(id) }));
    navigate("/home");
  }

  if (!person) return <p>Пользователь не найден</p>;

  return (
    <AppForm
      formLabel="Форма изменения"
      addButtonText="Изменить"
      cancelButtonText="Отменить"
      defaultValue={person}
      onSubmit={handleEdit}
    />
  );
}

export default EditFormPage;
