import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const Mapper = ({ data }) => {
    return data.map((key) => (
      <span key={key}>
        <GiHamburgerMenu className="text-xl" />
      </span>
    ));
  };

  return (
    <header className="flex w-[100%] items-center justify-between">
      <div className="flex items-center justify-between gap-2">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="">
          Invoices
        </label>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Mapper data={[1, 2, 3]} />
      </div>
    </header>
  );
}

export default Header;
