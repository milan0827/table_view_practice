import TableRow from "./TableRow";

const tableData = [
  {
    invoice: "#12345",
    invoiceDate: "2021-12-12",
    dueDate: "2021-12-24",
    status: "Unpaid",
    amount: "1234",
  },
  {
    invoice: "#12346",
    invoiceDate: "2022-04-01",
    dueDate: "2022-05-24",
    status: "Paid",
    amount: "345",
  },
  {
    invoice: "#12347",
    invoiceDate: "2023-11-12",
    dueDate: "2023-12-24",
    status: "Pending",
    amount: "785",
  },
  {
    invoice: "#123458",
    invoiceDate: "2023-12-01",
    dueDate: "2023-12-24",
    status: "Unpaid",
    amount: "567",
  },
  {
    invoice: "#123459",
    invoiceDate: "2023-12-01",
    dueDate: "2023-12-24",
    status: "Paid",
    amount: "221",
  },
  {
    invoice: "#123450",
    invoiceDate: "2023-12-01",
    dueDate: "2023-12-24",
    status: "Pending",
    amount: "125",
  },
];

function Table({ onOpenModal }) {
  return (
    <table className="w-full border-separate border-spacing-4 border border-stone-300 text-center">
      <thead>
        <tr className="">
          <th className="">
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
