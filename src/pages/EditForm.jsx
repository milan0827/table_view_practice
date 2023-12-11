import AppHeader from "../components/AppHeader";
import AddUpdateForm from "../components/Form/AddUpdateForm";
import FormLayout from "../components/Form/FormLayout";

function EditForm({ title }) {
  return (
    <FormLayout>
      <AppHeader type="noError" title="Edit Data" />
      <AddUpdateForm />
    </FormLayout>
  );
}

export default EditForm;
