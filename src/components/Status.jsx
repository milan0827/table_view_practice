function Status({ status }) {
  return (
    <span
      className={`
        ${
          status === "Paid"
            ? "bg-paid-bg-color p-8 text-paid-text-color"
            : status === "Unpaid"
              ? "bg-unpaid-bg-color p-5 text-unpaid-text-color"
              : "bg-pending-bg-color p-4 text-pending-text-color"
        } inline-block rounded-md  py-[0.1rem] font-semibold
      `}
    >
      {status}
    </span>
  );
}

export default Status;
