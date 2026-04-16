"use client";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { WORLDS, getWorldMissions, isWorldUnlocked } from "@/lib/mock-data";

const SKILL_COLORS: Record<string, string> = {
  thinking:   "bg-mint-400/15 text-mint-300",
  expression: "bg-gold-400/15 text-gold-300",
  creativity: "bg-coral-400/15 text-coral-300",
};

export default function JourneyPage() {
  const { state } = useApp();
  const { completedMissions } = state;

  return (
    <div className="min-h-full bg-navy-900 text-white">
      <div className="px-6 pt-12 pb-4">
        <p className="text-white/40 text-sm mb-1">Your adventures</p>
        <h1 className="text-2xl font-black tracking-tight">Journey</h1>
      </div>

      <div className="px-6 pb-8 space-y-6">
        {WORLDS.map(world => {
          const unlocked = isWorldUnlocked(world.id, completedMissions.length);
          const missions = getWorldMissions(world.id);
          const worldCompleted = missions.filter(m => completedMissions.includes(m.id)).length;

          return (
            <div key={world.id}>
              {/* World header */}
              <div className={`rounded-3xl bg-gradient-to-br ${world.gradient} p-5 mb-3 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_white_0%,_transparent_70%)]" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{world.emoji}</span>
                      <div>
                        <h2 className="font-black text-white text-lg leading-tight">{world.name}</h2>
                        <p className={`text-xs font-semibold ${world.accentColor}`}>{world.theme}</p>
                      </div>
                    </div>
                    {!unlocked && (
                      <div className={`text-xs font-bold px-2.5 py-1 rounded-full ${world.badgeBg} ${world.badgeText}`}>
                        🔒 {world.unlockRequirement} missions
                      </div>
                    )}
                    {unlocked && (
                      <div className={`text-xs font-bold px-2.5 py-1 rounded-full ${world.badgeBg} ${world.badgeText}`}>
                        {worldCompleted}/{missions.length} done
                      </div>
                    )}
                  </div>
                  {!unlocked && (
                    <p className="text-white/40 text-xs mt-2">
                      Complete {world.unlockRequirement - completedMissions.length} more mission{world.unlockRequirement - completedMissions.length !== 1 ? "s" : ""} to unlock
                    </p>
                  )}
                </div>
              </div>

              {/* Mission list */}
              <div className="space-y-2">
                {missions.map((mission, idx) => {
                  const done = completedMissions.includes(mission.id);
                  return (
                    <Link
                      key={mission.id}
                      href={unlocked ? `/mission/${mission.id}` : "#"}
                      className={`flex items-center gap-4 rounded-2xl border p-4 transition-all ${
                        done
                          ? "border-mint-400/25 bg-mint-400/8"
                          : unlocked
                          ? "border-white/10 bg-white/4 hover:border-white/20 hover:bg-white/6 active:scale-98"
                          : "border-white/6 bg-white/2 opacity-40 cursor-not-allowed"
                      }`}
                    >
                      {/* Number / check */}
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-black ${
                        done ? "bg-mint-400 text-navy-900" : "bg-white/8 text-white/40"
                      }`}>
                        {done ? "✓" : idx + 1}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className={`font-bold text-sm ${done ? "text-white/70" : "text-white"}`}>
                          {mission.emoji} {mission.title}
                        </p>
                        <p className="text-xs text-white/30 truncate">{mission.duration}</p>
                      </div>

                      <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${SKILL_COLORS[mission.skillType]}`}>
                          {mission.skillType}
                        </span>
                        <span className="text-xs text-gold-300 font-bold">+{mission.reward}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
