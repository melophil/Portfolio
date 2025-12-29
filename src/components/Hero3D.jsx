import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Node({ position, scale = 1 }) {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
}

function Network() {
  return (
    <>
      <Node position={[0, 0, 0]} scale={1.2} />
      <Node position={[1.2, 0.5, -0.5]} />
      <Node position={[-1, -0.6, 0.3]} />
      <Node position={[0.5, -1, 0.6]} />
      <Node position={[-0.6, 1, -0.4]} />
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <Network />
      </Float>

      {/* Prevents user rotating like a game */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
