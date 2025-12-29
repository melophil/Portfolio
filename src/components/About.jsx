import { motion } from "framer-motion";
import "../styles/About.css";
import AnimatedText from "./AnimatedText";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.6 }} // 🔥 re-trigger
      >
        About Me
      </motion.h2>

      <AnimatedText
        text="I am a Dynamics 365 CRM Consultant and Full-Stack Developer with hands-on experience delivering enterprise CRM solutions."
      />
    </section>
  );
}
