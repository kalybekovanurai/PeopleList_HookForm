import { Button } from "../components/ui/button";
import type { RootState } from "../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function HomePage() {
  const navigate = useNavigate();
  const people = useSelector((state: RootState) => state.people.list);

  const handleAdd = () => {
    navigate("/add");
  };

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Список людей</h1>
        <Button onClick={handleAdd}>Добавить</Button>
      </div>

      <div className="w-full border border-gray-300">
        <div className="grid grid-cols-4 font-semibold border-b pb-2 bg-blue-600 p-4 text-white">
          <p>Имя</p>
          <p>Возраст</p>
          <p>Пол</p>
          <p>Действие</p>
        </div>

        {people.map((person) => (
          <div
            key={person.id}
            className="grid grid-cols-4 items-center p-4"
          >
            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.gender}</p>
            <Button onClick={() => handleEdit(person.id)}>Изменить</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
