import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-stone-100">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-stone-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
