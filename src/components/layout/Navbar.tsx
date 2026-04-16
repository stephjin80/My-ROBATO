"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-xl border-b border-cream-100">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="text-xl font-black tracking-tighter text-stone-900">
            ROBATO
          </span>
          <span className="text-[10px] font-bold text-mint-500 uppercase tracking-[0.15em] mt-0.5 bg-mint-50 px-1.5 py-0.5 rounded-full">
            Learn
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "text-stone-900 bg-white shadow-sm"
                      : "text-stone-500 hover:text-stone-800 hover:bg-white/60"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/programs"
            className="px-5 py-2 text-sm font-semibold text-white bg-mint-500 rounded-full hover:bg-mint-600 transition-colors shadow-sm shadow-mint-200"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-white/60"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5 rounded-full" />
          <span className="block w-5 h-0.5 bg-current mb-1.5 rounded-full" />
          <span className="block w-5 h-0.5 bg-current rounded-full" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-xl border-t border-cream-100 px-6 py-4 flex flex-col gap-1.5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-600 hover:bg-white/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/programs"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-2.5 text-sm font-semibold text-white bg-mint-500 rounded-xl text-center"
          >
            Get started
          </Link>
        </div>
      )}
    </header>
  );
}
