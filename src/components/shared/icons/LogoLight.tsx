import Image from "../Image";

const LogoLight = ({ className }: ISVGProps) => {
  return (
     <Image
      src='/public//img/A-logo.png'
      alt='logo'
      height={218} width={218}
      className={className}
    />
  );
};

export default LogoLight;
