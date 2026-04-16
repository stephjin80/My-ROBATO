"use client";
import { useApp } from "@/context/AppContext";
import { MISSIONS, WORLDS, isWorldUnlocked } from "@/lib/mock-data";

export default function ProgressPage() {
  const { state } = useApp();
  const { completedMissions, notes, totalNotesEarned, level, currentStreak } = state;

  const bySkill = {
    thinking:   completedMissions.filter(id => MISSIONS.find(m => m.id === id)?.skillType === "thinking").length,
    expression: completedMissions.filter(id => MISSIONS.find(m => m.id === id)?.skillType === "expression").length,
    creativity: completedMissions.filter(id => MISSIONS.find(m => m.id === id)?.skillType === "creativity").length,
  };

  return (
    <div className="min-h-full bg-navy-900 text-white">
      <div className="px-6 pt-12 pb-4">
        <p className="text-white/40 text-sm mb-1">How far you've come</p>
        <h1 className="text-2xl font-black tracking-tight">Progress</h1>
      </div>

      <div className="px-6 pb-8 space-y-5">

        {/* Level card */}
        <div className="rounded-3xl bg-gradient-to-br from-mint-900/40 to-navy-950 border border-mint-400/20 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-mint-400/70 mb-1">Current level</p>
              <p className="text-5xl font-black text-white">Lv.{level}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/30 mb-1">Next level at</p>
              <p className="text-lg font-black text-white">{level * 2} missions</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-[10px] text-white/35 mb-1">
              <span>Progress</span>
              <span>{completedMissions.length}/{level * 2}</span>
            </div>
            <div className="h-2 bg-white/8 rounded-full overflow-hidden">
              <div
                className="h-full bg-mint-400 rounded-full transition-all duration-700"
                style={{ width: `${Math.min(100, (completedMissions.length / (level * 2)) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Missions done",   value: completedMissions.length, emoji: "✅", color: "text-mint-400" },
            { label: "Current streak",  value: `${currentStreak} days`,  emoji: "🔥", color: "text-coral-300" },
            { label: "Notes earned",    value: totalNotesEarned,         emoji: "🎵", color: "text-gold-300" },
            { label: "Notes balance",   value: notes,                    emoji: "💰", color: "text-gold-300" },
          ].map(s => (
            <div key={s.label} className="rounded-2xl bg-white/4 border border-white/8 p-4">
              <p className={`text-2xl font-black ${s.color}`}>{s.emoji} {s.value}</p>
              <p className="text-[11px] text-white/30 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Skills breakdown */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Skills</p>
          <div className="bg-white/4 rounded-3xl border border-white/8 p-5 space-y-4">
            {[
              { key: "thinking",   label: "Thinking",   emoji: "🧠", color: "bg-mint-400",  val: bySkill.thinking },
              { key: "expression", label: "Expression", emoji: "📝", color: "bg-gold-300",  val: bySkill.expression },
              { key: "creativity", label: "Creativity", emoji: "✨", color: "bg-coral-400", val: bySkill.creativity },
            ].map(s => (
              <div key={s.key}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-semibold text-white/70">{s.emoji} {s.label}</span>
                  <span className="font-black text-white">{s.val} / 3</span>
                </div>
                <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${s.color} rounded-full transition-all duration-700`}
                    style={{ width: `${(s.val / 3) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Worlds progress */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Worlds explored</p>
          <div className="space-y-2">
            {WORLDS.map(world => {
              const unlocked = isWorldUnlocked(world.id, completedMissions.length);
              const worldMissions = MISSIONS.filter(m => m.worldId === world.id);
              const done = worldMissions.filter(m => completedMissions.includes(m.id)).length;
              return (
                <div key={world.id} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/3 border border-white/6">
                  <span className="text-xl">{world.emoji}</span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">{world.name}</p>
                    {unlocked ? (
                      <p className="text-xs text-white/30">{done}/{worldMissions.length} missions</p>
                    ) : (
                      <p className="text-xs text-white/25">🔒 Unlock at {world.unlockRequirement} missions</p>
                    )}
                  </div>
                  {unlocked && done === worldMissions.length && (
                    <span className="text-xs font-bold text-mint-400 bg-mint-400/15 px-2 py-0.5 rounded-full">
                      Done!
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
