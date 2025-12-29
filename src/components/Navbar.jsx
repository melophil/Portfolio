import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar({ dark, setDark }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <motion.h2 whileHover={{ scale: 1.05 }}>
        Ayush
      </motion.h2>

      <motion.button
        onClick={() => setDark(!dark)}
        whileTap={{ scale: 0.9 }}
        className="theme-toggle"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </motion.button>
    </nav>
  );
}
