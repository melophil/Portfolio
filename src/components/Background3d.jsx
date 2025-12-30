import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function WaveParticles() {
  const ref = useRef();

  const count = 2000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    let i = 0;

    for (let x = -10; x < 10; x += 0.5) {
      for (let z = -10; z < 10; z += 0.5) {
        arr[i++] = x;
        arr[i++] = 0;
        arr[i++] = z;
      }
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    const pos = ref.current.geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      // Wave motion
      const y =
        Math.sin(x * 0.6 + time) * 0.4 +
        Math.cos(z * 0.6 + time) * 0.4;

      pos.setY(i, y);
    }

    pos.needsUpdate = true;
    ref.current.rotation.y = time * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#4f46e5"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Background3D() {
  return (
    <Canvas
      camera={{ position: [0, 6, 10], fov: 60 }}
    >
      <ambientLight intensity={0.6} />
      <WaveParticles />
    </Canvas>
  );
}
