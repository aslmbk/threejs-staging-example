import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

export const App: React.FC = () => {
  return (
    <Canvas camera={{ position: [-3, 1.5, 12], fov: 30 }}>
      <color attach="background" args={["#171720"]} />
      <fog attach="fog" args={["#171720", 20, 30]} />
      <Experience />
    </Canvas>
  );
};
