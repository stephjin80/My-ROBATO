import Image from "next/image";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      {/* Glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-mint-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-gold-400/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-400 mb-4">
              Begin the journey
            </p>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-white tracking-tighter leading-[0.97] mb-6">
              Ready to meet
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-gold-300">
                ROBATO?
              </span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed max-w-lg mb-10">
              Join thousands of families giving their children the gift of learning they actually enjoy. Start for free — no credit card, no commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Link
                href="/inside-my-robato"
                className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-bold text-white bg-mint-500 rounded-full hover:bg-mint-600 transition-colors shadow-lg shadow-mint-500/20"
              >
                Start for free
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold text-white/60 border border-white/15 rounded-full hover:bg-white/8 hover:text-white transition-all"
              >
                Talk to us
              </Link>
            </div>

            {/* Trust line */}
            <p className="text-[11px] text-white/20 uppercase tracking-[0.2em]">
              No credit card · Cancel anytime · 50,000+ families enrolled
            </p>
          </div>

          {/* Character */}
          <div className="relative flex-shrink-0 w-[260px] h-[290px] lg:w-[320px] lg:h-[360px]">
            <div className="absolute inset-0 bg-mint-400/15 rounded-full blur-3xl scale-90 translate-y-6" />
            <Image
              src="/robato-character.png"
              alt="ROBATO character"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
