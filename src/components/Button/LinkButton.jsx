import { Link } from "react-router-dom";

function LinkButton({ type, to }) {
  const buttonStyles = "rounded-md px-4 py-1 font-semibold text-white ";
  const styles = { edit: buttonStyles + "bg-amber-300 " };

  return (
    <Link to={to} className={styles[type]}>
      ✏️ Edit
    </Link>
  );
}

export default LinkButton;
