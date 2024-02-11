const ScrollAnimation = () => {
  return (
    <div className="mouse w-[20px] h-[40px] md:w-[40px] md:h-[67px] border border-yellow rounded-full relative">
      <div className="dot w-[6px] h-[6px] md:w-[10px] md:h-[10px] bg-yellow rounded-full absolute bottom-[10px] left-1/2 transform -translate-x-1/2 animate-swipe-animation"></div>
    </div>
  );
};

export default ScrollAnimation;
