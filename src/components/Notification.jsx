import { useEffect } from "react";
import { useInvoice } from "../contexts/invoiceContext";
import { createPortal } from "react-dom";

function Message({ children }) {
  const { getData, setIsDelete } = useInvoice();

  useEffect(
    function () {
      setTimeout(() => {
        setIsDelete(false);
      }, 2000);
    },
    [getData],
  );

  console.log(getData);

  return createPortal(
    <p className="absolute right-[1%] top-[5%] z-[1000] rounded-md bg-green-400/80 px-20 py-4 text-lg text-stone-100 shadow-lg shadow-green-500/60 transition-colors duration-300">
      {children}
    </p>,
    document.getElementById("notification"),
  );
}

export default Message;
