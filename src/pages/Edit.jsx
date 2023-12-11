import AppHeader from "../components/AppHeader";
import AddUpdateForm from "../components/Form/AddUpdateForm";

function Edit() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div
        className="flex w-1/2 flex-col items-center justify-center gap-10  
      rounded-md bg-stone-200 p-10 shadow-lg shadow-stone-400"
      >
        <AppHeader type="noError">Edit Data</AppHeader>
        <AddUpdateForm />
      </div>
    </div>
  );
}

export default Edit;
