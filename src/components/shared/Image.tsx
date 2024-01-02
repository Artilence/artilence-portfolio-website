const Image = ({ src, alt, height, width, className }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={className || ""}
    />
  );
};

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

export default Image;
