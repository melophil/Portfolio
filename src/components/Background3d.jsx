import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

function Particles({ scrollY }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 1500;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (!ref.current) return;

    // Subtle scroll-based rotation
    ref.current.rotation.y = scrollY.get() * 0.0002;
    ref.current.rotation.x = scrollY.get() * 0.0001;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#4f46e5"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Background3D() {
  const { scrollY } = useScroll();

  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.8} />
      <Particles scrollY={scrollY} />
    </Canvas>
  );
}
