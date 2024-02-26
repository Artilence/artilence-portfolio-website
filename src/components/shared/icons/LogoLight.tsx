import Image from "../Image";

const LogoLight = ({ className }: ISVGProps) => {
  return (
     <Image
      src='/icons/logo/A-logo.png'
      alt='logo'
      height={218} width={218}
      className={className}
    />
  );
};

export default LogoLight;
