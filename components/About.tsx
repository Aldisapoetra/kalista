import { LuMapPin } from "react-icons/lu";
import { RiShieldCheckLine } from "react-icons/ri";
import { TbSnowflake } from "react-icons/tb";

export default function About() {
  return (
    <section className="text-frost from-teal/40 to-teal to-100%py-24 bg-linear-90 from-0% py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-16 px-6">
        <div className="w-full">
          <div className="text-about flex h-full flex-col justify-center">
            <h2 className="font-heading mb-6 text-5xl font-bold">
              Kualitas Premium di Jantung Raha
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Kami hadir untuk memastikan makanan beku berkualitas mudah
              dijangkau warga Raha dan sekitarnya. Dengan standar penyimpanan
              optimal, kami menjaga kesegaran dan cita rasa setiap produk hingga
              sampai ke meja makan Anda.
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
                  <h3 className="text-2xl font-semibold">
                    Dipercaya Pelanggan
                  </h3>
                  <p className="text-frost/50 text-lg">
                    Rating 5.0 bukti kepuasan pelanggan kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-about p bg flex h-146 w-142 justify-end rounded-3xl border bg-yellow-600"></div>
      </div>
    </section>
  );
}
