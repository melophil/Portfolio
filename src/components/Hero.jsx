import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import "../styles/Hero.css";
import AnimatedText from "./AnimatedText";
import Background3D from "./Background3d";
import profileImg from "../assets/profile.jpg";

export default function Hero({ready}) {
  /* ---------------- SCROLL PARALLAX ---------------- */
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, -50]);
  // Scroll-based exit animation
const imageOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);
const imageScale = useTransform(scrollY, [0, 400], [1, 0.92]);
const imageBlur = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(4px)"]);


  /* ---------------- CURSOR TILT ---------------- */
  const rotateX = useSpring(0, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 18 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateMax = 10;

    rotateY.set(((x / rect.width) - 0.5) * rotateMax);
    rotateX.set(-((y / rect.height) - 0.5) * rotateMax);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };
  const imageEntry = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};


  return (
    <section className="hero">
      {/* 3D / PARTICLE BACKGROUND */}
      <div className="hero-bg">
        <Background3D scrollY={scrollY} />

      </div>

      {/* HERO CONTENT */}
      <div className="hero-content">
        {/* LEFT CONTENT */}
<motion.div
  className="hero-left"
  initial={{ opacity: 0, y: 40 }}
  animate={ready ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.9, ease: "easeOut" }}
>
  <motion.h1
    initial={{ opacity: 0 }}
    animate={ready ? { opacity: 1 } : {}}
    transition={{ delay: 0.2 }}
  >
    Designing Scalable CRM Systems
  </motion.h1>

  <motion.p
    className="hero-subtitle"
    initial={{ opacity: 0 }}
    animate={ready ? { opacity: 1 } : {}}
    transition={{ delay: 0.45 }}
  >
    Dynamics 365 Consultant & Full-Stack Developer
  </motion.p>

  <motion.div
    className="hero-buttons"
    initial={{ opacity: 0 }}
    animate={ready ? { opacity: 1 } : {}}
    transition={{ delay: 0.75 }}
  >
    <a href="#projects" className="btn primary">
      Selected Work
    </a>
  </motion.div>
</motion.div>


        {/* RIGHT IMAGE – PARALLAX + CURSOR TILT */}
      {/* RIGHT IMAGE – ENTRY → SCROLL → HOVER */}
<motion.div
  className="hero-right hero-image-wrapper"
  initial={{ opacity: 0, y: 80, scale: 0.9 }}
  animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {/* SCROLL LAYER */}
  <motion.div
    style={{
      y: imageY,
      opacity: imageOpacity,
      scale: imageScale,
      perspective: 1200
    }}
  >
    {/* HOVER / TILT LAYER */}
    <motion.div
      className="hero-image-glass"
      style={{ rotateX, rotateY, filter: imageBlur }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <img
        src={profileImg}
        alt="Ayush Rana"
        loading="lazy"
        className="hero-img"
      />
    </motion.div>
  </motion.div>
</motion.div>


      </div>
    </section>
  );
}
