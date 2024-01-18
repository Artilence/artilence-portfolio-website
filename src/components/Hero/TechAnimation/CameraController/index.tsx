import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const CameraController = ({
  targetPosition,
}: {
  targetPosition: { x: number; y: number; z: number };
}) => {
  const { camera } = useThree();

  // Use useFrame to smoothly animate the camera to the target position
  useFrame(() => {
    // Adjust damping factor to control the speed of the camera movement
    const dampingFactor = 0.25;

    // Interpolate the current camera position towards the target position
    camera.position.lerp(targetPosition as Vector3, dampingFactor);

    // Update the camera's lookAt to focus on the target position
    camera.lookAt(targetPosition.x, targetPosition.y, targetPosition.z);
  });

  return null;
};

export default CameraController;
