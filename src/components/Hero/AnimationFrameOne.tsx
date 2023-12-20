const AnimationFrameOne = () => {
  return (
    <div className="flex flex-1 justify-between min-h-[632px]">
      <div className="flex flex-col justify-between">
        <div className="self-start relative">
          {Array.from({ length: 5 }, (_, index) => index + 1)
            .reverse()
            .map((i: number, _: number, arr: number[]) => (
              <div className={`flex gap-[40px] ${i !== arr[0] && "mt-[40px]"}`}>
                {Array.from({ length: i }, (_, index) => index + 1).map(() => (
                  <div className="w-[37px] h-[37px] rounded-full bg-white"></div>
                ))}
              </div>
            ))}
        </div>
        <p className="">to innovate</p>
      </div>
      <div className="self-center">
        <div className="w-[100px] h-[100px] rounded-full bg-yellow-300"></div>
      </div>

      <div className="flex flex-col justify-between">
        <p className="">collaborate</p>
        <div className="self-end ">
          {Array.from({ length: 5 }, (_, index) => index + 1).map(
            (i: number, _: number, arr: number[]) => (
              <div
                className={`flex justify-end gap-[40px] ${
                  i !== arr[0] && "mt-[40px]"
                }`}
              >
                {Array.from({ length: i }, (_, index) => index + 1).map(() => (
                  <div className="w-[37px] h-[37px] rounded-full bg-white"></div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimationFrameOne;
