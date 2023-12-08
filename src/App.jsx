import { useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Table from "./components/Table/Table";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onOpenModal() {
    setShowModal((open) => !open);
  }

  return (
    <div className="shadow-black-500 relative flex h-[100vh] w-full flex-col items-center justify-start bg-gray-100 p-20 shadow-2xl">
      <Header />
      <Table onOpenModal={() => setShowModal(true)} />
      {showModal && (
        <>
          <Modal onOpenModal={onOpenModal} />
        </>
      )}
    </div>
  );
}

export default App;
