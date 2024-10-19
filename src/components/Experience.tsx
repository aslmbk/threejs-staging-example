import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
} from "@react-three/drei";
import { TeslaModel3 } from "./TeslaModel3";
import { Lights } from "./Lights";
import { Background } from "./Background";

export const Experience: React.FC = () => {
  return (
    <>
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.72}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        maxDistance={15}
        minDistance={6}
      />
      <ambientLight intensity={0.4} />
      <TeslaModel3 scale={0.012} position-z={0.6} />

      <Environment resolution={512} frames={Infinity} blur={0.5} background>
        <Lights />
        <Background />
      </Environment>

      {/* Ground */}
      <mesh position={[0, -0.76, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          mirror={0.5}
          color="#171720"
          resolution={1024}
          mixStrength={3}
          roughness={0.6}
        />
      </mesh>
    </>
  );
};
