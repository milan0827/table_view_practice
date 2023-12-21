import { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import AppHeader from "../components/AppHeader";
import TableHeader from "../components/Table/TableHeader";
import { useInvoice } from "../contexts/invoiceContext";

function Home() {
  const [datas, setDatas] = useState(
    JSON.parse(localStorage.getItem("DATA")) || [],
  );
  const {
    setIsSubmitting,
    isSubmitting,
    isEditMode,
    setIsEditMode,
    setIsDelete,
    isDelete,
  } = useInvoice();

  useEffect(() => {
    if (isSubmitting) {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
    if (isEditMode) {
      setTimeout(() => {
        setIsEditMode(false);
      }, 1000);
    }
    if (isDelete) {
      setTimeout(() => {
        setIsDelete(false);
      }, 1000);
    }
  }, [datas]);

  function handleDelete(id) {
    const updatedData = datas.filter((data) => data.invoice !== id);
    localStorage.setItem("DATA", JSON.stringify(updatedData));
    setDatas(updatedData);
  }

  return (
    <div className="shadow-black-500 relative flex w-full flex-col items-center justify-start px-20">
      <AppHeader title="Invoice details" type="noError" />

      <TableHeader />
      {datas.length === 0 ? (
        <p className="text-3xl font-semibold text-red-400">
          No data to view! Please add data
        </p>
      ) : (
        <Table datas={datas} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default Home;
