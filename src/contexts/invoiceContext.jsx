import { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

export default function InvoiceProvider({ children }) {
  const [getData, setGetData] = useState(
    JSON.parse(localStorage.getItem("DATA")) || [],
  );

  const initialState = {
    invoice: crypto.randomUUID(),
    invoiceDate: "",
    dueDate: "",
    status: "Pending",
    amount: "0",
    date: Date.now(),
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  return (
    <InvoiceContext.Provider
      value={{
        getData,
        setGetData,
        initialState,
        isSubmitting,
        setIsSubmitting,
        isEditMode,
        setIsEditMode,
        isDelete,
        setIsDelete,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

export function useInvoice() {
  const context = useContext(InvoiceContext);
  if (context === "undefined")
    throw new Error("context was used outside the InvoiceProvider");
  return context;
}
