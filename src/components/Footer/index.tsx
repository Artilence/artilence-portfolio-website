import { socialIcons } from "../../constants";
import { navList } from "../Navbar";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div
        className={`
    flex flex-col py-[11px]  mx-auto
    px-8
     sm:py-[20px]
    md:py-[32px]
     xl:py-[64px] 
    2xl:max-w-[1676px]
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
              className={`relative group w-[58px] h-[58px] flex justify-center items-center  border border-white hover:border-primary rounded-full
           sm:w-[130px] sm:h-[130px] 
           md:w-[170px] md:h-[170px]  
           lg:w-[220px] lg:h-[220px] lg:border-2
           xl:w-[200px] xl:h-[200px]
           2xl:w-[350px] 2xl:h-[350px] 2xl:border-[5px]

            `}
            >
              <div className="text-[8px] text-white group-hover:text-primary z-10">
                {component({
                  className: `h-[21px] w-[21px] fill-white group-hover:fill-primary
                 sm:h-[60px] sm:w-[60px] 
                 md:h-[70px] md:w-[70px]
                 lg:h-[100px] lg:w-[100px]
                 xl:h-[100px] xl:w-[100px]
                 2xl:h-[156px] 2xl:w-[156px]
                  `,
                })}
              </div>
              <div
                className={`scale-0 absolute w-[70px] h-[70px] rounded-full bg-yellow aspect-square group-hover:animate-grow-circle -z-10
             sm:w-[160px] sm:h-[160px]
             md:w-[200px] md:h-[200px]
             lg:w-[250px] lg:h-[250px]
             xl:w-[250px] xl:h-[250px]

           2xl:w-[450px] 2xl:h-[450px]
              `}
              ></div>
            </div>
          ))}
        </div>
        <div
          className={`flex justify-between  items-end text-white text-[6px] mt-[16px] font-medium tracking-[2.5px]
     sm:text-[12px] 
     md:text-[16px] md:mt-[32px]
     lg:text-[25px] lg:mt-[48px] 
     xl:mt-[64px]
     2xl:mt-[100px]

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
            {navList?.map(({ id, name }) => (
              <div key={id} className="hover:text-yellow cursor-pointer">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
