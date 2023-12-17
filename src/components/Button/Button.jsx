export function Button({ children, type, onClick }) {
  const base = "rounded-md px-4 py-1 font-semibold text-white ";

  const styles = {
    edit: base + "bg-amber-300 ",
    delete: base + "bg-red-400",
    confirm: base + "bg-amber-300",
    submit: base + "bg-blue-400 w-full py-2 mt-4",
  };

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}
