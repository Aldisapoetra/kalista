"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { LuClock, LuMapPin, LuMessageSquare, LuPhone } from "react-icons/lu";

export default function Contact() {
  return (
    <section
      id="contact"
      className="from-teal/10 to-teal/95 bg-linear-90 from-0% to-100% px-6 py-24 md:px-30"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="from-ice/5 to-teal/70 grid gap-8 rounded-3xl border border-white/10 bg-linear-90 from-0% to-100% p-6 md:p-10 lg:grid-cols-2"
      >
        <div>
          <h2 className="font-heading mb-8 text-4xl font-semibold">
            Temukan Kami
          </h2>
          <div className="address mb-8 flex gap-2 md:gap-4">
            <div className="mt-0.5">
              <LuMapPin className="text-2xl" />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Alamat</h4>
              <div className="">
                <p className="text-white/50">
                  HOTEL NAPABALE, Jl. Ahmad Yani
                  <br />
                  Raha I, Kabupaten Muna
                  <br />
                  Sulawesi Tenggara (93612)
                </p>
              </div>
            </div>
          </div>
          <div className="jam-operasional mb-8 flex gap-2 md:gap-4">
            <div className="mt-0.5">
              <LuClock className="text-2xl" />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Jam Operasional</h4>
              <div>
                <p className="text-white/50">Buka pukul 09.00</p>
                <p className="text-sm text-white/35">
                  *Jam buka mungkin berubah saat hari raya makn makan makan
                </p>
              </div>
            </div>
          </div>
          <div className="phone-number mb-8 flex gap-2 md:gap-4">
            <div className="mt-0.5">
              <LuPhone className="text-2xl" />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Telepon</h4>
              <div className="">
                <p className="text-white/50">0813-1226-3145</p>
              </div>
            </div>
          </div>
          <Link
            href="https://wa.me/6281312263145"
            target="_blank"
            rel="noopener noreferrer"
            className="text-frost inline-flex w-full items-center gap-2 rounded-full bg-green-500 px-6 py-4 text-lg font-semibold"
          >
            <LuMessageSquare className="text-2xl" />
            Hubungi via Whatsapp
          </Link>
        </div>
        <div className="google-maps border-ice/20 block h-100 w-full overflow-hidden rounded-3xl border-10 lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.888714573676!2d122.72267477473983!3d-4.838881495136689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da3cbc32d48debb%3A0xa498669a1dd1a509!2sKalista%20Frozen%20food!5e1!3m2!1sid!2sid!4v1777944754549!5m2!1sid!2sid"
            width="100%"
            height="100&"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
