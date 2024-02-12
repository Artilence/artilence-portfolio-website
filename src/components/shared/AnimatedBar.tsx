const AnimatedBar = ({ isInviewport, className }: IAnimatedBarProps) => {
  return (
    <div
      className={`h-[0.573vw] bg-yellow 3xl:h-[11px]
          ${isInviewport && "animate-expand"}
          ${className || ""}
        `}
    ></div>
  );
};

interface IAnimatedBarProps {
  isInviewport: boolean;
  className?: string;
}

export default AnimatedBar;
