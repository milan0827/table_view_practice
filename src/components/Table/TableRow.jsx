import { Button } from "../Button/Button";
import Status from "../Status";
import LinkButton from "../Button/LinkButton";

const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function TableRow({ data, onOpenModal }) {
  const InvoiceStatus = ({ data }) => {
    switch (data.status) {
      case "Paid":
        return <Status type="paid" status={data.status} />;
      case "Pending":
        return <Status type="pending" status={data.status} />;
      case "Unpaid":
        return <Status type="unpaid" status={data.status} />;
    }
  };

  return (
    <tr>
      <td className="text-blue-600">
        <input type="checkbox" id="dataInvoice" />
        <label htmlFor="dataInvoice" className="ml-2">
          {data.invoice}
        </label>
      </td>
      <td>{data.invoiceDate}</td>
      <td>{data.dueDate}</td>
      <td>
        <InvoiceStatus data={data} />
      </td>
      <td>{currencyFormat.format(+data.amount)}</td>
      <td className="flex items-center justify-center gap-4 text-stone-300 ">
        <LinkButton to="edit" type="edit">
          ✏️ Edit
        </LinkButton>
        <Button type="delete" onOpenModal={onOpenModal}>
          🗑️ Delete
        </Button>
      </td>
    </tr>
  );
}

export default TableRow;
