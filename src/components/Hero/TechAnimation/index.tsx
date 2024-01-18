import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import Body from "./Body";

export var Colors = {
  red: 0xf25346,
  white: 0xd8d0d1,
  brown: 0xcfff47,
  pink: 0xb3c633,
  brownDark: 0xa0c633,
  blue: 0x68c3c0,
  primary: 0x06c996,
  yellow: 0xcfff47,
  gray: 0x676767,
};

const TechAnimation = () => {
  const [isAnimationRunning, setIsAnimationRunning] = useState(true);
  return (
    <div className="flex items-center justify-center">
      <div className="h-screen w-[700px] bg-primary ">
        <Canvas
          camera={{
            position: [0, 0, 200],
            fov: 45,
            zoom: 2.0,
          }}
          orthographic
        >
          <OrbitControls enableZoom={true} makeDefault />
          <ambientLight intensity={2.8} color={0xffffff} />
          <spotLight
            position={[-100, -100, -100]}
            intensity={0.2}
            angle={0.3}
            penumbra={1}
          />
          <hemisphereLight
            color="white"
            groundColor="#ff0f00"
            position={[-7, 25, 13]}
            intensity={1}
          />
          <Body
            isAnimationRunning={isAnimationRunning}
            setIsAnimationRunning={setIsAnimationRunning}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default TechAnimation;
