import ProgramCard from "@/components/ui/ProgramCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { PROGRAMS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs — ROBATO",
  description:
    "Explore ROBATO's three signature learning programs designed for students ages 5 to 12.",
};

const faqs = [
  {
    q: "How does ROBATO track my child's progress?",
    a: "Each student gets a personal learning profile. You'll receive weekly summaries and can log in any time to see completed milestones, areas for growth, and upcoming lessons.",
  },
  {
    q: "Can my child switch programs later?",
    a: "Absolutely. Programs are not rigid levels — they are starting points. Our team will help you reassess and move your child to the right fit at any time.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. Every family gets 14 days of full access, no credit card required. We believe in letting the product speak for itself.",
  },
  {
    q: "How many hours per week should my child use ROBATO?",
    a: "We recommend 20–30 minutes per day, 4–5 days a week. Short, consistent sessions produce better long-term retention than marathon study sessions.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-stone-50 pt-20 pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
            Programs
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight mb-6">
            Find the right program for your child.
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Three thoughtfully designed learning paths, each tailored to a
            specific age group and set of developmental goals.
          </p>
        </div>
      </section>

      {/* Programs grid */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROGRAMS.map((program, i) => (
              <ProgramCard key={program.id} program={program} featured={i === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            eyebrow="How it works"
            title="Getting started is simple"
            subtitle="From sign-up to first lesson in under five minutes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create an account",
                body: "Sign up for free and tell us a little about your child — their age, interests, and any learning goals.",
              },
              {
                step: "02",
                title: "Get matched",
                body: "Our brief placement assessment selects the best starting program and customizes the first week of lessons.",
              },
              {
                step: "03",
                title: "Start learning",
                body: "Your child dives into interactive lessons. You receive progress updates. Everyone wins.",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <span className="text-5xl font-black text-stone-100 select-none">
                  {s.step}
                </span>
                <div className="-mt-4">
                  <h3 className="text-base font-semibold text-stone-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
          />
          <div className="divide-y divide-stone-100">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-sm font-semibold text-stone-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start your free 14-day trial today.
          </h2>
          <p className="text-stone-400 mb-8 text-sm">
            No credit card. No commitment. Just great learning.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get started free
          </Button>
        </div>
      </section>
    </>
  );
}
