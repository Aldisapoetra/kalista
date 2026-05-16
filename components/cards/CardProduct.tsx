"use client";
import { motion } from "motion/react";

interface CardProps {
  name: string;
  category: string;
  description: string;
  className: string;
}

export default function CardProduct({
  name,
  description,
  category,
  className,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      // viewport={{ once: true }}
      className="bg-teal/20 hover:bg-ice/5 w-full rounded-2xl border border-white/10 p-4 shadow-xl transition-all duration-500 hover:scale-101"
    >
      <div className={`mb-6 h-48 w-full rounded-2xl ${className}`}></div>
      <div>
        <p className="text-ice mb-2 text-sm font-bold">{category}</p>
        <p className="font-heading mb-2 text-2xl font-bold">{name}</p>
        <p className="text-white/50">{description}</p>
      </div>
    </motion.div>
  );
}
