"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isOnDark = pathname === "/" || pathname === "/how-it-works";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        isOnDark
          ? "bg-navy-950/80 border-white/5"
          : "bg-cream/80 border-cream-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-15 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 flex-shrink-0">
          <span className={`text-lg font-black tracking-tighter ${isOnDark ? "text-white" : "text-stone-900"}`}>
            My ROBATO
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-150 whitespace-nowrap ${
                    isOnDark
                      ? isActive
                        ? "text-white bg-white/10"
                        : "text-white/50 hover:text-white hover:bg-white/8"
                      : isActive
                      ? "text-stone-900 bg-white shadow-sm"
                      : "text-stone-500 hover:text-stone-800 hover:bg-white/70"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/contact"
            className={`text-[13px] font-medium transition-colors ${
              isOnDark ? "text-white/50 hover:text-white" : "text-stone-500 hover:text-stone-900"
            }`}
          >
            Sign in
          </Link>
          <Link
            href="/inside-my-robato"
            className="px-4 py-1.5 text-[13px] font-bold text-white bg-mint-500 rounded-full hover:bg-mint-600 transition-colors shadow-sm"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isOnDark ? "text-white/60 hover:bg-white/10" : "text-stone-600 hover:bg-white/60"
          }`}
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
        <div
          className={`lg:hidden border-t px-6 py-4 flex flex-col gap-1 ${
            isOnDark
              ? "bg-navy-900/95 border-white/5"
              : "bg-cream/95 border-cream-100"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === item.href
                  ? isOnDark
                    ? "bg-white/10 text-white"
                    : "bg-white text-stone-900 shadow-sm"
                  : isOnDark
                  ? "text-white/60 hover:bg-white/5"
                  : "text-stone-600 hover:bg-white/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/inside-my-robato"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-2.5 text-sm font-bold text-white bg-mint-500 rounded-xl text-center"
          >
            Get started
          </Link>
        </div>
      )}
    </header>
  );
}
