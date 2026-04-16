import { FOUR_LAYERS } from "@/lib/constants";
import Link from "next/link";

const colorMap: Record<string, { glow: string; text: string; border: string; badge: string }> = {
  mint:  { glow: "bg-mint-400/10",  text: "text-mint-400",  border: "border-mint-400/20",  badge: "bg-mint-400/15 text-mint-300" },
  gold:  { glow: "bg-gold-400/10",  text: "text-gold-300",  border: "border-gold-300/20",  badge: "bg-gold-400/15 text-gold-300" },
  coral: { glow: "bg-coral-400/10", text: "text-coral-300", border: "border-coral-300/20", badge: "bg-coral-400/15 text-coral-300" },
};

export default function LayeredSystem() {
  return (
    <section className="relative bg-navy-900 py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-mint-400/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold-400/4 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400 mb-4">
            The system
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-5">
            One journey. Four layers.
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            My ROBATO is not one thing. It is four deeply interconnected systems working together to create a complete learning experience.
          </p>
        </div>

        {/* Layer cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FOUR_LAYERS.map((layer) => {
            const c = colorMap[layer.color];
            return (
              <div
                key={layer.number}
                className={`rounded-3xl border ${c.border} bg-white/4 backdrop-blur-sm p-7 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300`}
              >
                {/* Number badge */}
                <span className={`self-start text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${c.badge}`}>
                  {layer.number}
                </span>

                {/* Name */}
                <div>
                  <h3 className={`text-xl font-black tracking-tight mb-1 ${c.text}`}>
                    {layer.name}
                  </h3>
                  <p className="text-xs font-semibold text-white/30 tracking-wide">
                    {layer.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-white/45 leading-relaxed flex-1">
                  {layer.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA link */}
        <div className="text-center mt-12">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/40 hover:text-white transition-colors"
          >
            Explore the full system →
          </Link>
        </div>
      </div>
    </section>
  );
}
