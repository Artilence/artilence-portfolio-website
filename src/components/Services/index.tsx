import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <div>
      <div className="flex flex-col p-9 gap-5  lg:p-52 2xl:gap-56 xl:flex-row  justify-between items-between    text-white bg-shapes-bg bg-right bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between w-full 2xl:flex-1 ">
          <div className="flex flex-col justify-between text-[45px] 2xl:text-[200px] max-w-[50%] font-light">
            <div className="leading-[95%]">what</div>
            <div>we</div>
            <div>do</div>
          </div>
          <div className="h-[5px] bg-yellow lg:h-[35px]"></div>
        </div>
        <div className="text-[17px] font-normal w-full 2xl:text-8xl">
          <p className="leading-normal w-full">
            At Artilence, we specialize in forging strategic technical alliances
            to empower businesses with cutting-edge solutions. Our commitment is
            to drive innovation, foster collaboration, and deliver unparalleled
            value to our clients. Here's a glimpse into what sets us apart:
          </p>
        </div>
      </div>
      <ServiceItem />
    </div>
  );
};

export default Services;
