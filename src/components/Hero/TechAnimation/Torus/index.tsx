import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

interface TorusProps {
  radius: number;
  tubeDiameter: number;
  radialSegments: number;
  tubularSegments: number;
  arc: number;
  color?: string;
  rotationX?: number;
}

const Torus: React.FC<TorusProps> = ({
  radius,
  tubeDiameter,
  radialSegments,
  tubularSegments,
  arc,
  color = "#ff7171",
  rotationX = 0,
}) => {
  const torusRef = useRef<Mesh>(null!);

  useFrame(() => {
    // Your animation or updates can be done here
  });

  return (
    <mesh ref={torusRef} rotation-x={rotationX}>
      <torusGeometry
        args={[radius, tubeDiameter, radialSegments, tubularSegments, arc]}
      />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};

export default Torus;
