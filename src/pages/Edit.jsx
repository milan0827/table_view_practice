import { Button } from "../components/Button/Button";

function Edit() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div
        className="flex w-1/2 flex-col items-center justify-center gap-10  
      rounded-md bg-stone-200 p-10 shadow-lg shadow-stone-400"
      >
        <h1 className="text-5xl font-semibold uppercase text-stone-800">
          Edit Data
        </h1>
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
      </div>
    </div>
  );
}

export default Edit;
