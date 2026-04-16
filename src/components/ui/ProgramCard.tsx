import type { Program } from "@/types";

interface ProgramCardProps {
  program: Program;
  featured?: boolean;
}

export default function ProgramCard({ program, featured }: ProgramCardProps) {
  return (
    <div
      className={`rounded-3xl p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1.5 ${
        featured
          ? "bg-mint-500 text-white shadow-xl shadow-mint-200/60 ring-1 ring-mint-400"
          : "bg-white border border-stone-100 text-stone-900 shadow-sm hover:shadow-md hover:border-stone-200"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="text-4xl">{program.icon}</span>
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full ${
            featured
              ? "bg-white/15 text-white"
              : "bg-mint-50 text-mint-600"
          }`}
        >
          {program.ageRange}
        </span>
      </div>

      <div>
        <h3
          className={`text-xl font-black tracking-tight mb-2.5 ${
            featured ? "text-white" : "text-stone-900"
          }`}
        >
          {program.title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            featured ? "text-white/70" : "text-stone-500"
          }`}
        >
          {program.description}
        </p>
      </div>

      <ul className="space-y-2.5 mt-auto">
        {program.features.map((f) => (
          <li
            key={f}
            className={`flex items-center gap-2.5 text-sm ${
              featured ? "text-white/80" : "text-stone-600"
            }`}
          >
            <span
              className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${
                featured
                  ? "bg-white/20 text-white"
                  : "bg-mint-100 text-mint-600"
              }`}
            >
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
