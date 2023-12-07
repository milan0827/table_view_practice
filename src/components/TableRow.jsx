import Button from "./Button";
import Status from "./Status";

const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function TableRow({ data, onOpenModal }) {
  return (
    <tr className="">
      <td className="text-blue-600">
        <input type="checkbox" id="dataInvoice" />
        <label htmlFor="dataInvoice" className="ml-2">
          {data.invoice}
        </label>
      </td>
      <td>{data.invoiceDate}</td>
      <td>{data.dueDate}</td>
      <td>
        {data.status === "Paid" ? (
          <Status type="paid" status={data.status} />
        ) : data.status === "Pending" ? (
          <Status type="pending" status={data.status} />
        ) : (
          <Status type="unpaid" status={data.status} />
        )}
      </td>
      <td>{currencyFormat.format(+data.amount)}</td>
      <td className="flex items-center justify-center gap-4 text-stone-300 ">
        <Button type="edit">✏️ Edit</Button>
        <Button type="delete" onOpenModal={onOpenModal}>
          🗑️ Delete
        </Button>
      </td>
    </tr>
  );
}

export default TableRow;
