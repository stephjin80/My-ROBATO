const problems = [
  {
    n: "01",
    title: "Too standardized",
    detail:
      "Every child learns differently, yet every child is taught the same way, at the same pace, toward the same test.",
  },
  {
    n: "02",
    title: "Test-driven, not thinking-driven",
    detail:
      "Schools measure knowledge retention. They rarely measure creative thinking, expression, or genuine curiosity.",
  },
  {
    n: "03",
    title: "Impossible to truly personalize",
    detail:
      "Even the best teachers cannot tailor a curriculum to 30 individual students with different minds and motivations.",
  },
  {
    n: "04",
    title: "Low engagement by design",
    detail:
      "Without story, play, and emotional connection, learning becomes a chore. And children who see it as a chore stop growing.",
  },
];

export default function EducationProblem() {
  return (
    <section className="relative bg-navy-950 py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-mint-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-400 mb-4">
            The problem
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-5">
            Education hasn&apos;t kept up
            <br />with the world.
          </h2>
          <p className="text-lg text-white/40 leading-relaxed">
            The way children are taught today was designed for a different era. My ROBATO was built for this one.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((p) => (
            <div
              key={p.n}
              className="bg-white/4 border border-white/8 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/6 transition-colors duration-300"
            >
              <p className="text-xs font-bold text-white/25 uppercase tracking-widest mb-5">{p.n}</p>
              <h3 className="text-xl font-black text-white tracking-tight mb-3">{p.title}</h3>
              <p className="text-white/45 leading-relaxed text-sm">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
