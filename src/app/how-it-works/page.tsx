import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — My ROBATO",
  description:
    "Explore My ROBATO's four-layer learning system: Learning, Story, Engagement, and Companion — working together to create a complete, personalized experience.",
};

const layers = [
  {
    number: "01",
    name: "Learning Layer",
    tagline: "Structured. Adaptive. Personal.",
    color: { glow: "bg-mint-400", text: "text-mint-400", border: "border-mint-400/20", badge: "bg-mint-400/15 text-mint-300", icon: "bg-mint-500" },
    headline: "A curriculum built for one child — yours.",
    description:
      "At the foundation of My ROBATO is a rigorous but deeply flexible learning system. It does not assign content by grade or age alone. It maps each child's existing skills across thinking, expression, mathematics, language, and creativity — then builds a unique pathway forward.",
    pillars: [
      { label: "Skill mapping",        detail: "Every child starts with an assessment that reveals their actual level, not their assumed grade." },
      { label: "Adaptive sequencing",  detail: "Lessons are ordered and paced based on each child's demonstrated mastery, not a fixed schedule." },
      { label: "Multi-subject design", detail: "Content spans language, math, science, and creative domains — all interconnected through the story world." },
      { label: "Expression focus",     detail: "My ROBATO teaches children not just to know — but to think, create, and articulate." },
    ],
  },
  {
    number: "02",
    name: "Story Layer",
    tagline: "Context. Meaning. Stakes.",
    color: { glow: "bg-gold-400", text: "text-gold-300", border: "border-gold-300/20", badge: "bg-gold-400/15 text-gold-200", icon: "bg-gold-400" },
    headline: "Learning lives inside a world that matters.",
    description:
      "Isolated facts are forgotten. Stories are remembered. The Story Layer wraps every lesson inside a living narrative world — where the child's learning choices shape what happens next, and where every piece of knowledge has a reason to exist.",
    pillars: [
      { label: "Narrative worlds",    detail: "Immersive environments — Forest, Lab, Space, Ocean — each with unique characters, conflicts, and lore." },
      { label: "Choice-driven paths", detail: "Children make meaningful choices that alter their story journey — creating genuine ownership of the experience." },
      { label: "Mission-based goals", detail: "Each lesson is framed as a mission with narrative stakes — making completion feel like victory, not obligation." },
      { label: "Personalized outcomes", detail: "Story outcomes reflect the child's unique choices, creating a truly individual narrative that they can revisit and share." },
    ],
  },
  {
    number: "03",
    name: "Engagement Layer",
    tagline: "Focus. Motivation. Return.",
    color: { glow: "bg-coral-400", text: "text-coral-300", border: "border-coral-300/20", badge: "bg-coral-400/15 text-coral-200", icon: "bg-coral-400" },
    headline: "Children come back because they want to.",
    description:
      "Engagement is not a trick. It is a design discipline. The Engagement Layer is a carefully constructed system of meaningful rewards, evolving challenges, and daily rituals that create the habits of a lifelong learner — without the hollow mechanics of typical gamification.",
    pillars: [
      { label: "Meaningful rewards",  detail: "Every reward reflects real learning achievement — not just time spent. Children earn because they grew." },
      { label: "Care routines",       detail: "Daily rituals with ROBATO create rhythm and habit — a gentle structure that children begin to rely on." },
      { label: "Progress visibility", detail: "Children and parents can always see where growth is happening — building confidence through evidence." },
      { label: "Streak mechanics",    detail: "Consistency is celebrated and gently encouraged, building the daily learning habit from the inside out." },
    ],
  },
  {
    number: "04",
    name: "Companion Layer",
    tagline: "Personalized. Emotional. Evolving.",
    color: { glow: "bg-mint-400", text: "text-mint-400", border: "border-mint-400/20", badge: "bg-mint-400/15 text-mint-300", icon: "bg-mint-500" },
    headline: "ROBATO knows your child — and grows with them.",
    description:
      "The Companion Layer is what makes My ROBATO fundamentally different from every other learning platform. ROBATO is not a static character. ROBATO is an AI-powered companion that learns from the child, remembers their journey, celebrates their victories, and shows up differently for every single user.",
    pillars: [
      { label: "Adaptive personality", detail: "ROBATO's communication style, tone, and encouragement style adapt to match each child's personality and emotional state." },
      { label: "Longitudinal memory",  detail: "ROBATO remembers what the child has done, learned, and experienced — building a continuous, personal relationship over time." },
      { label: "Emotional attunement", detail: "When a child struggles, ROBATO responds with patience. When they succeed, ROBATO celebrates with genuine warmth." },
      { label: "Companion evolution",  detail: "As the child grows and earns, ROBATO evolves too — unlocking new looks, voices, and capabilities that deepen the bond." },
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-gold-400/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-mint-400/6 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400 mb-5">
            The system
          </p>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6">
            Four layers.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-gold-300">
              One journey.
            </span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
            My ROBATO is not one product. It is four deeply interconnected systems — each essential, each amplifying the others — designed to create the complete learning experience your child deserves.
          </p>

          {/* Layer nav pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {layers.map((l) => (
              <span
                key={l.number}
                className={`text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full border ${l.color.border} ${l.color.badge}`}
              >
                {l.number} {l.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Layer sections ── */}
      {layers.map((layer, i) => (
        <section
          key={layer.number}
          className={`py-24 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>

              {/* Copy */}
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full ${layer.color.badge}`}>
                    {layer.number}
                  </span>
                  <span className="text-xs text-stone-400 font-medium">{layer.tagline}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tighter leading-tight mb-4">
                  {layer.name}
                </h2>
                <p className={`text-xl font-bold tracking-tight mb-5 ${layer.color.text.replace("text-mint-400","text-mint-600").replace("text-gold-300","text-gold-500").replace("text-coral-300","text-coral-500")}`}>
                  {layer.headline}
                </p>
                <p className="text-base text-stone-500 leading-relaxed">
                  {layer.description}
                </p>
              </div>

              {/* Pillars */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${i % 2 !== 0 ? "lg:col-start-1" : ""}`}>
                {layer.pillars.map((p) => (
                  <div
                    key={p.label}
                    className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    <div className={`w-8 h-8 rounded-xl ${layer.color.icon} flex items-center justify-center text-white text-xs font-bold mb-4`}>
                      ✦
                    </div>
                    <h4 className="text-sm font-black text-stone-900 mb-2">{p.label}</h4>
                    <p className="text-xs text-stone-500 leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">
            See it all in action.
          </h2>
          <p className="text-white/40 mb-8 leading-relaxed">
            Explore the full product experience — from onboarding to story worlds to ROBATO's evolving companion system.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link
              href="/inside-my-robato"
              className="px-6 py-3 text-sm font-bold text-white bg-mint-500 rounded-full hover:bg-mint-600 transition-colors"
            >
              Inside My ROBATO
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-semibold text-white/50 border border-white/15 rounded-full hover:bg-white/8 hover:text-white transition-all"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
