import { useSphere } from "@react-three/cannon";
import { Html, useCursor } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RefObject, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BufferGeometry,
  LinearMipMapLinearFilter,
  Material,
  Mesh,
  NearestFilter,
  NormalBufferAttributes,
  Object3DEventMap,
  TextureLoader,
} from "three";

interface SphereProps {
  x?: number;
  y?: number;
  r?: number;
  color?: number;
  id?: string;
  src?: string;
  name?: string;
  setIsAnimationRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sphere: React.FC<SphereProps> = ({
  x = 0,
  y = 0,
  r = 12,
  color,
  id,
  src,
  name,
  setIsAnimationRunning,
}) => {
  const colorMap = useLoader(TextureLoader, src || "textures/react.png");
  colorMap.magFilter = NearestFilter;
  colorMap.minFilter = LinearMipMapLinearFilter;
  const [hovered, setHovered] = useState(false);
  const { id: selectedId } = useParams();

  const [ref] = useSphere(() => ({
    mass: 1,
    position: [x, y, -2],
    args: [r],
  }));

  useCursor(hovered);
  return (
    <mesh
      ref={
        ref as RefObject<
          Mesh<
            BufferGeometry<NormalBufferAttributes>,
            Material | Material[],
            Object3DEventMap
          >
        >
      }
      onClick={() => (
        setIsAnimationRunning((prevState) => !prevState),
        console.log(ref.current?.position)
      )}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
      name={id}
    >
      <sphereGeometry args={[r, 50, 50]} />
      <meshPhongMaterial color={color} opacity={1.0} map={colorMap} />
      {name && selectedId === id && (
        <Html
          distanceFactor={1}
          style={{
            transform: "translate(16%, 16%)",
            backgroundImage: `url("icons/frontend/react.svg")`,
          }}
        >
          <div className="text-sm text-yellow">{name}</div>
        </Html>
      )}
    </mesh>
  );
};

export default Sphere;
