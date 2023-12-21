import Notification from "./components/Notification";
import { useInvoice } from "./contexts/invoiceContext";
import AppRouter from "./routes";

function App() {
  const { isSubmitting, isDelete, isEditMode } = useInvoice();
  return (
    <>
      <AppRouter />
      {isEditMode ? (
        <Notification>Invoice hase been updated</Notification>
      ) : null}
      {isSubmitting ? (
        <Notification>Invoice successfully created</Notification>
      ) : null}
      {isDelete ? (
        <Notification>Invoice Deleted successfully</Notification>
      ) : null}
    </>
  );
}

export default App;
