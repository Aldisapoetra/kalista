import data from "@/app/data.json";
import CardReview from "./CardReview";

export default function Review() {
  return (
    <section className="from-teal/40 to-teal bg-linear-90 from-0% to-100% py-24">
      <div className="mb-20 text-center">
        <p className="font-heading mb-4 text-5xl font-bold">
          Apa Kata Pelanggan
        </p>
        <p className="text-xl text-white/50">
          Kepercayaan Anda adalah prioritas utama kami.
        </p>
      </div>
      <div className="flex justify-center gap-8">
        {data.reviews.map((review) => (
          <CardReview
            key={review.id}
            initial={review.name.charAt(0)}
            name={review.name}
            badge={review.badge}
            rating={review.rating}
            text={review.text}
          />
        ))}
      </div>
    </section>
  );
}
