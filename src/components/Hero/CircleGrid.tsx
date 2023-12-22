import { useEffect, useState } from "react";
import Image from "../shared/Image";

const CircleGrid = () => {
  const [showGrid, setShowGrid] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGrid(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="z-50 scale-0 w-[37px] h-[37px] rounded-full  absolute left-[49%] top-[52.5%] animate-grow bg-yellow"></div>
      {showGrid ? (
        <div className="flex flex-col justify-center items-center flex-1 animate-opacity">
          {Array.from({ length: 5 }, (_, index) => index + 1).map(
            (i, _, arr) => (
              <div
                className={`flex  gap-[40px] ${
                  i !== arr[0] && "mt-[40px]"
                } relative`}
              >
                <div className="w-[37px] h-[37px] rounded-full bg-yellow"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-yellow"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-yellow"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-yellow"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-yellow"></div>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="flex  justify-center items-center h-screen gap-2 ">
          {/* translate-x-[155%] -translate-y-[15%] */}
          <div className="w-[380px] h-[380px] rounded-full bg-yellow flex justify-center items-center relative opacity-0 -translate-y-[15%] animate-backend-back">
            <Image src="/backend.svg" alt="backend" height={218} width={218} />
          </div>
          {/* translate-x-[49%] */}
          <div className="w-[380px] h-[380px] rounded-full bg-yellow flex justify-center items-center relative opacity-0  -translate-y-[15%] animate-frontend-back">
            <Image src="/frontend.svg" alt="backend" height={174} width={174} />
          </div>
          {/* -translate-x-[49%] */}
          <div className="w-[380px] h-[380px] rounded-full bg-yellow flex justify-center items-center relative opacity-0 -translate-y-[15%] animate-database-forward">
            <Image src="/database.svg" alt="backend" height={190} width={190} />
          </div>
          {/* -translate-x-[155%] -translate-y-[15%] */}
          <div className="w-[380px] h-[380px] rounded-full bg-yellow flex justify-center items-center relative opacity-0 -translate-y-[15%] animate-devops-forward">
            <Image src="/devops.svg" alt="backend" height={190} width={190} />
          </div>
        </div>
      )}
    </>
  );
};

export default CircleGrid;
