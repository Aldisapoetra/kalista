import { LuStar } from "react-icons/lu";

interface CardReviewProps {
  initial: string;
  name: string;
  badge: string;
  rating: number;
  text: string;
}

export default function CardReview({
  initial,
  name,
  badge,
  rating,
  text,
}: CardReviewProps) {
  return (
    <div className="h-63.75 w-108 rounded-3xl border p-8">
      <div className="mb-6 flex gap-4">
        <div className="from-ice to-teal text-navy b flex h-14 w-14 items-center justify-center rounded-full bg-linear-120 from-0% to-100% text-xl font-bold">
          {initial}
        </div>
        <div>
          <p className="text-xl font-bold">{name}</p>
          <p className="text-sm text-white/50">{badge}</p>
        </div>
      </div>
      <div className="stars-container mb-6 flex">
        {Array.from({ length: rating }).map((_, index) => (
          <LuStar
            className="h-4 w-4 fill-yellow-500 text-yellow-500"
            key={index}
          />
        ))}
      </div>
      <q>{text}</q>
    </div>
  );
}
