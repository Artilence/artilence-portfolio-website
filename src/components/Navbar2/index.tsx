import { navList } from "../Navbar";
import LogoLight from "../shared/icons/LogoLight";

const Navbar = () => {
  return (
    <div className="navbar bg-primary  p-6 relative z-[999]">
      <div className="flex justify-between w-full">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="group btn btn-ghost min-h-[54px] h-auto hover:bg-white hover:cursor-pointer hover:rounded-full hover:aspect-square lg:hidden "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:stroke-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  dropdown-content mt-1 z-[1]  p-2 shadow bg-base-100 rounded-box relative   transform-none animate-fade-in min-w-[30vw] flex-row"
          >
            {navList?.map(({ id, name }) => (
              <li key={id}>
                <a className="text-primary">{name}</a>
              </li>
            ))}
          </ul>
        </div>
        <LogoLight />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navList?.map(({ id, name }) => (
            <li key={id}>
              <a className="text-white">{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
