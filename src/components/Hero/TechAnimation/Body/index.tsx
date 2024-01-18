import { Physics } from "@react-three/cannon";
import { useNavigate } from "react-router-dom";
import { Colors } from "..";
import { shells } from "../../../../constants";
import Valence from "../Valence";
import Sphere from "../Sphere";
import { ThreeEvent } from "@react-three/fiber";

var valenceCount = 2;

interface IAnimationBodyProps {
  isAnimationRunning: boolean;
  setIsAnimationRunning: React.Dispatch<React.SetStateAction<boolean>>;
}
const Body: React.FC<IAnimationBodyProps> = ({
  isAnimationRunning,
  setIsAnimationRunning,
}) => {
  const navigate = useNavigate();

  return (
    <Physics gravity={[0, 0, 0]}>
      <group
        onClick={(e: ThreeEvent<MouseEvent>) => (
          // @ts-ignore
          e.stopPropagation(), navigate(e.object ? "/" : "/" + e.object?.name)
        )}
        onPointerMissed={() => navigate("/")}
      >
        <Sphere
          r={35}
          setIsAnimationRunning={setIsAnimationRunning}
          color={Colors.yellow}
        />
        {Array.from({ length: valenceCount }, (_, index) => index + 1).map(
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
