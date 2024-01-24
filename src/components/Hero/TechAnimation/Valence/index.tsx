import { useRef } from "react";
import { Group } from "three";
import Torus from "../Torus";
import Sphere from "../Sphere";
import { Colors } from "..";
import { useFrame } from "@react-three/fiber";

interface ValenceProps {
  ringNumber: number;
  item: { src: string; id: string; name: string }[];
  isAnimationRunning: boolean;
  setIsAnimationRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const Valence: React.FC<ValenceProps> = ({
  ringNumber,
  item,
  isAnimationRunning,
  setIsAnimationRunning,
}) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const baseRadius = width > height ? height - 40 / 2 : width - 40 / 2;
  const radius = 50 + (baseRadius / 30) * ringNumber;
  const baseRotation = 0.005;

  const groupRef = useRef<Group>(null!);

  useFrame(() => {
    if (groupRef.current && isAnimationRunning) {
      // groupRef.current.rotation.x += baseRotation - ringNumber * 0.001;
      // groupRef.current.rotation.y += baseRotation - ringNumber * 0.001;
      groupRef.current.rotation.z += baseRotation - ringNumber * 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <Torus
        radius={radius}
        tubeDiameter={0.4}
        radialSegments={20}
        tubularSegments={100}
        arc={Math.PI * 2}
        color={`${Colors.gray}`}
        rotationX={0}
      />
      <group rotation={[0, 0, Math.PI / 4]}>
        {item.map(({ src, id, name }, i) => {
          const angleIncrement = (Math.PI * 2) / item.length;
          const angle = i * angleIncrement;
          const posX = radius * Math.cos(angle);
          const posY = radius * Math.sin(angle);
          return (
            <Sphere
              key={id}
              x={posX}
              y={posY}
              id={id}
              src={src}
              name={name}
              setIsAnimationRunning={setIsAnimationRunning}
            />
          );
        })}
      </group>
    </group>
  );
};

export default Valence;
