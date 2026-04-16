import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-stone-100/80">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`text-center px-6 ${i === 0 ? "pl-0" : ""} ${i === STATS.length - 1 ? "pr-0" : ""}`}>
              <p className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
