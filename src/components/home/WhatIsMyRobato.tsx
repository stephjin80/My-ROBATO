const traits = [
  { icon: "◈", color: "bg-mint-50 text-mint-600",  label: "Personalized",   desc: "Adapts to every child's unique mind" },
  { icon: "◎", color: "bg-gold-50 text-gold-500",  label: "Story-Driven",   desc: "Learning wrapped in narrative worlds" },
  { icon: "✦", color: "bg-coral-50 text-coral-500", label: "AI Companion",  desc: "ROBATO evolves with your child" },
  { icon: "⬡", color: "bg-mint-50 text-mint-600",  label: "Safe & Trusted", desc: "Designed with children first" },
];

export default function WhatIsMyRobato() {
  return (
    <section className="bg-cream py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-500 mb-4">
              What is My ROBATO?
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter leading-[1.04] mb-7">
              An AI companion that grows
              as your child grows.
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed mb-5">
              My ROBATO is not a tutoring app. It is not a game. It is the first personalized learning companion built to grow alongside your child — adapting to how they think, what they love, and where they need to grow.
            </p>
            <p className="text-base text-stone-400 leading-relaxed">
              Through a layered system of learning, story, engagement, and companionship, My ROBATO creates an experience that feels less like school — and more like an adventure your child is always excited to return to.
            </p>
          </div>

          {/* Trait cards */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((t) => (
              <div
                key={t.label}
                className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-10 h-10 rounded-2xl ${t.color} flex items-center justify-center text-base font-bold mb-4`}>
                  {t.icon}
                </div>
                <h3 className="text-base font-black text-stone-900 tracking-tight mb-1">{t.label}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
