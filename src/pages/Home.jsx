import { useState } from "react";
import Modal from "../components/Modal";
import Header from "../components/TableHeader";
import Table from "../components/Table/Table";
import AppHeader from "../components/AppHeader";

function Home() {
  const [showModal, setShowModal] = useState(false);

  function onOpenModal() {
    setShowModal((open) => !open);
  }

  return (
    <div className="shadow-black-500 relative flex h-screen w-full flex-col items-center justify-start bg-gray-100 p-20 shadow-2xl">
      <AppHeader type="noError">Invoice Details</AppHeader>
      <Header />
      <Table onOpenModal={() => setShowModal(true)} />
      {showModal && <Modal onOpenModal={onOpenModal} />}
    </div>
  );
}

export default Home;
