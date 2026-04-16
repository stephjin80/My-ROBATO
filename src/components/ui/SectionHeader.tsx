interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className={`text-xs font-bold uppercase tracking-[0.15em] mb-3 ${light ? "text-mint-300" : "text-mint-500"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-black tracking-tighter leading-[1.08] ${light ? "text-white" : "text-stone-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${light ? "text-white/60" : "text-stone-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
