import { useSphere } from "@react-three/cannon";
import { Html, useCursor, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RefObject, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
  Vector2,
} from "three";
import { Colors } from "..";
import Image from "../../../shared/Image";

interface SphereProps {
  x?: number;
  y?: number;
  r?: number;
  id?: string;
  src?: string;
  name?: string;
  setIsAnimationRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sphere: React.FC<SphereProps> = ({
  x = 0,
  y = 0,
  r = 10,
  id,
  src,
  name,
  setIsAnimationRunning,
}) => {
  const colorMap = useTexture(src || "artilencelogo.png");
  colorMap.center = new Vector2(0.5, 0.5);

  const [hovered, setHovered] = useState(false);
  // const { id: selectedId } = useParams();
  const navigate = useNavigate();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [x, y, -2],
    args: [r],
  }));
  useFrame(() => {
    api.rotation.set(1.2, 0, 0);
  });

  useCursor(hovered);
  return (
    <mesh
      receiveShadow
      ref={
        ref as RefObject<
          Mesh<
            BufferGeometry<NormalBufferAttributes>,
            Material | Material[],
            Object3DEventMap
          >
        >
      }
      onPointerEnter={(e) => (
        e.stopPropagation(),
        setHovered(true),
        e.object ? navigate("/" + e.object.name) : navigate("/"),
        setIsAnimationRunning(false)
      )}
      onPointerLeave={() => (
        setHovered(false), navigate("/"), setIsAnimationRunning(true)
      )}
      name={id}
      // onClick={(e) => console.log(e.object.position)}
      // onPointerMissed={(e) => e.button === 0 && (navigate("/"), setHovered(false), setIsAnimationRunning(true))}
    >
      <sphereGeometry args={[r, 50, 50]} />
      <meshStandardMaterial
        opacity={1.0}
        map={colorMap}
        color={hovered ? Colors.primary : Colors.white}
      />
      {name && hovered && (
        <Html
          distanceFactor={1}
          style={{
            transform: "translateX(-100%) translateY(10%)",
            position: "relative",
            backgroundColor: "red",
          }}
        >
          <div className="text-primary text-xs absolute z-10 top-3 left-3">
            {name}
          </div>
          <div className="relative top-0 right-0 ">
            <Image src="/ldialog.svg" width={200} height={200} alt="popup" />
          </div>
        </Html>
      )}
    </mesh>
  );
};

export default Sphere;
