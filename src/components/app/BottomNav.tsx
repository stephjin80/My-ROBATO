"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/dashboard", label: "Home",    icon: "🏠" },
  { href: "/journey",   label: "Journey", icon: "🗺️" },
  { href: "/robato",    label: "ROBATO",  icon: "🤖" },
  { href: "/rewards",   label: "Rewards", icon: "⭐" },
  { href: "/parent",    label: "Parent",  icon: "👤" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-shrink-0 border-t border-white/8 bg-navy-900/95 backdrop-blur-sm">
      <div className="flex">
        {TABS.map((tab) => {
          const active = pathname === tab.href || (tab.href !== "/dashboard" && pathname.startsWith(tab.href));
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 transition-colors ${
                active ? "text-mint-400" : "text-white/30 hover:text-white/60"
              }`}
            >
              <span className="text-[20px] leading-none">{tab.icon}</span>
              <span className={`text-[9px] font-bold uppercase tracking-[0.1em] ${active ? "text-mint-400" : ""}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
