import { useState } from "react";
import Table from "../components/Table/Table";
import AppHeader from "../components/AppHeader";
import TableHeader from "../components/TableHeader";

function Home() {
  const [datas, setDatas] = useState(
    JSON.parse(localStorage.getItem("DATA")) || [],
  );

  function handleDelete(id) {
    const updatedData = datas.filter((data) => data.invoice !== id);
    localStorage.setItem("DATA", JSON.stringify(updatedData));
    setDatas(updatedData);
  }

  return (
    <div className="shadow-black-500 relative flex w-full flex-col items-center justify-start bg-gray-100 p-20 ">
      <AppHeader type="noError">Invoice Details</AppHeader>

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
