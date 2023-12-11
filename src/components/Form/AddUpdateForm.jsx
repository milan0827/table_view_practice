import { Button } from "../Button/Button";

function AddUpdateForm() {
  return (
    <form className="flex w-full flex-col items-start justify-center gap-4 px-8">
      <div className="flex w-full flex-col">
        <label className="text-sm font-semibold uppercase ">Invoice</label>
        <input
          type="text"
          className="w-full rounded-md border-none bg-stone-100 px-4 py-2 outline-none transition-all duration-300 hover:border-none focus:shadow-md focus:shadow-stone-300 active:outline-none"
        />
      </div>
      <div className="flex w-full flex-col">
        <label className="text-sm font-semibold uppercase ">Status</label>
        <select className="w-full rounded-md border-none bg-stone-100 px-4 py-2 outline-none transition-all duration-300 hover:border-none focus:shadow-md focus:shadow-stone-300 active:outline-none">
          <option>Select status</option>
          <option>Paid</option>
          <option>Unpaid</option>
          <option>Pending</option>
        </select>
      </div>
      <div className="flex w-full flex-col">
        <label className="text-sm font-semibold uppercase">Amount</label>
        <input
          type="text"
          className="w-full rounded-md border-none bg-stone-100 px-4 py-2 outline-none transition-all duration-300 hover:border-none focus:shadow-md focus:shadow-stone-300 active:outline-none"
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default AddUpdateForm;
