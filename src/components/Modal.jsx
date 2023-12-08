import Button from "./Button";

function Modal({ onOpenModal }) {
  return (
    <>
      <div className="absolute right-[35%] top-[25%] z-20 flex flex-col rounded-md bg-gray-200 p-[6rem]">
        <span
          onClick={onOpenModal}
          role="button"
          className="absolute right-4 top-0 cursor-pointer text-4xl text-gray-500 hover:text-red-400"
        >
          &times;
        </span>
        <p className="text-lg text-gray-600">
          Are you Sure you want to delete ?
        </p>
        <div className="mt-8 flex items-center justify-between">
          <Button type="yes">Yes</Button>
          <Button type="no">No</Button>
        </div>
      </div>

      <span onClick={onOpenModal} className="overlay  absolute inset-0 "></span>
    </>
  );
}

export default Modal;
