import { Link } from "react-router-dom";

function LinkButton({ type, to, children }) {
  const base = "rounded-md px-4 py-1 font-semibold text-white ";
  const styles = { edit: base + "bg-amber-300 " };

  return (
    <Link to={to} className={styles[type]}>
      {children}
    </Link>
  );
}

export default LinkButton;
