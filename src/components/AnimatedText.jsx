import { motion } from "framer-motion";
import { stagger, item } from "../animations";

export default function AnimatedText({ text }) {
  return (
    <motion.p
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,     // 🔥 allow re-trigger
        amount: 0.8      // trigger when mostly visible
      }}
      style={{ marginTop: "16px" }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={item}
          style={{
            display: "inline-block",
            marginRight: "6px"
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
