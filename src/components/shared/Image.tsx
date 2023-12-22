const Image = ({ src, alt, height, width }: ImageProps) => {
  return <img src={src} alt={alt} height={height} width={width} />;
};

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

export default Image;
