// import Container from "./Components/Container";
import { useState } from "react";
import Modal from "./Components/Modal";
import Header from "./components/Header";
import Table from "./components/Table";

import Layout from "./components/Layout";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="shadow-black-500 relative flex h-[100vh] w-full flex-col items-center justify-start bg-gray-100 p-20 shadow-2xl">
      <Header />
      <Table onOpenModal={() => setShowModal(true)} />
      {showModal && (
        <>
          <Modal showModal={() => setShowModal(false)} />
          <Layout closedialog={() => setShowModal(false)} />
        </>
      )}
    </div>
  );
}

export default App;
