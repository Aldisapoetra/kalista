"use client";
import { motion } from "motion/react";
import { LuPhone } from "react-icons/lu";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-navy border-ice/5 fixed top-0 z-50 h-18.25 w-full border-b"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between py-4">
        <div className="font-heading text-xl font-bold">KALISTA</div>
        <ul className="flex gap-8">
          <li>
            <a href="#">Tentang</a>
          </li>
          <li>
            <a href="#">Produk</a>
          </li>
          <li>
            <a href="#">Ulasan</a>
          </li>
          <li>
            <a href="#">Kontak</a>
          </li>
        </ul>
        <a className="border-ice/10 flex items-center gap-2 rounded-full border bg-white/10 px-4 py-2">
          <LuPhone /> Hubungi
        </a>
      </div>
    </motion.nav>
  );
}
