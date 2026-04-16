import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  {
    bg: "bg-mint-50",
    icon: "bg-mint-500",
    emoji: "✦",
    title: "Expert curriculum",
    description:
      "Every lesson is crafted by certified educators and child development specialists.",
  },
  {
    bg: "bg-coral-50",
    icon: "bg-coral-400",
    emoji: "◈",
    title: "Adaptive learning",
    description:
      "Content adjusts to each child's pace, keeping them challenged without frustration.",
  },
  {
    bg: "bg-mint-50",
    icon: "bg-mint-500",
    emoji: "◎",
    title: "Progress you can see",
    description:
      "Clear milestones and parent dashboards keep the whole family in the loop.",
  },
  {
    bg: "bg-coral-50",
    icon: "bg-coral-400",
    emoji: "⬡",
    title: "Safe by design",
    description:
      "A child-first platform with no ads, no distractions, and full parental oversight.",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-cream py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Why ROBATO"
          title="Built differently, from the ground up."
          subtitle="We started with one question: what does a truly great learning experience feel like for a child?"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className={`${v.bg} rounded-3xl p-7 group hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className={`w-10 h-10 rounded-2xl ${v.icon} flex items-center justify-center text-white text-base font-bold mb-6`}>
                {v.emoji}
              </div>
              <h3 className="text-base font-black text-stone-900 tracking-tight mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
