import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  {
    icon: "✦",
    title: "Expert curriculum",
    description:
      "Every lesson is crafted by certified educators and child development specialists.",
  },
  {
    icon: "◈",
    title: "Adaptive learning",
    description:
      "Content adjusts to each child's pace, keeping them challenged without frustration.",
  },
  {
    icon: "◎",
    title: "Progress you can see",
    description:
      "Clear milestones and parent dashboards keep the whole family in the loop.",
  },
  {
    icon: "⬡",
    title: "Safe by design",
    description:
      "A child-first platform with no ads, no distractions, and full parental oversight.",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Why ROBATO"
          title="Built differently, from the ground up"
          subtitle="We started with one question: what does a truly great learning experience feel like for a child?"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title} className="group">
              <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-700 text-lg font-bold mb-5 group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors">
                {v.icon}
              </div>
              <h3 className="text-base font-semibold text-stone-900 mb-2">
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
