"use client";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 156 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex h-39 items-center justify-between px-30 py-11"
    >
      <div>
        <h4 className="font-heading mb-2 text-2xl font-bold">KALISTA</h4>
        <p className="text-white/50">Segar, Beku, Terpercaya</p>
      </div>
      <div>
        <ul className="flex gap-8 text-white/50">
          <li>
            <a href="" className="duration-300 hover:text-white">
              Beranda
            </a>
          </li>
          <li>
            <a href="" className="duration-300 hover:text-white">
              Produk
            </a>
          </li>
          <li>
            <a href="" className="duration-300 hover:text-white">
              Ulasan
            </a>
          </li>
          <li>
            <a href="" className="duration-300 hover:text-white">
              Kontak
            </a>
          </li>
        </ul>
      </div>
      <div className="text-[15px] text-white/50">
        <p>@ 2026 Kalista Frozen Food</p>
      </div>
    </motion.footer>
  );
}
