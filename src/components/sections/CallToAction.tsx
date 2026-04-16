import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section className="bg-stone-900 py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Ready to unlock your child&apos;s potential?
        </h2>
        <p className="text-stone-400 text-lg mb-10 leading-relaxed">
          Join thousands of families giving their children the gift of a love
          for learning. Start for free — no credit card needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/programs" size="lg" variant="secondary">
            Start for free
          </Button>
          <Button href="/contact" size="lg" className="bg-white/10 text-white hover:bg-white/20 border border-white/20">
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  );
}
