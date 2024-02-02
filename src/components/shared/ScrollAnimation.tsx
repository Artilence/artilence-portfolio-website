const ScrollAnimation = () => {
  return (
    <div className="mouse w-[40px] h-[67px] border border-yellow rounded-full relative">
      <div className="dot w-[10px] h-[10px] bg-yellow rounded-full absolute bottom-[10px] left-1/2 transform -translate-x-1/2 animate-swipe-animation"></div>
    </div>
  );
};

export default ScrollAnimation;
