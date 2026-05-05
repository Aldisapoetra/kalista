"use client";
import { motion } from "motion/react";
import Button from "./Button";
import { FiMessageCircle } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="from-teal/10 to-teal/95 flex h-screen flex-col items-center justify-center bg-linear-90 from-0% to-100%">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="font-heading mb-8 text-center text-8xl font-semibold"
      >
        Kalista
        <br />
        Frozen Food
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-ice mt-4 mb-8 text-2xl"
      >
        Citarasa terbaik, Disimpan sempurna
      </motion.p>

      <div className="mt-8 flex gap-4 text-lg">
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Button className="bg-frost text-navy hover:bg-ice font-semibold hover:cursor-pointer">
            Lihat Produk
          </Button>
        </motion.div>
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          <Button className="bg-ice/5 hover:bg-ice/10 border border-white/10 hover:cursor-pointer">
            <FiMessageCircle className="inline" size={26} /> Hubungi Kami
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
