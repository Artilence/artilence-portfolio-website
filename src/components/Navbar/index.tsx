import LogoLight from "../shared/icons/LogoLight";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center text-white sticky top-0">
      <LogoLight />
      <div className="flex gap-4 font-light uppercase text-xl">
        <div className="">About us</div>
        <div className="">Clients</div>
        <div className="">Portfolio</div>
        <div className="">Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
