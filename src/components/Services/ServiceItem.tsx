import { useState, useEffect, useRef } from "react";
import { ImageObject } from "../../constants";
import AnimatedBar from "../shared/AnimatedBar";
import Image from "../shared/Image";

const ServiceItem = ({ title, imageInfo,isInviewport }: IServiceItemProps) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const serviceItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (serviceItemRef.current) {
        const viewportHeight = window.innerHeight;
        const serviceItemTop = serviceItemRef.current.getBoundingClientRect().top;
        const serviceItemHeight = serviceItemRef.current.clientHeight;
        const scrollOffset = window.scrollY || window.pageYOffset || document.body.scrollTop || 0;

        if (serviceItemTop < viewportHeight && serviceItemTop + serviceItemHeight > 0) {
          const visibleHeight = Math.min(serviceItemHeight, viewportHeight - serviceItemTop);
          const percentage = (visibleHeight / serviceItemHeight) * 100;
          setScrollPercentage(percentage);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={serviceItemRef}>
      <div className="max-w-[1676px] mx-auto flex flex-col xl:flex-row 2xl:min-h-screen gap-[305px] py-[10%] w-[85.78%] mx-auto ">
        <div className={`bg-primary  xl:flex items-center`}>
          <div>
            <h4
              className={`text-white xl:text-[150px] text-[72px] leading-tight`}
            >
              {title}
            </h4>
            <AnimatedBar isInviewport={true} />
          </div>
        </div>
        <div
          className={`flex-1 flex justify-center items-center`}
        >
          <div
            className={`flex-1 grid grid-cols-3 gap-x-[50px] gap-y-6`}
          >
            {imageInfo.map(({ src, alt, id, span }) =>
              span === 2 ? (
                <>
                  {isInviewport && (
                    <div className="col-span-2 relative" key={id}>
                      <div
                            className={`w-0 h-[137px] bg-yellow rounded-full flex justify-center items-center col-span-1 relative right-0 `}
                           style={{
                            '--start-width': '0', // Initial width
                            '--mid-width': `${scrollPercentage / 2}%`, // Dynamic width (50%)
                            '--end-width': `${scrollPercentage}%`, // Dynamic width (100%)
                            animationName: 'expandImageAnimation', // Apply the animation keyframes
                            animationDuration: '1s', // Adjust duration as needed
                            animationFillMode: 'forwards', // Keeps element styles after animation ends
                            animationTimingFunction: 'ease', // Animation timing function
                          }}
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
                        className={`w-0 h-[137px] bg-yellow rounded-full flex justify-center items-center col-span-1 relative right-0`}
                         style={{
                            '--start-width': '0', // Initial width
                            '--mid-width': `${scrollPercentage / 2}%`, // Dynamic width (50%)
                            '--end-width': `${scrollPercentage}%`, // Dynamic width (100%)
                            animationName: 'expandImageAnimation', // Apply the animation keyframes
                            animationDuration: '1s', // Adjust duration as needed
                            animationFillMode: 'forwards', // Keeps element styles after animation ends
                            animationTimingFunction: 'ease', // Animation timing function
                          }}
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
}

export default ServiceItem;
