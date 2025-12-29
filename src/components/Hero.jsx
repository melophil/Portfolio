import { motion } from "framer-motion";
import "../styles/Hero.css";
import AnimatedText from "./AnimatedText";
import Hero3D from "./Hero3D";
import Background3D from "./Background3d";

export default function Hero() {
  return (
    <section className="hero">
      {/* 3D BACKGROUND */}
      <div className="hero-bg">
        <Background3D />
      </div>

      {/* HERO CONTENT */}
      <div className="hero-content">
        {/* LEFT CONTENT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Name + Role */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Ayush Rana
            <span>Dynamics 365 CRM Consultant</span>
          </motion.h1>

          {/* Animated description */}
          <AnimatedText text="Designing scalable CRM solutions and full-stack web applications." />

          {/* CTA buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#projects" className="btn primary">
              View Work
            </a>
            <a href="#contact" className="btn outline">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL (OPTIONAL 3D OBJECT) */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0]
          }}
          transition={{
            delay: 0.8,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}
