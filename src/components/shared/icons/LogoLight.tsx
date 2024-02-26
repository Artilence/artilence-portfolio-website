import Image from "../Image";

const LogoLight = ({ className }: ISVGProps) => {
  return (
     <Image
      src='/public//img/logo-02.png'
      alt='logo'
      height={218} width={218}
      className={className}
    />
  );
};

export default LogoLight;
