import { createPortal } from "react-dom";
import { useInvoice } from "../contexts/invoiceContext";
import { Button } from "./Button/Button";

function Modal({ data, handleDelete, handleOpenModal, setShowModal }) {
  const { isDelete, setIsDelete } = useInvoice();
  console.log(isDelete);
  return createPortal(
    <>
      <div
        key={data.invoice}
        className="fixed right-[37%] top-[12rem] z-20 flex flex-col rounded-md bg-gray-200 "
      >
        <div className="flex flex-col px-4">
          <span
            onClick={() => setShowModal(false)}
            role="button"
            className="cursor-pointer self-end text-4xl text-gray-500 hover:text-red-400"
          >
            &times;
          </span>

          <div className="mt-8 flex flex-col items-center gap-10 px-10 pb-10 pt-5">
            <p className="text-lg text-gray-600">
              Are you Sure you want to delete ?
            </p>

            <div className="flex gap-20">
              <Button
                type="confirm"
                onClick={() => {
                  handleDelete(data.invoice);
                  handleOpenModal(false);
                  setIsDelete(true);
                }}
              >
                Yes
              </Button>
              <Button type="delete" onClick={() => setShowModal(false)}>
                No
              </Button>
            </div>
          </div>
        </div>
      </div>

      <span
        onClick={() => setShowModal(false)}
        className="overlay fixed inset-0 h-screen"
      ></span>
    </>,
    document.getElementById("modal"),
  );
}

export default Modal;
