import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-stone-50 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium text-stone-600">
            Now enrolling for 2025–2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-stone-900 tracking-tighter leading-[1.05] mb-6">
          Learning that
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500">
            inspires every child.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed mb-10">
          ROBATO is a premium learning companion for elementary students —
          combining expert curriculum, interactive tools, and a love of
          discovery into one beautiful experience.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/programs" size="lg">
            Explore programs
          </Button>
          <Button href="/about" variant="secondary" size="lg">
            Our story
          </Button>
        </div>

        {/* Social proof */}
        <p className="mt-12 text-xs text-stone-400 uppercase tracking-widest font-medium">
          Trusted by 50,000+ families in 30+ countries
        </p>
      </div>
    </section>
  );
}
