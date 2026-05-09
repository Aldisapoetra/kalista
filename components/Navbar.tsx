"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { LuPhone } from "react-icons/lu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-navy border-ice/5 fixed top-0 z-50 h-18.25 w-full border-b"
    >
      <div className="relative mx-auto flex h-full items-center justify-between p-8 py-4 md:max-w-7xl">
        <div className="font-heading text-xl font-bold">
          <a href="#">KALISTA</a>
        </div>
        <div>
          <ul className="hidden gap-8 text-white/70 md:flex">
            <li className="duration-300 hover:text-white">
              <a href="#about">Tentang</a>
            </li>
            <li className="duration-300 hover:text-white">
              <a href="#product">Produk</a>
            </li>
            <li className="duration-300 hover:text-white">
              <a href="#review">Ulasan</a>
            </li>
            <li className="duration-300 hover:text-white">
              <a href="#contact">kontak</a>
            </li>
          </ul>
        </div>
        <div>
          <a className="border-ice/10 hidden items-center gap-2 rounded-full border bg-white/10 px-4 py-2 md:flex">
            <LuPhone /> Hubungi
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <div className="flex h-7 w-7 flex-col justify-around">
            <motion.div
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 9 : 0,
                x: isOpen ? -4 : 0,
              }}
              className={`bg-frost h-0.5 overflow-hidden ${isOpen ? "w-6.75" : "w-full"}`}
            ></motion.div>
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
              className="bg-frost h-0.5 w-full"
            ></motion.div>
            <motion.div
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -9 : 0,
                x: isOpen ? -4 : 0,
              }}
              className={`bg-frost h-0.5 overflow-hidden ${isOpen ? "w-6.75" : "w-full"}`}
            ></motion.div>
          </div>
        </button>
      </div>
      {/* hidden menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="bg-navy absolute right-0 flex h-svh w-37.5 justify-end pr-9 md:hidden"
          >
            <ul className="flex flex-col gap-8 text-right text-white/70">
              <li className="duration-300 hover:text-white">
                <a href="#about">Tentang</a>
              </li>
              <li className="duration-300 hover:text-white">
                <a href="#product">Produk</a>
              </li>
              <li className="duration-300 hover:text-white">
                <a href="#review">Ulasan</a>
              </li>
              <li className="duration-300 hover:text-white">
                <a href="#contact">kontak</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
