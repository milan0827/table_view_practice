import { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";

function AddNewForm() {
  const initialState = {
    invoice: crypto.randomUUID(),
    invoiceDate: "",
    dueDate: "",
    status: ["Paid", "Unpaid", "Pending"],
    amount: "0",
    date: Date.now(),
  };

  const [formData, setFormData] = useState(initialState);

  const location = useLocation();
  const navigate = useNavigate();
  const editData = location?.state?.data;

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (location?.state?.data) {
      setIsEditMode(true);
      setFormData({
        invoice: editData.invoice,
        invoiceDate: editData.invoiceDate,
        amount: editData.amount,
        status: editData.status,
        dueDate: editData.dueDate,
      });
    }
  }, [location?.state?.data]);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleAddSubmit(e) {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("DATA")) || [];

    const existingIndex = data.findIndex(
      (item) => item.invoice === formData.invoice,
    );

    if (existingIndex !== -1) {
      data[existingIndex] = { ...data[existingIndex], ...formData };
    } else {
      data.push({ ...formData });
    }

    localStorage.setItem("DATA", JSON.stringify(data));
    navigate("/");
  }

  return (
    <>
      <AppHeader title="Add new Invoice" type="noError" />
      <form
        className="flex w-1/2 flex-col items-start justify-center gap-4 rounded-md bg-gray-200 p-10 shadow-lg shadow-stone-400"
        onSubmit={handleAddSubmit}
      >
        <div className="flex w-full flex-col">
          <input
            type="hidden"
            value={formData.invoice}
            name="invoice"
            onChange={(e) => handleChange(e)}
            className="w-full rounded-md border-none bg-stone-100 px-4 py-2 outline-none transition-all duration-300 hover:border-none focus:shadow-md focus:shadow-stone-300 active:outline-none"
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="text-sm font-semibold uppercase ">
            Invoice date
          </label>
          <input
            name="invoiceDate"
            value={formData.invoiceDate}
            onChange={(e) => handleChange(e)}
            type="text"
            className="w-full rounded-md border-none bg-stone-100 px-4 py-2 outline-none transition-all duration-300 hover:border-none focus:shadow-md focus:shadow-stone-300 active:outline-none"
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="text-sm font-semibold uppercase ">
            Invoice due date
          </label>
          <input
            name="dueDate"
            value={formData.dueDate}
            onChange={(e) => handleChange(e)}
            type="text"
            className="w-full rounded-md border-none bg-stone-100 px-4 py-2 outline-none transition-all duration-300 hover:border-none focus:shadow-md focus:shadow-stone-300 active:outline-none"
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="text-sm font-semibold uppercase ">Status</label>
          <select
            name="status"
            onChange={(e) => handleChange(e)}
            className="w-full rounded-md border-none bg-stone-100 px-4 py-2 outline-none transition-all duration-300 hover:border-none focus:shadow-md focus:shadow-stone-300 active:outline-none"
          >
            <option value="Status">Select status</option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="flex w-full flex-col">
          <label className="text-sm font-semibold uppercase">Amount</label>
          <input
            name="amount"
            type="text"
            value={formData.amount}
            onChange={(e) => handleChange(e)}
            className="w-full rounded-md border-none bg-stone-100 px-4 py-2 outline-none transition-all duration-300 hover:border-none focus:shadow-md focus:shadow-stone-300 active:outline-none"
          />
        </div>
        <Button type="submit">{isEditMode ? "Edit" : "Submit"}</Button>
      </form>
    </>
  );
}

export default AddNewForm;
