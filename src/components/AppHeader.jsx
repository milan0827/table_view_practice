function AppHeader({ children, type }) {
  const base =
    "mb-4 text-5xl font-semibold uppercase text-stone-800 text-center mt-4 ";

  const styles = {
    error: base + "text-red-500",
    noError: base + "text-stone-800",
  };

  return <h1 className={styles[type]}>{children}</h1>;
}

export default AppHeader;
