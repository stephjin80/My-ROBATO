import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">ROBATO</span>
              <span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">
                Learn
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-500">
              A premium learning companion built to help elementary students
              grow with curiosity, confidence, and joy.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Future links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="cursor-default hover:text-white transition-colors">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">
                  Support
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-600">
            © {new Date().getFullYear()} ROBATO. All rights reserved.
          </p>
          <p className="text-xs text-stone-700">
            Designed with care for young minds.
          </p>
        </div>
      </div>
    </footer>
  );
}
