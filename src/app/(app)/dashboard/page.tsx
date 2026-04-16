"use client";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { WORLDS, MISSIONS, isWorldUnlocked } from "@/lib/mock-data";
import { ACCESSORIES } from "@/lib/mock-data";

function RobatoBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] text-white/40 font-semibold uppercase tracking-wider">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { state } = useApp();
  const { profile, robato, notes, completedMissions, level, currentStreak, equippedAccessory } = state;

  const equippedItem = equippedAccessory ? ACCESSORIES.find(a => a.id === equippedAccessory) : null;

  // Suggest next mission (first incomplete)
  const allMissions = MISSIONS.filter(m => isWorldUnlocked(m.worldId, completedMissions.length));
  const nextMission = allMissions.find(m => !completedMissions.includes(m.id));

  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    return "Good evening";
  })();

  return (
    <div className="min-h-full bg-navy-900 text-white">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex items-center justify-between">
        <div>
          <p className="text-white/40 text-sm">{greeting},</p>
          <h1 className="text-2xl font-black tracking-tight">{profile?.name} 👋</h1>
        </div>
        <div className="text-right">
          <p className="text-xs text-white/30 uppercase tracking-wider">Notes</p>
          <p className="text-xl font-black text-gold-300">🎵 {notes}</p>
        </div>
      </div>

      <div className="px-6 pb-8 space-y-5">

        {/* ROBATO card */}
        <div className="rounded-3xl bg-gradient-to-br from-mint-900/40 to-navy-900 border border-mint-400/15 p-5">
          <div className="flex items-start gap-4">
            <div className="relative w-20 h-24 flex-shrink-0">
              {equippedItem && (
                <span className="absolute -top-1 -right-1 text-2xl z-10">{equippedItem.emoji}</span>
              )}
              <Image src="/robato-character.png" alt="ROBATO" fill className="object-contain" />
            </div>
            <div className="flex-1 space-y-2.5 pt-1">
              <RobatoBar label="Energy"    value={robato.energy}    color="bg-mint-400" />
              <RobatoBar label="Happiness" value={robato.happiness} color="bg-gold-300" />
              <RobatoBar label="Clean"     value={robato.clean}     color="bg-coral-400" />
              <Link href="/robato" className="inline-block mt-1 text-[11px] font-bold text-mint-400 hover:text-mint-300 transition-colors uppercase tracking-wider">
                Care for ROBATO →
              </Link>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Level",   value: level,            emoji: "⚡" },
            { label: "Streak",  value: `${currentStreak}d`, emoji: "🔥" },
            { label: "Missions",value: completedMissions.length, emoji: "✅" },
          ].map(s => (
            <div key={s.label} className="rounded-2xl bg-white/4 border border-white/8 p-3.5 text-center">
              <p className="text-xl font-black text-white">{s.emoji} {s.value}</p>
              <p className="text-[10px] text-white/30 uppercase tracking-wider mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Next mission suggestion */}
        {nextMission && (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">Up next</p>
            <Link
              href={`/mission/${nextMission.id}`}
              className="flex items-center gap-4 rounded-3xl bg-gradient-to-r from-white/6 to-white/3 border border-white/10 p-4 hover:border-mint-400/30 hover:bg-white/8 transition-all active:scale-98"
            >
              <span className="text-3xl">{nextMission.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm truncate">{nextMission.title}</p>
                <p className="text-xs text-white/35 truncate">{nextMission.story.slice(0, 55)}…</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xs font-bold text-gold-300">+{nextMission.reward}</p>
                <p className="text-[10px] text-white/25">{nextMission.duration}</p>
              </div>
            </Link>
          </div>
        )}

        {/* World chips */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">Worlds</p>
          <div className="flex gap-2">
            {WORLDS.map(world => {
              const unlocked = isWorldUnlocked(world.id, completedMissions.length);
              return (
                <Link
                  key={world.id}
                  href="/journey"
                  className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-2xl border transition-all ${
                    unlocked
                      ? "border-white/12 bg-white/4 hover:bg-white/8"
                      : "border-white/6 bg-white/2 opacity-40"
                  }`}
                >
                  <span className="text-2xl">{world.emoji}</span>
                  <span className="text-[10px] font-bold text-white/50">{world.name.split(" ")[0]}</span>
                  {!unlocked && <span className="text-[9px] text-white/25">🔒</span>}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
