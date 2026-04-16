import { SOLUTION_PILLARS } from "@/lib/constants";

const accentMap: Record<string, { bg: string; text: string; dot: string; badge: string }> = {
  mint:  { bg: "bg-mint-500",  text: "text-mint-500",  dot: "bg-mint-100 text-mint-600",  badge: "bg-mint-50 text-mint-600" },
  coral: { bg: "bg-coral-400", text: "text-coral-400", dot: "bg-coral-100 text-coral-500", badge: "bg-coral-50 text-coral-500" },
  gold:  { bg: "bg-gold-400",  text: "text-gold-500",  dot: "bg-gold-100 text-gold-600",   badge: "bg-gold-50 text-gold-600" },
};

export default function SolutionPillars() {
  return (
    <section className="bg-cream py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-500 mb-4">
            The My ROBATO solution
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter leading-tight">
            Built to solve what schools cannot.
          </h2>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOLUTION_PILLARS.map((p) => {
            const a = accentMap[p.accent];
            return (
              <div
                key={p.number}
                className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm flex flex-col gap-6 hover:-translate-y-1.5 transition-transform duration-300"
              >
                {/* Number + icon */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-stone-300 uppercase tracking-widest">{p.number}</span>
                  <div className={`w-11 h-11 rounded-2xl ${a.bg} flex items-center justify-center text-white text-lg font-bold`}>
                    {p.icon}
                  </div>
                </div>

                {/* Body */}
                <div>
                  <h3 className="text-xl font-black text-stone-900 tracking-tight mb-3">{p.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{p.description}</p>
                </div>

                {/* Points */}
                <ul className="space-y-2 mt-auto">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-sm text-stone-600">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${a.dot}`}>
                        ✓
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
