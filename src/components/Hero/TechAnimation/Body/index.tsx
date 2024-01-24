import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Physics } from "@react-three/cannon";
import { useNavigate } from "react-router-dom";
import { shells } from "../../../../constants";
import Valence from "../Valence";
import Sphere from "../Sphere";
import { ThreeEvent } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface IAnimationBodyProps {
  isAnimationRunning: boolean;
  setIsAnimationRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const Body: React.FC<IAnimationBodyProps> = ({
  isAnimationRunning,
  setIsAnimationRunning,
}) => {
  const navigate = useNavigate();
  const groupRef = useRef<Group>(null!);

  useGSAP(() => {
    const rotationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".world-3d",
        start: "top top",
        end: "center 100%",
        scrub: 5,
        toggleActions: "play pause reverse pause",
        onEnter: function () {
          console.log("Play Animation");
        },
      },
    });

    rotationTimeline.fromTo(
      groupRef.current.rotation,
      {
        y: -Math.PI / 4,
      },
      {
        duration: 5,
        y: 0,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <Physics gravity={[0, 0, 0]}>
      <group
        onClick={(e: ThreeEvent<MouseEvent>) => (
          // @ts-ignore
          e.stopPropagation(), navigate(e.object ? "/" : "/" + e.object?.name)
        )}
        ref={groupRef}
        onPointerMissed={() => navigate("/")}
      >
        <Sphere r={25} setIsAnimationRunning={setIsAnimationRunning} />
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
              />
            );
          }
        )}
      </group>
    </Physics>
  );
};

export default Body;
