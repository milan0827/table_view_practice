export function Button({ children, type, onOpenModal }) {
  const buttonStyles = "rounded-md px-4 py-1 font-semibold text-white ";

  const styles = {
    delete: buttonStyles + "bg-red-400",
    yes: buttonStyles + "bg-amber-300",
    no: buttonStyles + "bg-red-400",
    submit: buttonStyles + "bg-blue-400 w-full py-2 mt-4",
  };

  return (
    <button className={styles[type]} onClick={onOpenModal}>
      {children}
    </button>
  );
}
