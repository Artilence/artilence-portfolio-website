import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Physics } from "@react-three/cannon";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Group } from "three";
import { useGSAP } from "@gsap/react";

import Sphere from "../Sphere";
import { shells } from "@/constants";
import Valence from "../Valence";

gsap.registerPlugin(ScrollTrigger);

interface IAnimationBodyProps {
  isAnimationRunning: boolean;
  setIsAnimationRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setDialogPosition: React.Dispatch<
    React.SetStateAction<"left" | "right" | null>
  >;
}

const Body: React.FC<IAnimationBodyProps> = ({
  isAnimationRunning,
  setIsAnimationRunning,
  setDialogPosition,
}) => {
  const navigate = useNavigate();
  const groupRef = useRef<Group>(null!);

  useGSAP(() => {
    const rotationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".world-3d",
        start: "-70% top",
        end: "bottom 100%",
        scrub: 5,
        // markers: {
        //   startColor: "black",
        //   endColor: "red",
        //   fontSize: "24px",
        //   indent: 2,
        // },
        toggleActions: "play pause reverse pause",
      },
    });

    rotationTimeline.fromTo(
      groupRef.current.rotation,
      {
        y: -Math.PI / 5,
      },
      {
        duration: 1,
        y: 0,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <Physics gravity={[0, 0, 0]}>
      <group
        ref={groupRef}
        onPointerMissed={() => (navigate("/"), setIsAnimationRunning(true))}
      >
        <Sphere r={30} setIsAnimationRunning={setIsAnimationRunning} />
        {Array.from({ length: shells.length }, (_, index) => index + 1).map(
          (i) => {
            var shellCountIndex = (i - 1) % shells.length;
            return (
              <Valence
                key={i}
                ringNumber={i}
                item={shells[shellCountIndex]}
                isAnimationRunning={isAnimationRunning}
                setIsAnimationRunning={setIsAnimationRunning}
                setDialogPosition={setDialogPosition}
              />
            );
          }
        )}
      </group>
    </Physics>
  );
};

export default Body;
