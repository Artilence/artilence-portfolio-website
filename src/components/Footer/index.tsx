import { socialIcons } from "../../constants";
import { navList } from "../Navbar";
import { useState } from "react";

const Footer = () => {
  const [state, setState] = useState(false);

  const navigation = navList?.map(({ name, href }) => ({
    title: name,
    path: href,
    isDrapdown: false,
  }));

  const handleLinkClick = () => {
    setState(false); // Close the mobile menu after clicking a link
  };
  return (
    <div className="bg-primary">
      <div
        className={`
    flex flex-col pt-[7.813vw] pb-[2.448vw]
w-[85.78%] max-w-[1676px] mx-auto
3xl:pt-[150px] 3xl:pb-[47px]
     `}
      >
        <div
          className={`
relative  flex flex-wrap justify-between gap-6 z-0
2xl:gap-[120px]
      `}
        >
          {socialIcons?.map(({ id, component, link }) => (
            <a href={link} target="_blank" rel="noopener noreferrer">
            <div
              key={id}
              className={`relative group w-[19.167vw] h-[19.167vw]  flex justify-center items-center  border border-white hover:border-primary rounded-full
                border-[0.26vw]
                3xl:w-[368px] 3xl:h-[368px] 3xl:border-[5px]
              `}
            >
              
                <div className="group-hover:text-primary z-10">
                  {component({
                    className: `h-[7.604vw] w-[7.604vw] fill-white group-hover:fill-primary
                      3xl:h-[146px] 3xl:w-[146px]
                    `,
                  })}
                </div>
                <div
                  className={`scale-0 absolute w-[23.438vw] h-[23.438vw] rounded-full bg-yellow aspect-square group-hover:animate-grow-circle -z-10
                    3xl:w-[450px] 3xl:h-[450px]
                  `}
                ></div>
              
            </div>
            </a>
          ))}
        </div>
        <div
          className={`flex justify-between  items-end text-white  text-[2.302vw] mt-[5.208vw] font-normal 
     3xl:text-[25px] 3xl:mt-[100px]

      `}
        >
          <div className="flex-1 flex flex-col md:text-base text-4xl lg:text-[16px]">
            <span>+92 3366200544</span>
            <span>www.artilence.com</span>
          </div>
          <div
            className={`nav-menu pb-3 mt-20 md:flex md:justify-end md:pb-0 md:mt-0 md:flex-1 ${
              state ? "block min-h-[80vh]" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex  md:gap-[35px] md:space-y-0">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    className="block text-white text-right text-4xl uppercase font-normal hover:text-yellow md:text-base lg:text-[16px]"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
