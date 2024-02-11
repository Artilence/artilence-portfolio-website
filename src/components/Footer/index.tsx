import { socialIcons } from "../../constants";
import { navList } from "../Navbar";

const Footer = () => {
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
          {socialIcons?.map(({ id, component }) => (
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
          ))}
        </div>
        <div
          className={`flex justify-between  items-end text-white text-[1.302vw] mt-[5.208vw] font-normal 
     3xl:text-[25px] 3xl:mt-[100px]

      `}
        >
          <div className="flex-1 flex flex-col">
            <span>+123455 555</span>
            <span>www.artilence.com</span>
          </div>
          <div
            className={`flex-1 flex justify-end flex-wrap gap-x-2
       md:gap-x-4
       lg:gap-x-6
       2xl:gap-x-[70px] 2xl:flex-[1.2]
        `}
          >
            {navList?.map(({ id, name, href }) => (
              <a
                href={href}
                key={id}
                className="hover:text-yellow cursor-pointer"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
