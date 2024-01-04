export function Button({ children, type, onClick, disabled, className }) {
  const base = "rounded-md px-4 py-1 font-semibold text-white ";

  const styles = {
    delete: base + "bg-red-400",
    confirm: base + "bg-amber-300",
    submit: base + "bg-blue-400 w-full py-2 mt-4",
  };

  if (disabled)
    return (
      <button
        className={`${styles[type]} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}
