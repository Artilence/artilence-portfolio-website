import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import Body from "./Body";
import Image from "../../shared/Image";
import { useParams } from "react-router-dom";
import { HEADER_CURSOR_CLASS_NAME, shells } from "../../../constants";
import { TypeAnimation } from "react-type-animation";

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
  const { id: selectedId } = useParams();

  useEffect(() => {
    if (selectedId) {
      // setIsAnimationRunning(true);
      // const selectedItem =
      setSelectedItem(shells.flat().find((shell) => shell.id === selectedId));
      // console.log(selectedItem);
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
        {selectedId && selectedItem && (
          <Html
            distanceFactor={1}
            position={[-270, 250, 0]}
            style={{
              position: "relative",
            }}
            zIndexRange={[0, 1]}
            className="animate-fade-in font-primary tracking-normal leading-tight"
          >
            <div className="text-primary text-[4px] absolute z-10 top-4 left-2 max-w-[80px]">
              <TypeAnimation
                className={HEADER_CURSOR_CLASS_NAME}
                cursor={false}
                sequence={[
                  selectedItem.name,
                  0,
                  (el: HTMLSpanElement) =>
                    el.classList.remove(HEADER_CURSOR_CLASS_NAME),
                ]}
                wrapper="span"
                style={{ fontSize: "12px", display: "inline-block" }}
              />
              <br />

              <TypeAnimation
                speed={50}
                cursor={false}
                sequence={[selectedItem.description, 1000]}
                wrapper="p"
                style={{ fontSize: "6.5px", display: "inline-block" }}
              />
            </div>
            <div className="relative top-0 right-0 ">
              <Image src="/ldialog.svg" width={180} height={150} alt="popup" />
            </div>
          </Html>
        )}

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
        />
        {/* <axesHelper args={[500]} /> */}
      </Canvas>
    </div>
  );
};

export default TechAnimation;
