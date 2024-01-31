import { Html } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";

import Image from "@/components/shared/Image";

const TechDialog: React.FC<ITechDialogProps> = ({
  selectedItem: { name, description },
  dialogImage,
  position,
}) => {
  return (
    <Html
      distanceFactor={1}
      position={position}
      style={{
        position: "relative",
      }}
      zIndexRange={[0, 1]}
      className="animate-fade-in font-primary tracking-normal leading-tight"
    >
      <div className="text-primary text-[4px] absolute z-10 top-4 left-2 max-w-[80px]">
        <TypeAnimation
          cursor={false}
          sequence={[name, 0]}
          wrapper="span"
          style={{ fontSize: "12px", display: "inline-block" }}
        />
        <br />

        <TypeAnimation
          speed={50}
          cursor={false}
          sequence={["", 1000, description, 1000]}
          wrapper="p"
          style={{ fontSize: "6.5px", display: "inline-block" }}
        />
      </div>
      <div className="relative top-0 right-0 ">
        <Image src={dialogImage} width={100} height={80} alt="popup" />
      </div>
    </Html>
  );
};

interface ITechDialogProps {
  selectedItem: { name: string; description: string };
  dialogImage: string;
  position: [number, number, number];
}

export default TechDialog;
