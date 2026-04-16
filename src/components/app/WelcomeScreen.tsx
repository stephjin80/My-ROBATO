"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { useEffect } from "react";

export default function WelcomeScreen() {
  const { state } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (state.isOnboarded) {
      router.replace("/dashboard");
    }
  }, [state.isOnboarded, router]);

  if (state.isOnboarded) return null;

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center">
      <div className="w-full md:max-w-[430px] md:h-[900px] md:rounded-[44px] md:overflow-hidden md:shadow-2xl md:shadow-black/60 md:border md:border-white/8 bg-navy-900 flex flex-col items-center justify-between px-8 py-16 relative min-h-screen">

        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-mint-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top wordmark */}
        <div className="text-center z-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-mint-400/70 mb-2">
            Welcome to
          </p>
          <h1 className="text-5xl font-black tracking-tighter text-white">
            My ROBATO
          </h1>
        </div>

        {/* Character */}
        <div className="relative w-56 h-64 z-10 flex-shrink-0">
          <div className="absolute inset-0 bg-mint-400/20 rounded-full blur-2xl scale-75 translate-y-8" />
          <Image
            src="/robato-character.png"
            alt="ROBATO"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Bottom content */}
        <div className="z-10 w-full space-y-4 text-center">
          <p className="text-white/40 text-base leading-relaxed px-2">
            Your personal learning companion.<br />
            Adventures, missions, and a robot who grows with you.
          </p>

          <Link
            href="/onboarding"
            className="block w-full py-4 rounded-2xl bg-mint-500 text-white font-bold text-base tracking-wide hover:bg-mint-600 active:scale-95 transition-all shadow-lg shadow-mint-500/25"
          >
            Meet ROBATO
          </Link>

          <p className="text-white/20 text-[11px]">
            Free forever · No account needed
          </p>
        </div>
      </div>
    </div>
  );
}
