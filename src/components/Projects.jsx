import { motion } from "framer-motion";
import { projects } from "../data";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      {/* Heading animation */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Cards container */}
      <motion.div
        className="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {projects.map(project => (
          <motion.div
            key={project.id}
            className="card"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
