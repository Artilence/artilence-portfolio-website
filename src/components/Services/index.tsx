import { useRef } from "react";

import ServiceItem from "./ServiceItem";
import AnimatedBar from "../shared/AnimatedBar";
import { techStack } from "@/constants";
import useIsInViewport from "@/hooks/useIsInViewport";

const Services = () => {
  const mainSlideRef = useRef<HTMLDivElement>(null);
  const secondaySlidesRefs = Object.keys(techStack)?.map((_) =>
    useRef<HTMLDivElement>(null)
  );
  const isMainSlideInViewport = useIsInViewport(mainSlideRef);

  return (
    <div className="bg-primary scroll-m-[147px] " id="what-we-do">
      <ul id="cards">
        <li className="card" key={"unique-key"}>
          <div className="card-body ">
            <div
              className={`
      bg-shapes-bg bg-right bg-no-repeat bg-cover 
 md:px-8 min-h-screen h-[100vh]
      `}
            >
              <div
                className={`
      max-w-[1676px] flex flex-col gap-5 justify-between items-between text-white mx-auto
      py-[15%] w-[85.78%] mx-auto
      md:flex-row md:gap-36
      2xl:gap-52
      

        `}
              >
                <div
                  className={`
      flex-2 flex flex-col justify-between w-full
        `}
                >
                  <div
                    className={`flex flex-col justify-between text-[45px] font-light leading-[89%]
          sm:text-[60px]
          lg:text-[90px]
          xl:text-[140px]
            `}
                    ref={mainSlideRef}
                  >
                    <div className={``}>what</div>
                    <div>we</div>
                    <div>do</div>
                  </div>

                  <AnimatedBar
                    isInviewport={isMainSlideInViewport || false}
                    className={`
          max-w-[500px]
          relative -top-5
          md:max-w-[57.5%]
          xl:max-w-[280px]
          `}
                  />
                </div>
                <div
                  className={`
        flex-3 text-[17px] font-light w-full text-justify
        sm:text-[20px]
        lg:text-[30px]
        xl:text-[40px]
        `}
                >
                  <p
                    className={`
           w-full
           2xl:leading-[1.6]
          `}
                  >
                    At Artilence, we specialize in forging strategic technical
                    alliances to empower businesses with cutting-edge solutions.
                    Our commitment is to drive innovation, foster collaboration,
                    and deliver unparalleled value to our clients. Here's a
                    glimpse into what sets us apart:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        {Object.keys(techStack)?.map((key, index) => (
          <li key={index} className="card ">
            <div
              className="card-body bg-primary"
              ref={secondaySlidesRefs[index]}
            >
              <ServiceItem
                title={key}
                imageInfo={techStack[key as keyof typeof techStack]}
                isInviewport={useIsInViewport(secondaySlidesRefs[index])}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
