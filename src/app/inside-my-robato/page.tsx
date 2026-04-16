import Link from "next/link";
import { ENGINE_SYSTEMS, STORY_WORLDS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inside My ROBATO — My ROBATO",
  description:
    "Explore the full My ROBATO product experience — personalized onboarding, story worlds, ROBATO care, evolving companions, and the AI engine behind it all.",
};

const onboardingSteps = [
  { n: "01", title: "Tell us about your child", detail: "Age, interests, how they love to learn — we listen carefully before we build anything." },
  { n: "02", title: "A gentle placement experience", detail: "Not a test. A conversation. ROBATO guides your child through challenges that reveal their true level." },
  { n: "03", title: "A curriculum is built for them", detail: "Within minutes, a personalized learning path is ready — shaped around who your child actually is." },
  { n: "04", title: "The journey begins", detail: "Your child enters their first story world, meets ROBATO, and starts the adventure that was made for them." },
];

const careInteractions = [
  { icon: "🔋", label: "Recharge ROBATO",    desc: "Help ROBATO rest and restore energy before the next learning session begins." },
  { icon: "🫧", label: "Clean and care",     desc: "Simple care rituals that build a sense of responsibility and daily return habit." },
  { icon: "💬", label: "Talk to ROBATO",     desc: "ROBATO listens, responds, and remembers — building a real conversational bond." },
  { icon: "🎁", label: "Unlock surprises",   desc: "Consistent care unlocks special ROBATO responses, stories, and emotional moments." },
];

const rewardFeatures = [
  { icon: "📝", label: "Notes",              desc: "A virtual currency earned through learning — spendable on ROBATO upgrades and world unlocks." },
  { icon: "🎨", label: "Customization",      desc: "As children earn and grow, ROBATO's appearance, accessories, and personality evolve." },
  { icon: "🏆", label: "Milestone Unlocks",  desc: "Reaching learning milestones opens new story chapters, world zones, and ROBATO capabilities." },
  { icon: "✨", label: "Prestige Styles",    desc: "Rare ROBATO forms and story outcomes that only the most dedicated learners can discover." },
];

