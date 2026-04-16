import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ROBATO — My ROBATO",
  description:
    "Meet ROBATO — the AI learning companion where intelligence meets emotion. Learn the story, philosophy, and vision behind the My ROBATO ecosystem.",
};

const brandPrinciples = [
  {
    icon: "◎",
    title: "Intelligence meets emotion",
    description:
      "ROBATO is not a tool that delivers content. ROBATO is a companion that understands, responds, and grows — bridging the gap between smart technology and genuine human connection.",
  },
  {
    icon: "✦",
    title: "The child is the story",
    description:
      "In every interaction, ROBATO places the child at the center of the narrative. Their choices shape the journey. Their growth defines the outcome. Their identity is the IP.",
  },
  {
    icon: "◈",
    title: "A companion, not a product",
    description:
      "Products are used and put down. Companions are returned to. ROBATO is designed to be the kind of presence a child looks forward to — every single day.",
  },
  {
    icon: "⬡",
    title: "Built to last a childhood",
    description:
      "ROBATO does not expire after one grade level. The system, the character, and the relationship all evolve as the child grows — from age 5 to 12 and beyond.",
  },
];

const ecosystem = [
  { icon: "📱", label: "Learning App",       desc: "The core personalized learning experience" },
  { icon: "📖", label: "Stories & Content",  desc: "Books, episodes, and narrative worlds" },
  { icon: "🧸", label: "Merchandise",        desc: "Physical companions and learning tools" },
  { icon: "🤖", label: "Companion Device",   desc: "The future: ROBATO as a real-world robot" },
  { icon: "🏫", label: "School Integration", desc: "Classroom and curriculum partnerships" },
  { icon: "🌐", label: "Global Community",   desc: "A connected world of My ROBATO families" },
];

export default function AboutRobatoPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy-950 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mint-400/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400/6 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-400 mb-5">
                About ROBATO
              </p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6">
                Intelligence
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-gold-300">
                  meets emotion.
                </span>
              </h1>
              <p className="text-xl text-white/45 leading-relaxed max-w-lg">
                ROBATO is more than a mascot. More than a character. ROBATO is the central IP of an entire learning ecosystem — and the most important companion your child will ever have in their education.
              </p>
            </div>

            {/* Character */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute w-[380px] h-[380px] bg-mint-400/15 rounded-full blur-3xl" />
              <div className="relative z-10 w-[300px] h-[330px] md:w-[380px] md:h-[420px]">
                <Image
                  src="/robato-character.png"
                  alt="ROBATO character"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Name ── */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-500 mb-4">
                The name
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter leading-tight mb-6">
                Robot + Rubato<br />= ROBATO
              </h2>
              <p className="text-lg text-stone-500 leading-relaxed mb-5">
                <em>Rubato</em> is a musical term meaning &ldquo;robbed time&rdquo; — the expressive freedom a performer takes to slow down, linger, rush forward, and breathe life into a piece of music. It is the opposite of mechanical. It is emotion applied to structure.
              </p>
              <p className="text-base text-stone-400 leading-relaxed">
                That tension — between the precision of a robot and the expressiveness of rubato — is exactly what My ROBATO embodies. A system with the rigor of technology and the warmth of a true companion.
              </p>
            </div>

            {/* Quote card */}
            <div className="bg-navy-900 rounded-3xl p-10 border border-white/8">
              <p className="text-3xl md:text-4xl font-black text-white tracking-tight leading-snug mb-6">
                &ldquo;Where structure meets soul, learning becomes something a child carries forever.&rdquo;
              </p>
              <p className="text-sm text-white/30 font-medium uppercase tracking-widest">
                The ROBATO Philosophy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Principles ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral-400 mb-4">
              Brand philosophy
            </p>
            <h2 className="text-4xl font-black text-stone-900 tracking-tighter leading-tight">
              How ROBATO is different from everything else.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {brandPrinciples.map((p) => (
              <div
                key={p.title}
                className="bg-cream rounded-3xl p-8 border border-cream-100 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-mint-100 text-mint-600 flex items-center justify-center text-base font-bold mb-5">
                  {p.icon}
                </div>
                <h3 className="text-lg font-black text-stone-900 tracking-tight mb-3">{p.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Ecosystem ── */}
      <section className="relative bg-navy-950 py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-mint-400/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400 mb-4">
              The ecosystem
            </p>
            <h2 className="text-4xl font-black text-white tracking-tighter leading-tight mb-4">
              ROBATO extends far beyond an app.
            </h2>
            <p className="text-white/40 text-lg leading-relaxed">
              My ROBATO is the beginning of a complete brand world — connecting learning, story, physical products, and future companion technology.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {ecosystem.map((e) => (
              <div
                key={e.label}
                className="bg-white/4 border border-white/8 rounded-3xl p-7 backdrop-blur-sm hover:bg-white/6 transition-colors"
              >
                <span className="text-3xl mb-4 block">{e.icon}</span>
                <h3 className="text-base font-black text-white mb-1.5">{e.label}</h3>
                <p className="text-sm text-white/40">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream py-20 border-t border-cream-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-stone-900 tracking-tight mb-4">
            Explore what My ROBATO can do.
          </h2>
          <p className="text-stone-500 mb-8 leading-relaxed">
            See the four-layer system, the product experience, and why My ROBATO is the learning companion every child deserves.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link
              href="/how-it-works"
              className="px-6 py-3 text-sm font-bold text-white bg-mint-500 rounded-full hover:bg-mint-600 transition-colors shadow-sm"
            >
              How it works
            </Link>
            <Link
              href="/inside-my-robato"
              className="px-6 py-3 text-sm font-semibold text-stone-700 bg-white border border-stone-200 rounded-full hover:border-stone-300 hover:bg-stone-50 transition-all shadow-sm"
            >
              Inside My ROBATO
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
