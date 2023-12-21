import Message from "./components/Message";
import { useInvoice } from "./contexts/invoiceContext";
import AppRouter from "./routes";

function App() {
  const { isSubmitting, isDelete, isEditMode } = useInvoice();
  return (
    <>
      <AppRouter />
      {isEditMode ? <Message>Invoice hase been updated</Message> : null}
      {isSubmitting ? <Message>Invoice successfully created</Message> : null}
      {isDelete ? <Message>Invoice Deleted successfully</Message> : null}
    </>
  );
}

export default App;
