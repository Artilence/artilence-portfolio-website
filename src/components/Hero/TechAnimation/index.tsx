import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { useState } from "react";
import Body from "./Body";

export var Colors = {
  red: 0xf25346,
  white: 0xffffff,
  brown: 0xcfff47,
  pink: 0xb3c633,
  brownDark: 0xa0c633,
  blue: 0x68c3c0,
  primary: 0x06c996,
  yellow: 0xcfff47,
  gray: 0x676767,
};

const TechAnimation = () => {
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);
  return (
    <div className="w-screen h-screen bg-primary world-3d py-16 mt-16">
      <Canvas
        shadows
        camera={{
          position: [0, -500, 200],
          fov: 45,
          zoom: 2.0,
        }}
        orthographic
      >
        <Stats />

        <OrbitControls enableZoom={false} makeDefault />
        <ambientLight intensity={1.5} />
        <directionalLight
          intensity={4.5}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          position={[1, -1, 0]}
        />
        <Body
          isAnimationRunning={isAnimationRunning}
          setIsAnimationRunning={setIsAnimationRunning}
        />
        <axesHelper args={[500]} />
      </Canvas>
    </div>
  );
};

export default TechAnimation;
