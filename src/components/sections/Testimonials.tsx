import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote:
      "My daughter was struggling with reading. After three months with ROBATO, she's reading chapter books on her own. I can't believe the change.",
    author: "Sarah M.",
    detail: "Parent of a 7-year-old",
    initial: "S",
    color: "#6ECAC1",
  },
  {
    quote:
      "The lessons are genuinely engaging — my son asks to do them every day. That alone is worth everything to us as parents.",
    author: "James K.",
    detail: "Parent of a 9-year-old",
    initial: "J",
    color: "#F2816A",
  },
  {
    quote:
      "As a teacher, I recommend ROBATO to every parent who asks about supplemental learning. It's the best I've seen.",
    author: "Ms. Rivera",
    detail: "3rd Grade Teacher",
    initial: "R",
    color: "#B5A4D4",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Real stories"
          title="Families love ROBATO."
          subtitle="Don't take our word for it — hear from the parents and educators who use it every day."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-coral-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-stone-600 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-stone-50">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900">{t.author}</p>
                  <p className="text-xs text-stone-400">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
