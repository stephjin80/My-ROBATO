import { PROGRAMS } from "@/lib/constants";
import ProgramCard from "@/components/ui/ProgramCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function FeaturedPrograms() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Programs"
          title="Something for every learner"
          subtitle="Three thoughtfully designed programs that meet students where they are — and take them further."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROGRAMS.map((program, i) => (
            <ProgramCard key={program.id} program={program} featured={i === 1} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/programs" variant="secondary" size="md">
            View all programs →
          </Button>
        </div>
      </div>
    </section>
  );
}
