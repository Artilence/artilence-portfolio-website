import LogoLight from "../shared/icons/LogoLight";
export const navList = [
  {
    id: 1,
    name: "What we do",
  },
  {
    id: 2,
    name: "Our Partners",
  },
  {
    id: 3,
    name: "Client Testimonials",
  },
  {
    id: 4,
    name: "Contact Us",
  },
];
const Navbar = () => {
  return (
    <div className="w-full flex justify-center sticky top-0 bg-primary z-[100]">
      <div className="flex justify-between items-center w-[90%] text-white  p-6">
        <LogoLight />
        <div className="flex gap-4 font-light uppercase text-xl">
          <div className="">What we do</div>
          <div className="">Our Partners</div>
          <div className="">Client Testimonials</div>
          <div className="">Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
