import data from "@/app/data.json";
import CardProducts from "./CardProduct";

export default function Products() {
  return (
    <section className="from-teal/10 to-teal/95 bg-linear-90 from-0% to-100% px-32 py-24">
      <div className="mb-20 text-center">
        <h2 className="font-heading mb-4 text-5xl font-semibold">
          Produk Kami
        </h2>
        <p className="text-lg text-white/60">
          Pilihan lengkap makanan beku berkualitas tinggi untuk segala kebutuhan
          kuliner Anda.
        </p>
      </div>
      <div className="mx-auto grid w-max grid-cols-3 gap-8">
        {data.products.map((item) => (
          <div key={item.id}>
            {/* {Cards(item.name, item.category, item.description)} */}
            <CardProducts
              name={item.name}
              category={item.category}
              description={item.description}
              className="bg-ice/20"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
