import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-mint-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-coral-50/80 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col items-start">

            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-mint-100 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-400 animate-pulse" />
              <span className="text-xs font-semibold text-stone-600">
                Now enrolling · 50K+ families worldwide
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-stone-900 tracking-tighter leading-[1.0] mb-6">
              The learning
              <br />
              companion kids
              <br />
              <span className="text-mint-500">actually love.</span>
            </h1>

            {/* Sub */}
            <p className="text-lg text-stone-500 leading-relaxed mb-10 max-w-lg">
              ROBATO is a premium learning companion for elementary students —
              expert curriculum, adaptive tools, and a little robot friend
              who makes every lesson an adventure.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Button href="/programs" variant="mint" size="lg">
                Start learning free
              </Button>
              <Button href="/about" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              {/* Avatar stack */}
              <div className="flex -space-x-2.5">
                {["#6ECAC1", "#F2816A", "#A8D5A2", "#F7C59F", "#B5A4D4"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-cream flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: color }}
                  >
                    {["S", "J", "M", "A", "R"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3 h-3 text-coral-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-stone-500">
                  <span className="font-semibold text-stone-700">4.9/5</span> from 8,400+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Character ── */}
          <div className="relative flex items-center justify-center lg:justify-end">

            {/* Glow backdrop */}
            <div className="absolute w-[420px] h-[420px] bg-mint-100 rounded-full blur-2xl opacity-70" />

            {/* Floating card — top left */}
            <div className="absolute top-4 left-0 lg:-left-6 z-20 bg-white rounded-2xl shadow-lg border border-stone-50 px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-coral-50 flex items-center justify-center text-lg">
                ⭐
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-400">Parent rating</p>
                <p className="text-sm font-black text-stone-900">4.9 / 5.0</p>
              </div>
            </div>

            {/* Floating card — bottom right */}
            <div className="absolute bottom-8 right-0 lg:-right-4 z-20 bg-white rounded-2xl shadow-lg border border-stone-50 px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-mint-50 flex items-center justify-center text-lg">
                📚
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-400">Learning modules</p>
                <p className="text-sm font-black text-stone-900">120+ lessons</p>
              </div>
            </div>

            {/* Floating badge — right middle */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-8 z-20 bg-mint-500 text-white rounded-2xl shadow-lg px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">Countries</p>
              <p className="text-lg font-black">30+</p>
            </div>

            {/* Character image */}
            <div className="relative z-10 w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
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
    </section>
  );
}
