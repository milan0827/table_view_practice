export function Button({ children, type, onOpenModal }) {
  const base = "rounded-md px-4 py-1 font-semibold text-white ";

  const styles = {
    delete: base + "bg-red-400",
    yes: base + "bg-amber-300",
    no: base + "bg-red-400",
    submit: base + "bg-blue-400 w-full py-2 mt-4",
  };

  return (
    <button className={styles[type]} onClick={onOpenModal}>
      {children}
    </button>
  );
}
