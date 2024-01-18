import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Line: React.FC = () => {
  const lineRef = useRef<SVGLineElement>(null!);

  useFrame(() => {
    // Your animation or updates can be done here
  });

  return (
    <line ref={lineRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach={"attributes-position"}
          count={2}
          array={new Float32Array([0, 10, 0, 0, -10, 0])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={0x0000ff} />
    </line>
  );
};

export default Line;
