import LogoLight from "../shared/icons/LogoLight";

const Navbar = () => {
  return (
    <div className="w-full max-w-[90%] flex justify-between items-center text-white sticky top-0 p-6 bg-primary z-100">
      <LogoLight />
      <div className="flex gap-4 font-light uppercase text-xl">
        <div className="">What we do</div>
        <div className="">Our Partners</div>
        <div className="">Client Testimonials</div>
        <div className="">Contact Us</div>
      </div>
    </div>
  );
};

export default Navbar;
