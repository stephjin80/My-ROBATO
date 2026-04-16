const insights = [
  {
    stat: "85%",
    accent: "text-mint-500",
    label: "of core brain architecture forms before age 12",
    detail:
      "The foundation for learning, thinking, and emotional intelligence is laid in childhood — not in high school or college.",
  },
  {
    stat: "3×",
    accent: "text-gold-400",
    label: "more effective when learning carries emotional meaning",
    detail:
      "Children retain knowledge longer and apply it more creatively when what they learn connects to something they care about.",
  },
  {
    stat: "92%",
    accent: "text-coral-400",
    label: "of parents feel current tools don't fit their child",
    detail:
      "One-size-fits-all education leaves most children either unchallenged or quietly left behind. My ROBATO was built to change that.",
  },
];

export default function FoundationalYears() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral-400 mb-4">
            Why it begins in childhood
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-stone-900 tracking-tighter leading-tight">
            &ldquo;The most important years of learning are the ones most often taken for granted.&rdquo;
          </h2>
        </div>

        {/* Insight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((ins) => (
            <div
              key={ins.stat}
              className="rounded-3xl bg-cream border border-cream-100 p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <p className={`text-6xl font-black tracking-tighter mb-4 ${ins.accent}`}>
                {ins.stat}
              </p>
              <p className="text-base font-bold text-stone-800 leading-tight mb-3">
                {ins.label}
              </p>
              <p className="text-sm text-stone-500 leading-relaxed">{ins.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
