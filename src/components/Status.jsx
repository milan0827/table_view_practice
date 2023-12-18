function Status({ status }) {
  return (
    <span
      className={`
        ${
          status === "Paid"
            ? "text-paid-text-color bg-paid-bg-color p-paid-padding"
            : status === "Unpaid"
              ? "text-unpaid-text-color bg-unpaid-bg-color p-unpaid-padding"
              : "text-pending-text-color bg-pending-bg-color p-pending-padding"
        } inline-block rounded-md  py-[0.1rem] font-semibold
      `}
    >
      {status}
    </span>
  );
}

export default Status;
