import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote:
      "My daughter was struggling with reading. After three months with ROBATO, she's reading chapter books on her own. I can't believe the change.",
    author: "Sarah M.",
    detail: "Parent of a 7-year-old",
  },
  {
    quote:
      "The lessons are genuinely engaging — my son asks to do them. That alone is worth everything to us.",
    author: "James K.",
    detail: "Parent of a 9-year-old",
  },
  {
    quote:
      "As a teacher, I recommend ROBATO to every parent who asks about supplemental learning. It's the best I've seen.",
    author: "Ms. Rivera",
    detail: "3rd Grade Teacher",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Families love it"
          title="Real stories, real results"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm"
            >
              <p className="text-sm text-stone-600 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-stone-900">
                  {t.author}
                </p>
                <p className="text-xs text-stone-400">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
