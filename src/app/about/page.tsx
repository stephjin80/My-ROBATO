import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { TEAM } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — ROBATO",
  description:
    "Meet the team behind ROBATO and learn about our mission to bring premium learning to every child.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-stone-50 pt-20 pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
            Our story
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight mb-6">
            We believe every child deserves a great start.
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            ROBATO was founded by educators and parents who knew that the
            learning tools available to most families fell far short of what
            children truly needed. We set out to change that.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
                Mission
              </p>
              <h2 className="text-3xl font-bold text-stone-900 tracking-tight mb-5">
                Learning should feel like discovery, not homework.
              </h2>
              <p className="text-stone-500 leading-relaxed mb-4">
                We design every experience with one guiding belief: curiosity is
                a child&apos;s greatest asset, and it is our job to protect and
                grow it. ROBATO does not chase test scores. We build learners.
              </p>
              <p className="text-stone-500 leading-relaxed">
                Our curriculum is developed by certified educators, reviewed by
                child psychologists, and refined continuously based on how real
                students engage with it.
              </p>
            </div>

            {/* Values list */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  label: "Child-first design",
                  body: "Everything is tested with real kids before it ever reaches families.",
                },
                {
                  label: "Radical clarity",
                  body: "No jargon. Simple progress. Parents always know where their child stands.",
                },
                {
                  label: "Premium, not exclusive",
                  body: "We price fairly and offer financial aid so every family can access our programs.",
                },
              ].map((v) => (
                <div
                  key={v.label}
                  className="rounded-2xl bg-stone-50 border border-stone-100 p-6"
                >
                  <h3 className="text-sm font-semibold text-stone-900 mb-1">
                    {v.label}
                  </h3>
                  <p className="text-sm text-stone-500">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            eyebrow="The team"
            title="People who care deeply"
            subtitle="Our small, focused team combines expertise in education, technology, and design."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm"
              >
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-2xl mb-5">
                  {member.name[0]}
                </div>
                <p className="text-base font-semibold text-stone-900">
                  {member.name}
                </p>
                <p className="text-xs text-indigo-500 font-medium uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 border-t border-stone-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Want to learn more?
          </h2>
          <p className="text-stone-500 mb-8">
            Explore our programs or get in touch — we&apos;d love to hear from
            you.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Button href="/programs">See programs</Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
