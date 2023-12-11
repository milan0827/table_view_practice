import { useState } from "react";
import Modal from "./Modal";
import Header from "./Header";
import Table from "./Table/Table";

function Container() {
  const [showModal, setShowModal] = useState(false);

  function onOpenModal() {
    setShowModal((open) => !open);
  }

  return (
    <div className="shadow-black-500 relative flex h-screen w-full flex-col items-center justify-start bg-gray-100 p-20 shadow-2xl">
      <Header />
      <Table onOpenModal={() => setShowModal(true)} />
      {showModal && <Modal onOpenModal={onOpenModal} />}
    </div>
  );
}

export default Container;
