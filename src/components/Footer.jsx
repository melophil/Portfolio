import { motion } from "framer-motion";
import "../styles/Footer.css"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      © 2025 Ayush Rana
    </motion.footer>
  );
}
