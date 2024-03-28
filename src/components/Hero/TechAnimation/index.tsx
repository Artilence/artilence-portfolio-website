import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Body from "./Body";
import { shells } from "@/constants";
import TechDialog from "./TechDialog";
import { OrbitControls } from "@react-three/drei";

export var Colors = {
  white: 0xffffff,
  primary: 0x06c996,
  yellow: 0xcfff47,
  gray: 0x676767,
};
export const isMobileScreen = () => window.innerWidth < 768;
const TechAnimation = () => {
  const [isAnimationRunning, setIsAnimationRunning] = useState(true);
  const [selectedItem, setSelectedItem] = useState<any>();
  const [dialogPosition, setDialogPosition] = useState<"left" | "right" | null>(
    null
  );
  const { id: selectedId } = useParams();
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    if (selectedId) {
      setSelectedItem(shells.flat().find((shell) => shell.id === selectedId));
    }
  }, [selectedId]);
    // Calculate zoom level based on viewport width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 2000) {
        setZoom(3);
      } else if (width > 1400) {
        setZoom(2.5);
      } else if (width > 1300) {
        setZoom(2);
      }else {
        setZoom(1.5);
      }
    };

    // Initial call
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-screen h-screen bg-primary world-3d">
      <Canvas
        shadows
        camera={{
          position: [0, -500, 200],
          fov: isMobileScreen() ? 60 : 45,
          zoom:  zoom,
        }}
        orthographic
        style={{ width: '100%', height: '100%' }}
      >
        {selectedId &&
          !isMobileScreen() &&
          selectedItem &&
          (dialogPosition === "left" ? (
            <TechDialog
              selectedItem={selectedItem}
              dialogImage="/ldialog.svg"
              position={
                window.innerWidth > 768 && window.innerWidth < 1200
                  ? [0, 250, 80]
                  : [-285, 250, 0]
              }
            />
          ) : (
            <TechDialog
              selectedItem={selectedItem}
              dialogImage="/ldialog.svg"
              position={
                window.innerWidth > 768 && window.innerWidth < 1200
                  ? [0, 250, -180]
                  : [185, 250, 0]
              }
            />
          ))}

        {/* <Stats /> */}

        <OrbitControls
          enableZoom={false}
          makeDefault
          maxAzimuthAngle={0.2}
          minAzimuthAngle={-0.2}
          maxPolarAngle={Math.PI}
          minPolarAngle={2.8}
        />
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
