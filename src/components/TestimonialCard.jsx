import { Star } from 'lucide-react';

function TestimonialCard({ review }) {
  return (
    <article className="min-w-[280px] rounded-xl border border-white/10 bg-[#111214] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:min-w-[340px]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-white">{review.name}</h3>
          <p className="mt-1 text-sm text-[#cfcfd3]">{review.projectType}</p>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8c1a]">{review.date}</span>
      </div>

      <div className="mt-4 flex gap-1">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={index} size={16} fill="#ff8c1a" color="#ff8c1a" />
        ))}
      </div>

      <p className="mt-5 text-sm leading-7 text-[#d1d5db]">“{review.review}”</p>
    </article>
  );
}

export default TestimonialCard;
