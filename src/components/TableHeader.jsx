import { GiHamburgerMenu } from "react-icons/gi";
import LinkButton from "./Button/LinkButton";

function TableHeader() {
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
        <input type="checkbox" id="checkbox" className="h-5 w-5" />
        <label htmlFor="checkbox" className="text-3xl font-semibold">
          Invoices
        </label>
      </div>
      <div className="flex items-center justify-between gap-2">
        <LinkButton type="submit" to="form">
          + Add new
        </LinkButton>
        <Mapper data={[1, 2, 3]} />
      </div>
    </header>
  );
}

export default TableHeader;
