import Image from "next/image";
import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section className="bg-stone-950 overflow-hidden relative">
      {/* Mint glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-mint-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-mint-400 mb-4">
            Start today
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[1.05] mb-6">
            Ready to meet
            <br />
            <span className="text-mint-400">ROBATO?</span>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed mb-10 max-w-lg">
            Join thousands of families giving their children the gift of
            learning they actually enjoy. Start for free — no credit card needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button href="/programs" variant="mint" size="lg">
              Start for free
            </Button>
            <Button href="/contact" variant="dark" size="lg">
              Talk to us
            </Button>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-xs text-stone-600 uppercase tracking-widest">
            No credit card · Cancel anytime · 50,000+ families enrolled
          </p>
        </div>

        {/* ROBATO character — peeking from the right */}
        <div className="relative flex-shrink-0 w-[260px] h-[280px] lg:w-[320px] lg:h-[340px]">
          {/* Soft glow behind character */}
          <div className="absolute inset-0 bg-mint-400/20 rounded-full blur-2xl scale-75 translate-y-8" />
          <Image
            src="/robato-character.png"
            alt="ROBATO character"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
