import { useState } from "react";
import { navList } from "../Navbar";
import LogoLight from "../shared/icons/LogoLight";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = navList?.map(({ name }) => ({
    title: name,
    path: "/",
    isDrapdown: false,
  }));

  return (
    <>
      <nav
        className={`fixed z-20 bg-primary w-full md:text-sm md:border-none ${
          state && "min-h-screen"
        }`}
      >
        <div className="flex flex-col  px-4 max-w-[1676px] mx-auto md:flex-row md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <LogoLight />
            </a>
            <div className="md:hidden">
              <button
                className="group hover:bg-white hover:rounded-full hover:aspect-square p-2"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:fill-primary"
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6 group-hover:fill-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu pb-3 mt-20 md:flex md:justify-end md:pb-0 md:mt-0 md:flex-1 ${
              state ? "block min-h-[80vh]" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex  md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {
                      <a
                        href={item.path}
                        className="block text-white text-right text-4xl hover:text-yellow md:text-base"
                      >
                        {item.title}
                      </a>
                    }
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
