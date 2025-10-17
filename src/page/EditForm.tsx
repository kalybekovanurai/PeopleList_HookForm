import AppForm from "@/components/ui/form";

const defaultValue = {
  name: "Imabek",
  age: "20",
  gender: "М",
};

function EditFormPage() {
  function ozgortuu(param) {
    console.log(param, "kowwuu");
  }
  return (
    <AppForm
      formLabel="Форма изменения"
      addButtonText="Изменить"
      cancelButtonText="Отменить"
      defaultValue={defaultValue}
      onSubmit={ozgortuu}
    />
  );
}

export default EditFormPage;
