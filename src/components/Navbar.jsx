import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar({ dark, setDark }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  /* ---------------- DARK MODE PERSISTENCE ---------------- */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setDark(savedTheme === "dark");
  }, [setDark]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <motion.nav
      className={`nav ${scrolled ? "nav-scrolled" : ""}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        whileHover={{ scale: 1.08 }}
        className="nav-logo gradient-text"
      >
        Ayush
      </motion.h2>

      <motion.button
        onClick={() => setDark(!dark)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.08 }}
        className={`theme-toggle ${dark ? "dark-active" : ""}`}
      >
        <motion.span
          key={dark ? "sun" : "moon"}
          initial={{ rotate: 180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -180, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </motion.span>
      </motion.button>
    </motion.nav>
  );
}
