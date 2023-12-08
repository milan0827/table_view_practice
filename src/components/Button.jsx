export function Button({ children, type, onOpenModal }) {
  const buttonStyles = "rounded-md px-4 py-1 font-semibold text-white ";

  const styles = {
    edit: buttonStyles + "bg-amber-300 ",
    delete: buttonStyles + "bg-red-400",
    yes: buttonStyles + "bg-amber-300",
    no: buttonStyles + "bg-red-400",
  };

  return (
    <button className={styles[type]} onClick={onOpenModal}>
      {children}
    </button>
  );
}
