// Enhanced Hero.jsx
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import "../styles/Hero.css";
import Background3D from "./Background3d";
import profileImg from "../assets/profile.jpg";

export default function Hero({ ready }) {
  /* ---------------- SCROLL PARALLAX ---------------- */
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, -60]);
  const imageOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const imageScale = useTransform(scrollY, [0, 400], [1, 0.9]);
  const imageBlur = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(5px)"]);

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

  /* ---------------- MOTION VARIANTS ---------------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section className="hero">
      {/* 3D / PARTICLE BACKGROUND */}
      <div className="hero-bg">
        <Background3D scrollY={scrollY} />
      </div>

      <div className="hero-content">
        {/* LEFT CONTENT */}
        <motion.div
          className="hero-left"
          initial="hidden"
          animate={ready ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="hero-title gradient-text"
          >
            Designing Scalable CRM Systems
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={fadeUp}
            custom={0.3}
          >
            Dynamics 365 Consultant & Full-Stack Developer
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={fadeUp}
            custom={0.6}
          >
            <a href="#projects" className="btn primary glow">
              Selected Work
            </a>
            <a href="#contact" className="btn outline">
              Let’s Connect
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE – 3D PARALLAX + FLOAT */}
        <motion.div
          className="hero-right hero-image-wrapper"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <motion.div
            style={{
              y: imageY,
              opacity: imageOpacity,
              scale: imageScale,
              perspective: 1200,
            }}
          >
            <motion.div
              className="hero-image-glass enhanced-glow"
              style={{ rotateX, rotateY, filter: imageBlur }}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
