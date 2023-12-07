function Status({ status, type }) {
  const statusStyle = "inline-block rounded-md  py-[0.1rem] font-semibold ";

  const styles = {
    paid: statusStyle + "text-green-400 bg-green-100 px-8",
    pending: statusStyle + "text-yellow-400 bg-yellow-100 px-[1rem]",
    unpaid: statusStyle + "text-red-400 bg-red-100 px-5",
  };

  return <span className={styles[type]}>{status}</span>;
}

export default Status;
