import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/IntroOverlay.css";

export default function IntroOverlay({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 4200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <motion.div
      className="intro-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="intro-lines"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Designing
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        Scalable Systems
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        CRM • Automation • Full-Stack
      </motion.p>
    </motion.div>
  );
}
