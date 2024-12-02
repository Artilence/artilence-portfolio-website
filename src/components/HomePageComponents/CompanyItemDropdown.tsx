import { RiCodeBlock } from "react-icons/ri";

const CompanyItemDropdown = () => {
  return (
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
                Scalable cloud and secure database solutions for efficient data
                management.
              </p>
            </li>
            <li className="bg-lightWhite rounded-lg">
              <div>
                <div className="bg-grayWhite h-[32px] w-[32px] flex justify-center items-center rounded-lg">
                  <RiCodeBlock size={22} className="text-whiteText" />
                </div>
                <h3 className="text-[16px] font-bold text-whiteText">Blogs</h3>
              </div>
              <p className="text-gray">
                Scalable cloud and secure database solutions for efficient data
                management.
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
                Scalable cloud and secure database solutions for efficient data
                management.
              </p>
            </li>
          </div>
        </div>
      </ul>
    </details>
  );
};

export default CompanyItemDropdown;
