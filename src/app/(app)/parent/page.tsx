"use client";
import { useApp } from "@/context/AppContext";
import { MISSIONS } from "@/lib/mock-data";

export default function ParentPage() {
  const { state, resetApp } = useApp();
  const { profile, completedMissions, totalNotesEarned, currentStreak, level, lastActivity, robato } = state;

  const completedDetails = MISSIONS.filter(m => completedMissions.includes(m.id));
  const lastActive = lastActivity
    ? new Date(lastActivity).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "Never";

  const skillBreakdown = {
    thinking:   completedDetails.filter(m => m.skillType === "thinking").length,
    expression: completedDetails.filter(m => m.skillType === "expression").length,
    creativity: completedDetails.filter(m => m.skillType === "creativity").length,
  };

  const avgRobato = Math.round((robato.energy + robato.happiness + robato.clean) / 3);

  return (
    <div className="min-h-full bg-navy-900 text-white">
      <div className="px-6 pt-12 pb-4">
        <p className="text-white/40 text-sm mb-1">Guardian view</p>
        <h1 className="text-2xl font-black tracking-tight">Parent Overview</h1>
      </div>

      <div className="px-6 pb-8 space-y-5">

        {/* Child profile summary */}
        <div className="rounded-3xl bg-white/4 border border-white/10 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Child profile</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-white/35 text-xs">Name</p>
              <p className="font-bold text-white mt-0.5">{profile?.name}</p>
            </div>
            <div>
              <p className="text-white/35 text-xs">Age range</p>
              <p className="font-bold text-white mt-0.5">{profile?.ageRange}</p>
            </div>
            <div>
              <p className="text-white/35 text-xs">Learning style</p>
              <p className="font-bold text-white mt-0.5 capitalize">{profile?.learningStyle}</p>
            </div>
            <div>
              <p className="text-white/35 text-xs">Last active</p>
              <p className="font-bold text-white mt-0.5">{lastActive}</p>
            </div>
          </div>
          {profile?.interests && profile.interests.length > 0 && (
            <div className="mt-3">
              <p className="text-white/35 text-xs mb-1.5">Interests</p>
              <div className="flex flex-wrap gap-1.5">
                {profile.interests.map(i => (
                  <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/8 text-white/60 capitalize">{i}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Learning metrics */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Learning metrics</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Level",           value: level,                          emoji: "⚡", color: "text-mint-400" },
              { label: "Streak",          value: `${currentStreak} days`,        emoji: "🔥", color: "text-coral-300" },
              { label: "Missions done",   value: completedMissions.length,       emoji: "✅", color: "text-mint-400" },
              { label: "Notes earned",    value: totalNotesEarned,               emoji: "🎵", color: "text-gold-300" },
            ].map(s => (
              <div key={s.label} className="rounded-2xl bg-white/4 border border-white/8 p-3.5">
                <p className={`text-xl font-black ${s.color}`}>{s.emoji} {s.value}</p>
                <p className="text-[11px] text-white/30 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white/4 rounded-3xl border border-white/8 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Skill development</p>
          <div className="space-y-3">
            {[
              { label: "Critical Thinking", val: skillBreakdown.thinking,   color: "bg-mint-400", max: 3 },
              { label: "Expression",        val: skillBreakdown.expression, color: "bg-gold-300", max: 3 },
              { label: "Creativity",        val: skillBreakdown.creativity, color: "bg-coral-400", max: 3 },
            ].map(s => (
              <div key={s.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/60 font-semibold">{s.label}</span>
                  <span className="text-white/40">{s.val}/{s.max} missions</span>
                </div>
                <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${s.color} rounded-full transition-all duration-700`}
                    style={{ width: `${(s.val / s.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROBATO wellbeing */}
        <div className="bg-white/4 rounded-3xl border border-white/8 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">ROBATO wellbeing</p>
          <p className="text-2xl font-black text-white mb-1">
            {avgRobato >= 75 ? "😄" : avgRobato >= 50 ? "🙂" : "😔"} {avgRobato}% average
          </p>
          <p className="text-xs text-white/35">
            {avgRobato >= 75
              ? "ROBATO is thriving! Your child is consistently caring for their companion."
              : avgRobato >= 50
              ? "ROBATO is doing well. Regular care sessions would help keep the bond strong."
              : "ROBATO could use more care. Encourage your child to visit the ROBATO screen."}
          </p>
        </div>

        {/* Recent activity */}
        {completedDetails.length > 0 && (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Completed missions</p>
            <div className="space-y-2">
              {completedDetails.map(m => (
                <div key={m.id} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/3 border border-white/6">
                  <span className="text-xl">{m.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white truncate">{m.title}</p>
                    <p className="text-[11px] text-white/30 capitalize">{m.worldId} · {m.skillType}</p>
                  </div>
                  <span className="text-xs font-bold text-gold-300 flex-shrink-0">+{m.reward}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reset */}
        <div className="pt-2">
          <button
            onClick={() => {
              if (confirm("Reset all progress? This cannot be undone.")) resetApp();
            }}
            className="w-full py-3 rounded-2xl border border-coral-400/20 text-coral-400/60 text-sm font-semibold hover:border-coral-400/40 hover:text-coral-400 transition-all"
          >
            Reset app progress
          </button>
        </div>
      </div>
    </div>
  );
}
