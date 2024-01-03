import { techStack } from "../../constants";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <div>
      <ul id="cards">
        <li className="card">
          <div
            className={`
      bg-shapes-bg bg-right bg-no-repeat bg-cover 
      `}
          >
            <div
              className={`
      max-w-[1676px] flex flex-col p-9 gap-5 justify-between items-between text-white mx-auto
      sm:p-7
      md:flex-row md:gap-36 md:px-16
      2xl:py-[150px] 2xl:gap-52
        `}
            >
              <div
                className={`
      flex-1 flex flex-col justify-between w-full
        `}
              >
                <div
                  className={`flex flex-col justify-between text-[45px] font-light 
          sm:text-[60px]
          lg:text-[90px]
          xl:text-[140px]
          2xl:text-[200px] 2xl:leading-[89%]
            `}
                >
                  <div
                    className={`
            `}
                  >
                    what
                  </div>
                  <div>we</div>
                  <div>do</div>
                </div>
                <div
                  className={`
          h-[5px] bg-yellow
          lg:h-[10px]
          xl:h-[20px]
          `}
                ></div>
              </div>
              <div
                className={`
        flex-1 text-[17px] font-normal w-full
        sm:text-[20px]
        lg:text-[30px]
        xl:text-[38px]
        2xl:text-[48px]
        `}
              >
                <p
                  className={`
           w-full
           2xl:leading-tight
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
        </li>
        {Object.keys(techStack)?.map((key) => (
          <li className="card">
            <ServiceItem
              key={key}
              title={key}
              imageInfo={techStack[key as keyof typeof techStack]}
            />
          </li>
        ))}
      </ul>
      {/* <ul id="cards">
        {[1, 2, 3, 4].map((item) => (
          <li className="card" id="card1">
            <div >
              <ServiceItem />
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Services;
