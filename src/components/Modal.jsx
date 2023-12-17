import { Button } from "./Button/Button";

function Modal({ data, handleDelete, handleOpenModal, setShowModal }) {
  return (
    <div key={data.invoice}>
      <div className="absolute right-[35%] top-[25%] z-20 flex flex-col rounded-md bg-gray-200 p-[6rem]">
        <span
          onClick={() => setShowModal(false)}
          role="button"
          className="absolute right-4 top-0 cursor-pointer text-4xl text-gray-500 hover:text-red-400"
        >
          &times;
        </span>
        <p className="text-lg text-gray-600">
          Are you Sure you want to delete ?
        </p>
        <div className="mt-8 flex items-center justify-between">
          <Button
            type="confirm"
            onClick={() => {
              handleDelete(data.invoice);
              handleOpenModal(false);
            }}
          >
            Yes
          </Button>
          <Button type="delete" onClick={() => setShowModal(false)}>
            No
          </Button>
        </div>
      </div>

      <span
        onClick={() => setShowModal(false)}
        className="overlay absolute inset-0 "
      ></span>
    </div>
  );
}

export default Modal;
