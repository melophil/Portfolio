import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StorySection from "./components/StorySection"; // ✅ ADD THIS
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDark(true);
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />

      {/* 🔥 STORYTELLING SECTION */}
      <StorySection />

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
