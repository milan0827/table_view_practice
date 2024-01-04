import { createPortal } from "react-dom";

function Message({ children }) {
  return createPortal(
    <p className="absolute right-[1%] top-[5%] z-[1000] rounded-md bg-green-400/80 px-20 py-4 text-lg text-stone-100 shadow-lg shadow-green-500/60 transition-colors duration-300">
      {children}
    </p>,
    document.getElementById("notification"),
  );
}

export default Message;
