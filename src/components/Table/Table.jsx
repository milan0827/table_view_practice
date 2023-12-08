import { tableData } from "../../data";
import TableRow from "./TableRow";
// import { tableData } from "../../data";

function Table({ onOpenModal }) {
  return (
    <table className="w-full border-separate border-spacing-4 border border-stone-300 text-center">
      <thead>
        <tr>
          <th>
            <input type="checkbox" id="invoiceTitle" />
            <label htmlFor="invoiceTitle" className="ml-2">
              Invoice
            </label>
          </th>
          <th>Invoice Date</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => (
          <TableRow onOpenModal={onOpenModal} data={data} key={data.invoice} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
