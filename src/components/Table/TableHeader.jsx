import { GiHamburgerMenu } from "react-icons/gi";
import LinkButton from "../Button/LinkButton";
import { useInvoice } from "../../contexts/invoiceContext";

function TableHeader() {
  const { setIsEditMode } = useInvoice();

  const Mapper = ({ data }) => {
    return data.map((key) => (
      <span key={key}>
        <GiHamburgerMenu className="mt-4 text-xl" />
      </span>
    ));
  };

  return (
    <header className="mb-4 flex w-full items-center justify-between">
      <div className="flex items-center justify-between gap-2">
        <span htmlFor="checkbox" className="text-3xl font-semibold">
          Invoices
        </span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <LinkButton
          type="submit"
          to="form"
          onClick={() => setIsEditMode(false)}
        >
          + Add new
        </LinkButton>
        <Mapper data={[1, 2, 3]} />
      </div>
    </header>
  );
}

export default TableHeader;
