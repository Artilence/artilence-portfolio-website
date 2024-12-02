import ArtilenceLogo from "@/assets/icons/Logo";
import ServicesItemDropdown from "./ServicesItemDropdown";
import CompanyItemDropdown from "./CompanyItemDropdown";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-[20px] bg-lightBlack rounded-full border-lightGrey border-[1px]">
      <div>
        <ArtilenceLogo />
      </div>
      <div className="w-1/3 flex justify-center">
        <ul className="flex justify-evenly w-full items-center">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer menu">
            <ServicesItemDropdown />
          </li>
          <li className="cursor-pointer">Portfolio</li>
          <li className="cursor-pointer menu">
            <CompanyItemDropdown />
          </li>
        </ul>
      </div>
      <div>
        <button className="btn bg-primary text-black rounded-full hover:bg-primary w-[190px]">
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default Navbar;
