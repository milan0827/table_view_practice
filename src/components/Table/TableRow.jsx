import { Button } from "../Button/Button";
import Status from "../Status";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function TableRow({ data, handleDelete }) {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleOpenModal() {
    setShowModal((open) => !open);
  }

  // handleUpdate(data.invoice);

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

  function handleClicked() {
    setClicked((tick) => !tick);
  }

  const editHandler = (e, data) => {
    e.preventDefault();
    navigate(`form/edit/${data.invoice}`, { state: { data } });
  };

  return (
    <tr className={`${clicked ? "line-through" : ""} text-left`}>
      <td className=" text-blue-600">
        <input type="checkbox" id={data.invoice} onClick={handleClicked} />
        <label htmlFor={data.invoice} className="ml-2">
          {data.invoice}
        </label>
      </td>
      <td>{data.invoiceDate}</td>
      <td>{data.dueDate}</td>
      <td>
        <InvoiceStatus data={data} />
      </td>
      <td>{currencyFormat.format(+data.amount)}</td>
      <td className="justify-left flex items-center gap-4 text-stone-300 ">
        <Button type="edit" onClick={(e) => editHandler(e, data)}>
          Edit
        </Button>
        {showModal && (
          <Modal
            data={data}
            handleOpenModal={handleOpenModal}
            setShowModal={setShowModal}
            handleDelete={handleDelete}
            key={data}
          />
        )}
        <Button
          disabled={clicked}
          onClick={() => setShowModal(true)}
          type="delete"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default TableRow;
