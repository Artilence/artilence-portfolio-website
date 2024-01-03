import { ImageObject } from "../../constants";

import Image from "../shared/Image";
const ServiceItem = ({ title, imageInfo }: IServiceItemProps) => {
  return (
    <div
      className={` max-h-[503px] sm:max-h-[501px] md:max-h-[386px] lg:max-h-[551px] xl:max-h-[706px] flex flex-col xl:flex-row 2xl:min-h-screen`}
    >
      <div
        className={`bg-primary  p-6 xl:flex-1 xl:p-32 xl:flex xl:flex-col xl:justify-center`}
      >
        <h4 className={`text-4xl text-white xl:text-8xl`}>{title}</h4>
        <div className={`h-[8px] w-full bg-yellow xl:h-[16px]`}></div>
      </div>
      <div
        className={`h-[620px] bg-yellow p-6 flex justify-center items-center
        md:p-12
          xl:flex-1 xl:h-auto

          `}
      >
        <div
          className={`grid grid-cols-3 gap-x-[72px] gap-y-6
       md:gap-x-32  md:gap-y-28
        `}
        >
          {imageInfo.map(({ src, alt, id }) => (
            <div
              key={id}
              className={`animate-bounce original-box-shadow h-[54px] w-[54px] bg-white rounded-full p-2 flex justify-center items-center
             sm:h-[100px] sm:w-[100px]
              2xl:h-[180px] 2xl:w-[180px] `}
            >
              <Image src={src} alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface IServiceItemProps {
  title: string;
  imageInfo: ImageObject[];
}

export default ServiceItem;
