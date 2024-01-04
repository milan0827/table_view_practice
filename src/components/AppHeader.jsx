function AppHeader({ type, title }) {
  const base =
    "text-5xl font-semibold uppercase text-stone-800 text-center py-10 ";

  const styles = {
    error: base + " text-red-500",
    noError: base + "text-stone-800",
  };

  return <h1 className={styles[type]}>{title}</h1>;
}

export default AppHeader;