export default function InsideMyRobatoPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[600px] bg-mint-400/7 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-coral-400/5 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral-300 mb-5">
            The experience
          </p>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6">
            Inside
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 via-coral-300 to-gold-300">
              My ROBATO.
            </span>
          </h1>
          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
            A world built entirely around your child. From the moment they arrive, everything — the curriculum, the story, the companion — is shaped just for them.
          </p>
        </div>
      </section>

      {/* ── A. Personalized Start ── */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-500 mb-4">A · Personalized Start</p>
              <h2 className="text-4xl font-black text-stone-900 tracking-tighter leading-tight mb-5">
                From day one, it&apos;s built for your child.
              </h2>
              <p className="text-lg text-stone-500 leading-relaxed mb-5">
                Onboarding in My ROBATO is not a form. It is a carefully designed experience that listens deeply to your child — their age, their interests, how they think, and what lights them up — before a single lesson is created.
              </p>
              <p className="text-base text-stone-400 leading-relaxed">
                The result is a curriculum that feels uncannily right from the very first session — because it was shaped entirely around who your child actually is.
              </p>
            </div>

            <div className="space-y-4">
              {onboardingSteps.map((s) => (
                <div key={s.n} className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm flex items-start gap-5">
                  <span className="text-xs font-bold text-stone-300 uppercase tracking-widest flex-shrink-0 mt-0.5">{s.n}</span>
                  <div>
                    <h4 className="text-sm font-black text-stone-900 mb-1.5">{s.title}</h4>
                    <p className="text-sm text-stone-400 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── B. Story-Driven Journey ── */}
      <section className="relative bg-navy-900 py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-400/6 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400 mb-4">B · Story-Driven Journey</p>
            <h2 className="text-4xl font-black text-white tracking-tighter leading-tight mb-4">
              Every lesson lives inside a world that matters.
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              My ROBATO wraps all learning inside rich, evolving story worlds. The child is not a student here — they are the protagonist. Every choice they make shapes what happens next.
            </p>
          </div>

          {/* Story worlds */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {STORY_WORLDS.map((w) => (
              <div
                key={w.name}
                className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${w.color} p-8 border border-white/8 hover:-translate-y-1 transition-transform duration-300`}
              >
                <span className="text-4xl mb-5 block">{w.badge}</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 mb-2">{w.theme}</p>
                <h3 className="text-xl font-black text-white mb-3">{w.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{w.description}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold text-white/30 uppercase tracking-widest border border-white/10 rounded-full px-3 py-1">
                  More worlds coming
                </div>
              </div>
            ))}
          </div>

          {/* Story features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Choice-driven paths",    detail: "Children's choices alter story outcomes." },
              { label: "Mission-based learning", detail: "Every lesson is a meaningful mission." },
              { label: "Narrative memory",        detail: "ROBATO remembers every decision." },
              { label: "Personalized endings",   detail: "Each child's story is uniquely theirs." },
            ].map((f) => (
              <div key={f.label} className="bg-white/4 border border-white/8 rounded-2xl p-5 backdrop-blur-sm">
                <h4 className="text-sm font-black text-white mb-1.5">{f.label}</h4>
                <p className="text-xs text-white/35 leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. Interaction With ROBATO ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral-400 mb-4">C · Interaction With ROBATO</p>
              <h2 className="text-4xl font-black text-stone-900 tracking-tighter leading-tight mb-5">
                A companion you take care of.
                <br />One that takes care of you.
              </h2>
              <p className="text-lg text-stone-500 leading-relaxed mb-5">
                The care model inside My ROBATO is one of its most distinctive design choices. Children do not just learn from ROBATO — they care for ROBATO. This relationship of mutual care builds responsibility, emotional intelligence, and the habit of daily return.
              </p>
              <p className="text-base text-stone-400 leading-relaxed">
                Through recharging, cleaning, talking, and supporting their companion, children develop ownership and emotional investment that no curriculum could manufacture alone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {careInteractions.map((c) => (
                <div key={c.label} className="bg-cream rounded-3xl p-6 border border-cream-100 hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-3xl mb-4 block">{c.icon}</span>
                  <h4 className="text-sm font-black text-stone-900 mb-2">{c.label}</h4>
                  <p className="text-sm text-stone-400 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── D. Evolving Companion ── */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-500 mb-4">D · Evolving Companion</p>
            <h2 className="text-4xl font-black text-stone-900 tracking-tighter leading-tight mb-4">
              Growth that you can see — and feel.
            </h2>
            <p className="text-stone-500 text-base leading-relaxed">
              As children learn, earn, and explore, ROBATO evolves with them. This visible progression creates identity, ownership, and a sense of achievement that extends far beyond test scores.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rewardFeatures.map((r) => (
              <div key={r.label} className="bg-white rounded-3xl p-7 border border-stone-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <span className="text-3xl mb-5 block">{r.icon}</span>
                <h4 className="text-base font-black text-stone-900 mb-2">{r.label}</h4>
                <p className="text-sm text-stone-400 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engine Behind ROBATO ── */}
      <section className="relative bg-navy-950 py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-mint-400/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-400 mb-4">
              The engine
            </p>
            <h2 className="text-4xl font-black text-white tracking-tighter leading-tight mb-4">
              The engine behind My ROBATO.
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              What makes the experience feel alive is not magic — it is a set of deeply considered technical and design systems working together beneath the surface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ENGINE_SYSTEMS.map((e, i) => (
              <div
                key={e.title}
                className="bg-white/4 border border-white/8 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/6 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-2xl bg-mint-500/20 border border-mint-400/20 flex items-center justify-center text-mint-400 text-base font-bold flex-shrink-0">
                    {e.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-2">System 0{i + 1}</p>
                    <h3 className="text-lg font-black text-white tracking-tight mb-2">{e.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{e.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream py-20 border-t border-cream-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-stone-900 tracking-tight mb-4">
            Understand why it all works.
          </h2>
          <p className="text-stone-500 mb-8 leading-relaxed">
            See why My ROBATO outperforms every alternative — from tutoring apps to traditional schooling.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link
              href="/why-my-robato"
              className="px-6 py-3 text-sm font-bold text-white bg-mint-500 rounded-full hover:bg-mint-600 transition-colors shadow-sm"
            >
              Why My ROBATO
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-semibold text-stone-700 bg-white border border-stone-200 rounded-full hover:border-stone-300 hover:bg-stone-50 transition-all shadow-sm"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
