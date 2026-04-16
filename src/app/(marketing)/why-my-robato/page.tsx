import Link from "next/link";
import { WHY_PILLARS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why My ROBATO — My ROBATO",
  description:
    "Understand why My ROBATO is the most complete, personalized, and future-ready learning ecosystem available for children today.",
};

const comparisons = [
  { category: "Personalization",    others: "Fixed grade levels, same content for all",         robato: "Unique curriculum built for each individual child" },
  { category: "Engagement",         others: "Passive consumption — watch, read, quiz, repeat",   robato: "Active story-driven journey with meaningful choices" },
  { category: "Retention",          others: "Facts isolated from context, easily forgotten",      robato: "Knowledge embedded in narrative — remembered for life" },
  { category: "Emotional design",   others: "Transactional — children use it, not love it",      robato: "Companion-driven — children form genuine bonds" },
  { category: "Growth over time",   others: "Static product that doesn't evolve with the child", robato: "A living system that deepens as the child grows" },
  { category: "Ecosystem",          others: "Standalone app with limited reach",                  robato: "A full brand world — app, stories, products, devices" },
];

const beyondApp = [
  { icon: "📱", label: "Core App",          desc: "The personalized learning companion — the heart of the My ROBATO world." },
  { icon: "📖", label: "Stories & Books",   desc: "Original ROBATO narratives that extend the learning world into physical and digital reading." },
  { icon: "🎬", label: "Original Content",  desc: "Animated series, micro-content, and episodic media featuring ROBATO and story world characters." },
  { icon: "🧸", label: "Physical Products", desc: "Plush companions, learning tools, and branded merchandise that bring ROBATO into everyday life." },
  { icon: "🤖", label: "Companion Device",  desc: "The long-term vision: a physical ROBATO companion device for the home, powered by My ROBATO AI." },
  { icon: "🏫", label: "School Programs",   desc: "Curriculum integration and teacher tools that bring My ROBATO into classrooms at scale." },
];

export default function WhyMyRobatoPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[500px] bg-mint-400/7 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gold-400/5 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-400 mb-5">
            Why My ROBATO
          </p>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6">
            The most complete
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-gold-300">
              learning ecosystem
            </span>
            <br />ever built for children.
          </h1>
          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
            Not another app. Not another tutoring service. My ROBATO is a category of its own — and here is why.
          </p>
        </div>
      </section>

      {/* ── Four pillars ── */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-500 mb-4">The advantages</p>
            <h2 className="text-4xl font-black text-stone-900 tracking-tighter leading-tight">
              What sets My ROBATO apart.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHY_PILLARS.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm flex gap-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-mint-100 text-mint-600 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-0.5">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black text-stone-900 tracking-tight mb-2">{p.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="relative bg-navy-900 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-mint-400/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400 mb-4">Head to head</p>
            <h2 className="text-4xl font-black text-white tracking-tighter leading-tight">
              Others vs. My ROBATO.
            </h2>
          </div>

          {/* Table */}
          <div className="rounded-3xl border border-white/8 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-white/5 px-8 py-4">
              <p className="text-xs font-bold text-white/30 uppercase tracking-wider">Category</p>
              <p className="text-xs font-bold text-white/30 uppercase tracking-wider">Others</p>
              <p className="text-xs font-bold text-mint-400 uppercase tracking-wider">My ROBATO</p>
            </div>

            {comparisons.map((c, i) => (
              <div
                key={c.category}
                className={`grid grid-cols-3 px-8 py-5 gap-4 border-t border-white/5 ${i % 2 === 0 ? "" : "bg-white/2"}`}
              >
                <p className="text-sm font-bold text-white/50">{c.category}</p>
                <p className="text-sm text-white/30 leading-relaxed">{c.others}</p>
                <p className="text-sm text-mint-300 leading-relaxed font-medium">{c.robato}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beyond the App ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral-400 mb-4">The full vision</p>
            <h2 className="text-4xl font-black text-stone-900 tracking-tighter leading-tight mb-4">
              My ROBATO extends far beyond the screen.
            </h2>
            <p className="text-stone-500 text-base leading-relaxed">
              The app is the beginning. My ROBATO is being built as a complete brand ecosystem — designed to touch every part of a child's world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {beyondApp.map((b) => (
              <div key={b.label} className="bg-cream rounded-3xl p-7 border border-cream-100 hover:-translate-y-1 transition-transform duration-300">
                <span className="text-3xl mb-5 block">{b.icon}</span>
                <h4 className="text-base font-black text-stone-900 mb-2">{b.label}</h4>
                <p className="text-sm text-stone-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing statement ── */}
      <section className="relative bg-navy-950 py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-mint-400/6 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-6">
            My ROBATO is not competing with other apps.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-gold-300">
              It is building a new category.
            </span>
          </h2>
          <p className="text-xl text-white/40 leading-relaxed mb-12 max-w-2xl mx-auto">
            A personalized learning companion. A story world. An evolving ecosystem. A companion that grows alongside your child — from age 5 to 12 and beyond.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link
              href="/contact"
              className="px-7 py-3.5 text-[15px] font-bold text-white bg-mint-500 rounded-full hover:bg-mint-600 transition-colors shadow-lg shadow-mint-500/20"
            >
              Partner with us
            </Link>
            <Link
              href="/inside-my-robato"
              className="px-7 py-3.5 text-[15px] font-semibold text-white/60 border border-white/15 rounded-full hover:bg-white/8 hover:text-white transition-all"
            >
              See the experience
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
