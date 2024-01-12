const AnimatedBar = ({ isInviewport, className }: IAnimatedBarProps) => {
  return (
    <div
      className={`h-[8px] bg-yellow xl:h-[11px]
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
