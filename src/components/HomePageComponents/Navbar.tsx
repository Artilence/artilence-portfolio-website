import ArtilenceLogo from "@/assets/icons/Logo";
import { RiCodeBlock } from "react-icons/ri";

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
            <details className="dropdown">
              <summary className="p-0">Services</summary>
              <ul className="menu dropdown-content bg-black rounded-box z-[1] w-[792px] h-[470px] p-[24px] shadow">
                <div className="flex justify-between gap-4">
                  <div className="flex flex-col gap-4">
                    <li className="bg-lightWhite rounded-lg">
                      <div>
                        <div className="bg-grayWhite h-[32px] w-[32px] flex justify-center items-center rounded-lg">
                          <RiCodeBlock size={22} className="text-whiteText" />
                        </div>
                        <h3 className="text-[16px] font-bold text-whiteText">
                          API Integrations
                        </h3>
                      </div>
                      <p className="text-gray">
                        Scalable cloud and secure database solutions for
                        efficient data management.
                      </p>
                    </li>
                    <li className="bg-lightWhite rounded-lg">
                      <div>
                        <div className="bg-grayWhite h-[32px] w-[32px] flex justify-center items-center rounded-lg">
                          <RiCodeBlock size={22} className="text-whiteText" />
                        </div>
                        <h3 className="text-[16px] font-bold text-whiteText">
                          UI / UX
                        </h3>
                      </div>
                      <p className="text-gray">
                        Scalable cloud and secure database solutions for
                        efficient data management.
                      </p>
                    </li>
                    <li className="bg-lightWhite rounded-lg">
                      <div>
                        <div className="bg-grayWhite h-[32px] w-[32px] flex justify-center items-center rounded-lg">
                          <RiCodeBlock size={22} className="text-whiteText" />
                        </div>
                        <h3 className="text-[16px] font-bold text-whiteText">
                          Frontend development
                        </h3>
                      </div>
                      <p className="text-gray">
                        Creating interactive, user-friendly interfaces for
                        seamless web experiences.
                      </p>
                    </li>
                    <li className="bg-lightWhite rounded-lg">
                      <div>
                        <div className="bg-grayWhite h-[32px] w-[32px] flex justify-center items-center rounded-lg">
                          <RiCodeBlock size={22} className="text-whiteText" />
                        </div>
                        <h3 className="text-[16px] font-bold text-whiteText">
                          Cloud / Database
                        </h3>
                      </div>
                      <p className="text-gray">
                        Scalable cloud and secure database solutions for
                        efficient data management.
                      </p>
                    </li>
                  </div>
                  <div className="flex flex-col gap-4">
                    <li className="bg-lightWhite rounded-lg">
                      <div>
                        <div className="bg-grayWhite h-[32px] w-[32px] flex justify-center items-center rounded-lg">
                          <RiCodeBlock size={22} className="text-whiteText" />
                        </div>
                        <h3 className="text-[16px] font-bold text-whiteText">
                          Backend Development
                        </h3>
                      </div>
                      <p className="text-gray">
                        Building the server-side logic and databases that power
                        web applications.
                      </p>
                    </li>
                    <li className="bg-lightWhite rounded-lg">
                      <div>
                        <div className="bg-grayWhite h-[32px] w-[32px] flex justify-center items-center rounded-lg">
                          <RiCodeBlock size={22} className="text-whiteText" />
                        </div>
                        <h3 className="text-[16px] font-bold text-whiteText">
                          Web Development{" "}
                        </h3>
                      </div>
                      <p className="text-gray">
                        Scalable cloud and secure database solutions for
                        efficient data management.
                      </p>
                    </li>
                    <li className="bg-lightWhite rounded-lg">
                      <div>
                        <div className="bg-grayWhite h-[32px] w-[32px] flex justify-center items-center rounded-lg">
                          <RiCodeBlock size={22} className="text-whiteText" />
                        </div>
                        <h3 className="text-[16px] font-bold text-whiteText">
                          AI Development
                        </h3>
                      </div>
                      <p className="text-gray">
                        Scalable cloud and secure database solutions for
                        efficient data management.
                      </p>
                    </li>
                    <li className="bg-lightWhite rounded-lg">
                      <div>
                        <div className="bg-grayWhite h-[32px] w-[32px] flex justify-center items-center rounded-lg">
                          <RiCodeBlock size={22} className="text-whiteText" />
                        </div>
                        <h3 className="text-[16px] font-bold text-whiteText">
                          DevOps
                        </h3>
                      </div>
                      <p className="text-gray">
                        Scalable cloud and secure database solutions for
                        efficient data management.
                      </p>
                    </li>
                  </div>
                </div>
              </ul>
            </details>
          </li>
          <li className="cursor-pointer">Portfolio</li>
          <li className="cursor-pointer menu">
            <details className="dropdown">
              <summary className="p-0">Company</summary>
              <ul className="menu dropdown-content bg-black rounded-box z-[1] w-[408px] h-auto p-[24px] shadow">
                <div>
                  <div className="flex flex-col gap-4">
                    <li className="bg-lightWhite rounded-lg">
                      <div>
                        <div className="bg-grayWhite h-[32px] w-[32px] flex justify-center items-center rounded-lg">
                          <RiCodeBlock size={22} className="text-whiteText" />
                        </div>
                        <h3 className="text-[16px] font-bold text-whiteText">
                          About Us
                        </h3>
                      </div>
                      <p className="text-gray">
                        Scalable cloud and secure database solutions for
                        efficient data management.
                      </p>
                    </li>
                    <li className="bg-lightWhite rounded-lg">
                      <div>
                        <div className="bg-grayWhite h-[32px] w-[32px] flex justify-center items-center rounded-lg">
                          <RiCodeBlock size={22} className="text-whiteText" />
                        </div>
                        <h3 className="text-[16px] font-bold text-whiteText">
                          Blogs
                        </h3>
                      </div>
                      <p className="text-gray">
                        Scalable cloud and secure database solutions for
                        efficient data management.
                      </p>
                    </li>
                    <li className="bg-lightWhite rounded-lg">
                      <div>
                        <div className="bg-grayWhite h-[32px] w-[32px] flex justify-center items-center rounded-lg">
                          <RiCodeBlock size={22} className="text-whiteText" />
                        </div>
                        <h3 className="text-[16px] font-bold text-whiteText">
                          Careers
                        </h3>
                      </div>
                      <p className="text-gray">
                        Scalable cloud and secure database solutions for
                        efficient data management.
                      </p>
                    </li>
                  </div>
                </div>
              </ul>
            </details>
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
