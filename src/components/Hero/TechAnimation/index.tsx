import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Body from "./Body";
import { shells } from "@/constants";
import TechDialog from "./TechDialog";

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
  const [selectedItem, setSelectedItem] = useState<any>();
  const [dialogPosition, setDialogPosition] = useState<"left" | "right" | null>(
    null
  );
  const { id: selectedId } = useParams();

  useEffect(() => {
    if (selectedId) {
      setSelectedItem(shells.flat().find((shell) => shell.id === selectedId));
    }
  }, [selectedId]);

  return (
    <div className="w-screen h-screen bg-primary world-3d py-16 mt-16">
      <Canvas
        shadows
        camera={{
          position: [0, -500, 200],
          fov: 45,
          zoom: 3.0,
        }}
        orthographic
      >
        {selectedId &&
          selectedItem &&
          (dialogPosition === "left" ? (
            <TechDialog
              selectedItem={selectedItem}
              dialogImage="/ldialog.svg"
              position={[-270, 250, 0]}
            />
          ) : (
            <TechDialog
              selectedItem={selectedItem}
              dialogImage="/ldialog.svg"
              position={[180, 250, 0]}
            />
          ))}

        {/* <Stats /> */}

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
          setDialogPosition={setDialogPosition}
        />
        {/* <axesHelper args={[500]} /> */}
      </Canvas>
    </div>
  );
};

export default TechAnimation;
