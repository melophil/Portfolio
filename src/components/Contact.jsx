import { motion } from "framer-motion";
import "../styles/Contact.css";
import AnimatedText from "./AnimatedText";

export default function Contact() {
  return (
    <section id="contact" className="section">
      {/* Heading animation on scroll */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Text animation on scroll (word-by-word) */}
      <AnimatedText text="Let’s connect and build something impactful." />
    </section>
  );
}
