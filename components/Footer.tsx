"use client";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 156 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-39 py-11"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row">
        <div className="w-max">
          <h4 className="font-heading mb-2 text-2xl font-bold">KALISTA</h4>
          <p className="text-white/50">Segar. Beku. Terpercaya</p>
        </div>
        <div>
          <ul className="flex gap-8 text-white/50">
            <li>
              <a href="#about" className="duration-300 hover:text-white">
                Tentang
              </a>
            </li>
            <li>
              <a href="#product" className="duration-300 hover:text-white">
                Produk
              </a>
            </li>
            <li>
              <a href="#review" className="duration-300 hover:text-white">
                Ulasan
              </a>
            </li>
            <li>
              <a href="#contact" className="duration-300 hover:text-white">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 text-[15px] text-white/50">
          <p>@ 2026 Kalista Frozen Food</p>
        </div>
      </div>
    </motion.footer>
  );
}
