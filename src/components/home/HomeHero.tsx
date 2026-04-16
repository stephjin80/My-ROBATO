import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen bg-navy-950 flex flex-col overflow-hidden pt-15">

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-mint-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-gold-400/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-coral-400/4 rounded-full blur-[80px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── Left: Copy ── */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8 bg-white/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-mint-400 animate-pulse" />
                <span className="text-xs text-white/50 font-medium tracking-wide">
                  Now welcoming founding families
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6">
                Not just learning.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 via-mint-300 to-gold-300">
                  A lifelong companion.
                </span>
              </h1>

              {/* Sub */}
              <p className="text-lg text-white/45 leading-relaxed max-w-lg mb-10">
                My ROBATO is a personalized AI learning companion for children — combining adaptive curriculum, story-driven exploration, and emotional connection into one evolving experience.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-12">
                <Link
                  href="/inside-my-robato"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-bold text-white bg-mint-500 rounded-full hover:bg-mint-600 transition-colors shadow-lg shadow-mint-500/20"
                >
                  Meet ROBATO
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white/70 border border-white/15 rounded-full hover:bg-white/8 hover:text-white transition-all"
                >
                  How it works →
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["#6ECAC1","#F2816A","#B5A4D4","#F9C940","#8DD8D0"].map((c, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-navy-950 flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ backgroundColor: c }}
                    >
                      {["S","J","M","A","R"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-gold-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-white/35">
                    <span className="text-white/60 font-semibold">4.9</span> · Loved by 50,000+ families
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right: Character ── */}
            <div className="relative flex items-center justify-center lg:justify-end">

              {/* Glow halo */}
              <div className="absolute w-[380px] h-[380px] md:w-[460px] md:h-[460px] bg-mint-400/15 rounded-full blur-3xl" />

              {/* Floating card — top left */}
              <div className="absolute top-6 left-0 lg:-left-4 z-20 bg-navy-800/80 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
                <p className="text-[10px] text-white/40 font-semibold uppercase tracking-wider mb-0.5">Active journey</p>
                <p className="text-sm text-white font-bold">Day 47 · Forest World</p>
              </div>

              {/* Floating card — bottom right */}
              <div className="absolute bottom-10 right-0 lg:-right-2 z-20 bg-navy-800/80 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
                <p className="text-[10px] text-white/40 font-semibold uppercase tracking-wider mb-0.5">Latest unlock</p>
                <p className="text-sm text-white font-bold">3 new skills earned ✦</p>
              </div>

              {/* ROBATO character */}
              <div className="relative z-10 w-[300px] h-[330px] md:w-[400px] md:h-[440px]">
                <Image
                  src="/robato-character.png"
                  alt="ROBATO — your child's learning companion"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 flex justify-center pb-10">
        <div className="flex flex-col items-center gap-2 text-white/20">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
