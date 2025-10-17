import AppForm from "@/components/ui/form";

function AddFormPage() {
  function kowuu(param) {
    console.log(param, "kowwuu");
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
