import { Link } from "react-router-dom";

function LinkButton({ type, to, children, onClick }) {
  const base = "rounded-md px-4 py-1 font-semibold text-white ";

  const styles = {
    submit: base + "bg-blue-400 w-full py-2 mt-4",
  };

  return (
    <Link to={to} className={styles[type]} onClick={onClick}>
      {children}
    </Link>
  );
}

export default LinkButton;
