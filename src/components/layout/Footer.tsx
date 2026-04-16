import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";

const legal = ["Privacy Policy", "Terms of Service", "Child Safety"];
const company = ["About ROBATO", "How It Works", "Inside My ROBATO", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/40">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-black text-white tracking-tighter">My ROBATO</span>
            </div>
            <p className="text-sm leading-relaxed text-white/40 max-w-xs">
              A personalized AI learning companion for children — combining adaptive curriculum, immersive storytelling, and emotional companionship into one evolving experience.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-mint-400 animate-pulse" />
              <span className="text-xs text-white/30 font-medium">Now welcoming founding families</span>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {legal.map((l) => (
                <li key={l}>
                  <span className="text-sm text-white/40 hover:text-white cursor-default transition-colors">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} My ROBATO. All rights reserved.
          </p>
          <p className="text-xs text-white/15 italic">
            Intelligence meets emotion.
          </p>
        </div>
      </div>
    </footer>
  );
}
