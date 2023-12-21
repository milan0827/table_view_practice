import TableRow from "./TableRow";

function Table({ datas, handleDelete }) {
  return (
    <table className="w-full border-separate border-spacing-4 border border-stone-300 text-left ">
      <thead className="text-left">
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
        {datas.map((data) => (
          <TableRow
            data={data}
            key={data.invoice}
            handleDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
