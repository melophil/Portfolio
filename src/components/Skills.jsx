import { motion } from "framer-motion";
import { skills } from "../data";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      {/* Heading animation */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }}
      >
        Skills
      </motion.h2>

      {/* Skills container */}
      <motion.div
        className="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {Object.values(skills).flat().map(skill => (
          <motion.span
            key={skill}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" }
              }
            }}
            whileHover={{ y: -6, scale: 1.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
