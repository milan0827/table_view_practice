import AppHeader from "../components/AppHeader";
import AddNewForm from "../components/Form/AddNewForm";
import FormLayout from "../components/Form/FormLayout";

function AddForm() {
  return (
    <FormLayout>
      <AppHeader title="Add new Invoice" type="noError" />
      <AddNewForm />
    </FormLayout>
  );
}

export default AddForm;
