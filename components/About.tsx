"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { RiShieldCheckLine } from "react-icons/ri";
import { TbSnowflake } from "react-icons/tb";

export default function About() {
  return (
    <section
      id="about"
      className="text-frost from-teal/40 to-teal to-100%py-24 bg-linear-90 from-0% py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-20 px-6 md:gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
          className="text-about flex h-full flex-col justify-center"
        >
          <h2 className="font-heading mb-6 text-5xl font-bold">
            Kualitas Premium di Jantung Raha
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            Kami hadir untuk memastikan makanan beku berkualitas mudah dijangkau
            warga Raha dan sekitarnya. Dengan standar penyimpanan optimal, kami
            menjaga kesegaran dan cita rasa setiap produk hingga sampai ke meja
            makan Anda.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="border-frost/10 bg-frost/5 flex h-12 w-12 items-center justify-center rounded-full border">
                <TbSnowflake size={25} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">
                  Produk Segar & Beku Berkualitas
                </h3>
                <p className="text-frost/50 text-lg">
                  Pilihan terbaik untuk keluarga Anda.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="border-frost/10 bg-frost/5 flex h-12 w-12 items-center justify-center rounded-full border">
                <LuMapPin size={25} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Lokasi Strategis</h3>
                <p className="text-frost/50 text-lg">
                  Berlokasi di Hotel Napabale, mudah diakses.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="border-frost/10 bg-frost/5 flex h-12 w-12 items-center justify-center rounded-full border">
                <RiShieldCheckLine size={25} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Dipercaya Pelanggan</h3>
                <p className="text-frost/50 text-lg">
                  Rating 5.0 bukti kepuasan pelanggan kami.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
          className="image-about bg border-ice/20 relative h-75 w-full overflow-hidden rounded-3xl border-4 md:h-146"
        >
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw "
            priority
            src="/img/good.jpg"
            alt="Bagus"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
