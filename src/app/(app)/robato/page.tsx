"use client";
import { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";

const CARE_ACTIONS = [
  {
    id: "recharge" as const,
    label: "Recharge",
    emoji: "⚡",
    description: "Power up ROBATO's energy cells",
    color: "border-mint-400/30 bg-mint-400/10 hover:bg-mint-400/15",
    activeColor: "border-mint-400 bg-mint-400/25",
    stat: "energy",
  },
  {
    id: "clean" as const,
    label: "Polish",
    emoji: "✨",
    description: "Clean and shine ROBATO's shell",
    color: "border-gold-400/30 bg-gold-400/8 hover:bg-gold-400/12",
    activeColor: "border-gold-400 bg-gold-400/20",
    stat: "clean",
  },
  {
    id: "encourage" as const,
    label: "Encourage",
    emoji: "💛",
    description: "Give ROBATO some love",
    color: "border-coral-400/30 bg-coral-400/8 hover:bg-coral-400/12",
    activeColor: "border-coral-400 bg-coral-400/20",
    stat: "happiness",
  },
];

function StatBar({ label, value, color, emoji }: { label: string; value: number; color: string; emoji: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-white/70 flex items-center gap-1.5">
          <span>{emoji}</span> {label}
        </span>
        <span className="font-black text-white">{value}%</span>
      </div>
      <div className="h-2.5 bg-white/8 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function RobatoPage() {
  const { state, careForRobato } = useApp();
  const { robato, equippedAccessory } = state;
  const [justCared, setJustCared] = useState<string | null>(null);

  function handleCare(action: "recharge" | "clean" | "encourage") {
    careForRobato(action);
    setJustCared(action);
    setTimeout(() => setJustCared(null), 1200);
  }

  const mood = (() => {
    const avg = (robato.energy + robato.happiness + robato.clean) / 3;
    if (avg >= 75) return { text: "Feeling great!", emoji: "😄", color: "text-mint-400" };
    if (avg >= 50) return { text: "Doing okay",     emoji: "🙂", color: "text-gold-300" };
    if (avg >= 25) return { text: "Needs care…",    emoji: "😔", color: "text-coral-300" };
    return           { text: "Please help me!",     emoji: "😟", color: "text-coral-400" };
  })();

  return (
    <div className="min-h-full bg-navy-900 text-white">
      <div className="px-6 pt-12 pb-4">
        <p className="text-white/40 text-sm mb-1">Your companion</p>
        <h1 className="text-2xl font-black tracking-tight">ROBATO</h1>
      </div>

      <div className="px-6 pb-8 space-y-5">

        {/* Character display */}
        <div className="rounded-3xl bg-gradient-to-br from-mint-900/30 to-navy-950 border border-mint-400/15 p-6 flex flex-col items-center">
          <div className="relative w-44 h-52 mb-4">
            <div className="absolute inset-0 bg-mint-400/20 rounded-full blur-3xl scale-90 translate-y-6" />
            <Image src="/robato-character.png" alt="ROBATO" fill className="object-contain drop-shadow-2xl" priority />
            {justCared && (
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 animate-bounce text-2xl">
                {justCared === "recharge" ? "⚡" : justCared === "clean" ? "✨" : "💛"}
              </div>
            )}
          </div>
          <p className={`text-sm font-bold ${mood.color} mb-1`}>
            {mood.emoji} {mood.text}
          </p>
          {equippedAccessory && (
            <p className="text-xs text-white/25">Wearing equipped accessory</p>
          )}
        </div>

        {/* Stats */}
        <div className="bg-white/4 rounded-3xl border border-white/8 p-5 space-y-4">
          <StatBar label="Energy"    value={robato.energy}    color="bg-mint-400"  emoji="⚡" />
          <StatBar label="Happiness" value={robato.happiness} color="bg-gold-300"  emoji="💛" />
          <StatBar label="Clean"     value={robato.clean}     color="bg-coral-400" emoji="✨" />
        </div>

        {/* Care actions */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Care actions</p>
          <div className="grid grid-cols-3 gap-2">
            {CARE_ACTIONS.map(action => (
              <button
                key={action.id}
                onClick={() => handleCare(action.id)}
                className={`flex flex-col items-center gap-2 py-4 px-2 rounded-2xl border transition-all active:scale-95 ${
                  justCared === action.id ? action.activeColor : action.color
                }`}
              >
                <span className="text-2xl">{action.emoji}</span>
                <span className="text-xs font-bold text-white">{action.label}</span>
                <span className="text-[10px] text-white/35 text-center leading-snug">{action.description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tip */}
        <div className="bg-white/3 rounded-2xl border border-white/6 p-4">
          <p className="text-xs text-white/35 leading-relaxed">
            💡 <strong className="text-white/50">Tip:</strong> ROBATO's happiness goes up every time you complete a mission. Keep exploring!
          </p>
        </div>
      </div>
    </div>
  );
}
