import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/StorySection.css";

gsap.registerPlugin(ScrollTrigger);

/* ------------------ 3D OBJECT ------------------ */
function StoryObject({ progressRef }) {
  const mesh = useRef();

  useFrame(() => {
    if (!mesh.current) return;

    const p = progressRef.current;

    mesh.current.rotation.y = p * Math.PI * 2;
    mesh.current.rotation.x = p * Math.PI;
    mesh.current.scale.setScalar(1 + p * 0.5);
  });

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1, 0.35, 120, 24]} />
      <meshStandardMaterial
        color="#4f46e5"
        roughness={0.15}
        metalness={0.8}
        emissive="#4f46e5"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

/* ------------------ MAIN SECTION ------------------ */
export default function StorySection() {
  const sectionRef = useRef();
  const progressRef = useRef(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      onUpdate: self => {
        progressRef.current = self.progress;

        const newStep =
          self.progress < 0.25 ? 0 :
          self.progress < 0.5 ? 1 :
          self.progress < 0.75 ? 2 : 3;

        setStep(prev => (prev !== newStep ? newStep : prev));
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const texts = [
    {
      title: "The Problem",
      desc:
        "Disconnected systems, manual processes, and lack of visibility slow businesses down."
    },
    {
      title: "The System",
      desc:
        "I design scalable CRM systems using Dynamics 365 tailored to business workflows."
    },
    {
      title: "Automation",
      desc:
        "Power Platform, integrations, and automation bring efficiency and clarity."
    },
    {
      title: "Impact",
      desc:
        "Clean data, faster operations, and measurable business outcomes."
    }
  ];

  return (
    <section className="story-section" ref={sectionRef}>
      <div className="story-content">
        <h2>{texts[step].title}</h2>
        <p>{texts[step].desc}</p>
      </div>

      <div className="story-canvas">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 3, 3]} intensity={1.2} />
          <StoryObject progressRef={progressRef} />
        </Canvas>
      </div>
    </section>
  );
}
