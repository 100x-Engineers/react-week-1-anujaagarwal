import Logo from "../assets/100x.svg";

function PageHeader() {
  return (
    <header className=" flex w-90 m-auto  items-center justify-center px-3 py-4">
      <img src={Logo} alt="100x-logo" className="w-9 h-9" />
    </header>
  );
}

export default PageHeader;
