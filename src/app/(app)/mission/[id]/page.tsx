"use client";
import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { getMission } from "@/lib/mock-data";

type Phase = "intro" | "challenge" | "answered" | "complete";

export default function MissionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const mission = getMission(id);
  const { state, completeMission } = useApp();
  const router = useRouter();

  const [phase, setPhase] = useState<Phase>("intro");
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState("");

  if (!mission) {
    return (
      <div className="min-h-full bg-navy-900 flex items-center justify-center text-white/40 text-sm">
        Mission not found.
      </div>
    );
  }

  const alreadyDone = state.completedMissions.includes(mission.id);

  function handleChoiceSelect(choiceId: string) {
    if (phase !== "challenge") return;
    const step = mission!.step;
    if (step.type !== "choice") return;
    const choice = step.choices.find(c => c.id === choiceId);
    if (!choice) return;

    setSelectedChoice(choiceId);
    setFeedback(choice.feedback);
    setPhase("answered");
  }

  function handleInputSubmit() {
    const step = mission!.step;
    if (step.type !== "input") return;
    if (inputValue.trim().length < step.minLength) return;
    setFeedback(step.successMessage);
    setPhase("answered");
  }

  function handleCollect() {
    if (!alreadyDone) {
      completeMission(mission!.id, mission!.reward);
    }
    setPhase("complete");
  }

  if (phase === "complete") {
    return (
      <div className="min-h-full bg-navy-900 text-white flex flex-col items-center justify-between px-8 py-12 text-center">
        <div />
        <div className="space-y-6">
          <div className="relative w-40 h-48 mx-auto">
            <div className="absolute inset-0 bg-mint-400/30 rounded-full blur-2xl scale-90 translate-y-6" />
            <Image src="/robato-character.png" alt="ROBATO" fill className="object-contain drop-shadow-2xl" />
          </div>
          <div>
            <p className="text-4xl mb-3">🎉</p>
            <h2 className="text-3xl font-black tracking-tight mb-2">Mission complete!</h2>
            <p className="text-white/40 text-base">
              You earned <span className="text-gold-300 font-bold">+{mission.reward} notes</span>
            </p>
          </div>
        </div>
        <div className="w-full space-y-3">
          <button
            onClick={() => router.push("/journey")}
            className="w-full py-4 rounded-2xl bg-mint-500 text-white font-bold hover:bg-mint-600 active:scale-95 transition-all"
          >
            Back to Journey →
          </button>
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full py-4 rounded-2xl border border-white/12 text-white/40 font-semibold hover:text-white hover:border-white/25 transition-all"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-navy-900 text-white flex flex-col">
      {/* Back button */}
      <div className="px-6 pt-10 flex items-center gap-3">
        <button onClick={() => router.back()} className="text-white/30 hover:text-white transition-colors text-sm">
          ← Back
        </button>
        <div className="flex-1" />
        {alreadyDone && (
          <span className="text-[11px] font-bold text-mint-400 bg-mint-400/15 px-2.5 py-1 rounded-full">
            ✓ Completed
          </span>
        )}
      </div>

      <div className="flex-1 flex flex-col px-6 pt-4 pb-8">

        {/* INTRO phase */}
        {phase === "intro" && (
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl">{mission.emoji}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/30">{mission.worldId} world</p>
                <h1 className="text-xl font-black tracking-tight">{mission.title}</h1>
              </div>
            </div>

            <div className="flex-1 bg-white/4 rounded-3xl p-5 border border-white/8 flex flex-col justify-between">
              <p className="text-white/75 text-base leading-relaxed">{mission.story}</p>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/8">
                <div className="relative w-14 h-16 flex-shrink-0">
                  <Image src="/robato-character.png" alt="ROBATO" fill className="object-contain" />
                </div>
                <p className="text-sm text-white/40 italic">
                  "Ready when you are, {state.profile?.name}!"
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-white/25 mt-3 px-1">
              <span>{mission.duration}</span>
              <span>+{mission.reward} notes</span>
            </div>

            <button
              onClick={() => setPhase("challenge")}
              className="mt-4 w-full py-4 rounded-2xl bg-mint-500 text-white font-bold hover:bg-mint-600 active:scale-95 transition-all"
            >
              Begin Mission →
            </button>
          </div>
        )}

        {/* CHALLENGE phase */}
        {(phase === "challenge" || phase === "answered") && (
          <div className="flex flex-col flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Challenge</p>

            {mission.step.type === "choice" && (() => {
              const choiceStep = mission.step;
              return (
              <div className="flex flex-col flex-1">
                <p className="text-lg font-bold text-white leading-snug mb-2">{choiceStep.prompt}</p>
                {choiceStep.visual && (
                  <p className="text-2xl text-center py-4 tracking-widest">{choiceStep.visual}</p>
                )}
                {choiceStep.isCreative && (
                  <p className="text-xs text-gold-300/70 mb-3">✨ This is a creative question — all answers are celebrated!</p>
                )}

                <div className="space-y-2 flex-1">
                  {choiceStep.choices.map(choice => {
                    const isSelected = selectedChoice === choice.id;
                    const isCorrect = choice.correct;
                    const showResult = phase === "answered" && isSelected;
                    return (
                      <button
                        key={choice.id}
                        onClick={() => handleChoiceSelect(choice.id)}
                        disabled={phase === "answered"}
                        className={`w-full text-left px-4 py-3.5 rounded-2xl border transition-all text-sm font-medium ${
                          showResult && isCorrect
                            ? "border-mint-400 bg-mint-400/15 text-white"
                            : showResult && !isCorrect && !choiceStep.isCreative
                            ? "border-coral-400/50 bg-coral-400/10 text-white/70"
                            : phase === "answered" && !isSelected
                            ? "border-white/6 bg-white/2 text-white/25"
                            : "border-white/12 bg-white/4 text-white hover:border-white/25 hover:bg-white/6 active:scale-98"
                        }`}
                      >
                        {choice.text}
                      </button>
                    );
                  })}
                </div>

                {phase === "answered" && (
                  <div className="mt-4 space-y-3">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <p className="text-sm text-white/70 leading-relaxed">{feedback}</p>
                    </div>
                    <button
                      onClick={handleCollect}
                      className="w-full py-4 rounded-2xl bg-mint-500 text-white font-bold hover:bg-mint-600 active:scale-95 transition-all"
                    >
                      {alreadyDone ? "Continue" : `Collect +${mission.reward} Notes →`}
                    </button>
                  </div>
                )}
              </div>
              );
            })()}

            {mission.step.type === "input" && (
              <div className="flex flex-col flex-1">
                <p className="text-base font-bold text-white leading-snug mb-4">{mission.step.prompt}</p>

                <textarea
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder={mission.step.placeholder}
                  rows={5}
                  disabled={phase === "answered"}
                  className="flex-1 bg-white/6 border border-white/12 rounded-2xl px-4 py-3 text-white text-sm placeholder:text-white/25 outline-none focus:border-mint-400/60 focus:bg-white/8 transition-all resize-none disabled:opacity-60"
                />

                <p className="text-right text-xs text-white/25 mt-1.5">
                  {inputValue.length} chars · min {mission.step.minLength}
                </p>

                {phase === "challenge" && (
                  <button
                    onClick={handleInputSubmit}
                    disabled={inputValue.trim().length < mission.step.minLength}
                    className="mt-3 w-full py-4 rounded-2xl bg-mint-500 text-white font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-mint-600 active:scale-95 transition-all"
                  >
                    Submit →
                  </button>
                )}

                {phase === "answered" && (
                  <div className="mt-3 space-y-3">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <p className="text-sm text-white/70 leading-relaxed">{feedback}</p>
                    </div>
                    <button
                      onClick={handleCollect}
                      className="w-full py-4 rounded-2xl bg-mint-500 text-white font-bold hover:bg-mint-600 active:scale-95 transition-all"
                    >
                      {alreadyDone ? "Continue" : `Collect +${mission.reward} Notes →`}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
