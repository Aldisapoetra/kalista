"use client";

import { motion } from "motion/react";
import test from "node:test";
import { useEffect, useState } from "react";

export default function Typing({ content }: { content: string }) {
  const text = content;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const pulseCursor = text.length === index;

  useEffect(() => {
    if (text.length > index) {
      const timeOut = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeOut);
    }
  }, [text, index]);

  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-2xl tracking-widest"
      >
        {displayedText}
        <span className={pulseCursor ? "animate-ping" : ""}>|</span>
      </motion.p>
    </div>
  );
}
