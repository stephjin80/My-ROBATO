import type { Program } from "@/types";

interface ProgramCardProps {
  program: Program;
  featured?: boolean;
}

export default function ProgramCard({ program, featured }: ProgramCardProps) {
  return (
    <div
      className={`rounded-3xl p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? "bg-stone-900 text-white"
          : "bg-white border border-stone-100 text-stone-900 shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="text-4xl">{program.icon}</span>
        <span
          className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${
            featured
              ? "bg-white/10 text-stone-300"
              : "bg-indigo-50 text-indigo-600"
          }`}
        >
          {program.ageRange}
        </span>
      </div>

      <div>
        <h3
          className={`text-xl font-bold mb-2 ${
            featured ? "text-white" : "text-stone-900"
          }`}
        >
          {program.title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            featured ? "text-stone-400" : "text-stone-500"
          }`}
        >
          {program.description}
        </p>
      </div>

      <ul className="space-y-2">
        {program.features.map((f) => (
          <li
            key={f}
            className={`flex items-center gap-2 text-sm ${
              featured ? "text-stone-300" : "text-stone-600"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                featured ? "bg-indigo-400" : "bg-indigo-500"
              }`}
            />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
