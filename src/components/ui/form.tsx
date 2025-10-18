import { useState } from "react";
import AppSelect from "./appSelect";
import { Button } from "./button";
import { Input } from "./input";

const genderOptions = [
  { label: "Мужчина", value: "Мужчина" },
  { label: "Женщина", value: "Женщина" },
];

function AppForm({
  formLabel,
  addButtonText,
  cancelButtonText,
  defaultValue,
  onSubmit,
}: {
  formLabel: string;
  addButtonText: string;
  cancelButtonText: string;
  defaultValue?: { name: string; age: string; gender: string };
  onSubmit: (param:any) => void;
}) {
  const [name, setName] = useState(defaultValue?.name || "");
  const [age, setAge] = useState(defaultValue?.age || "");
  const [gender, setGender] = useState(defaultValue?.gender || "Мужчина");

  function nameValueHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function ageValueHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setAge(e.target.value);
  }

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({
      name,
      age,
      gender,
    });
  }

  function selectGender(value: string) {
    setGender(value);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>{formLabel}</h1>

      <div className="mb-2">
        <Input
          placeholder="Введите имя"
          value={name}
          onChange={nameValueHandler}
        />
      </div>
      <div className="mb-2">
        <Input
          placeholder="Введите возраст"
          type="number"
          value={age}
          onChange={ageValueHandler}
        />
      </div>
      <div>
        <AppSelect
          options={genderOptions}
          label="Выберите пол"
          placeholder="Выберите пол"
          selected={gender}
          onChange={selectGender}
        />
      </div>
      <div>
        <Button variant={"outline"}>{addButtonText}</Button>
        <Button variant={"outline"}>{cancelButtonText}</Button>
      </div>
    </form>
  );
}

export default AppForm;
