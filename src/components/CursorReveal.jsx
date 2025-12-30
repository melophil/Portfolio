import { useEffect, useState } from "react";
import "../styles/CursorReveal.css";

export default function CursorReveal() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="cursor-reveal"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
