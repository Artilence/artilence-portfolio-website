import { ImageObject } from "../../constants";
import AnimatedBar from "../shared/AnimatedBar";
import Image from "../shared/Image";
const ServiceItem = ({ title, imageInfo, isInviewport }: IServiceItemProps) => {
  return (
    <div className={``}>
      <div className="max-w-[1676px] mx-auto flex flex-col xl:flex-row 2xl:min-h-screen gap-[305px]">
        <div className={`bg-primary  xl:flex items-center`}>
          <div>
            <h4
              className={`text-white xl:text-[150px] font-light leading-tight`}
            >
              {title}
            </h4>
            <AnimatedBar isInviewport={isInviewport || true} />
          </div>
        </div>
        <div
          className={`flex-1 flex justify-center items-center
          `}
        >
          <div
            className={`flex-1 grid grid-cols-3 gap-x-[50px] gap-y-6
        `}
          >
            {imageInfo.map(({ src, alt, id, span }) =>
              span === 2 ? (
                <>
                  {isInviewport && (
                    <div className="col-span-2 relative" key={id}>
                      <div
                        className={`w-0 h-[137px] bg-yellow rounded-full flex justify-center items-center animate-expand-image absolute right-0`}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          className="animate-fade-in opacity-0"
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {isInviewport && (
                    <div className="col-span-1 relative" key={`${id}test`}>
                      <div
                        className={`w-0 h-[137px] bg-yellow rounded-full flex justify-center items-center col-span-1 animate-expand-image relative right-0`}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          className="animate-fade-in opacity-0"
                        />
                      </div>
                    </div>
                  )}
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface IServiceItemProps {
  title: string;
  imageInfo: ImageObject[];
  isInviewport?: boolean;
}

export default ServiceItem;
