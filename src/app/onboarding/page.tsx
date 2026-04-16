"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { INTEREST_OPTIONS, LEARNING_STYLE_OPTIONS } from "@/lib/mock-data";
import type { ChildProfile } from "@/context/AppContext";

type Step = "name" | "age" | "interests" | "style" | "welcome";

const AGE_OPTIONS: { value: ChildProfile["ageRange"]; label: string; emoji: string }[] = [
  { value: "5–7",   label: "5 – 7",  emoji: "🌱" },
  { value: "8–10",  label: "8 – 10", emoji: "🌿" },
  { value: "10–12", label: "10 – 12",emoji: "🌳" },
];

export default function OnboardingPage() {
  const { state, completeOnboarding } = useApp();
  const router = useRouter();

  const [step, setStep] = useState<Step>("name");
  const [name, setName]         = useState("");
  const [age, setAge]           = useState<ChildProfile["ageRange"] | "">("");
  const [interests, setInterests] = useState<string[]>([]);
  const [style, setStyle]       = useState<ChildProfile["learningStyle"] | "">("");

  useEffect(() => {
    if (state.isOnboarded) router.replace("/dashboard");
  }, [state.isOnboarded, router]);

  function toggleInterest(id: string) {
    setInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  }

  function handleFinish() {
    completeOnboarding({
      name: name.trim(),
      ageRange: age as ChildProfile["ageRange"],
      interests,
      world: "forest",
      learningStyle: style as ChildProfile["learningStyle"],
    });
    router.push("/dashboard");
  }

  const STEPS: Step[] = ["name", "age", "interests", "style", "welcome"];
  const stepIndex = STEPS.indexOf(step);

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center">
      <div className="w-full md:max-w-[430px] md:h-[900px] md:rounded-[44px] md:overflow-hidden md:shadow-2xl md:border md:border-white/8 bg-navy-900 flex flex-col min-h-screen relative">

        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-mint-400/8 rounded-full blur-3xl pointer-events-none" />

        {/* Progress bar */}
        {step !== "welcome" && (
          <div className="px-8 pt-12 pb-2 flex gap-1.5">
            {STEPS.slice(0, -1).map((s, i) => (
              <div
                key={s}
                className={`flex-1 h-1 rounded-full transition-all duration-500 ${
                  i <= stepIndex ? "bg-mint-400" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 flex flex-col px-8 py-6 z-10">

          {/* STEP: name */}
          {step === "name" && (
            <div className="flex flex-col flex-1">
              <p className="text-mint-400 text-xs font-bold uppercase tracking-widest mb-3">Step 1 of 4</p>
              <h2 className="text-3xl font-black text-white tracking-tight leading-tight mb-2">
                What's your name?
              </h2>
              <p className="text-white/40 text-sm mb-8">
                ROBATO would love to know who you are.
              </p>

              <div className="relative flex-1 flex flex-col justify-between">
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Type your name…"
                  maxLength={30}
                  autoFocus
                  className="w-full bg-white/6 border border-white/12 rounded-2xl px-5 py-4 text-white text-lg placeholder:text-white/25 outline-none focus:border-mint-400/60 focus:bg-white/8 transition-all"
                />

                <div className="text-center py-4">
                  <div className="relative w-32 h-36 mx-auto">
                    <Image src="/robato-character.png" alt="ROBATO" fill className="object-contain" />
                  </div>
                  <p className="text-white/25 text-sm mt-2">Nice to meet you! 👋</p>
                </div>

                <button
                  onClick={() => setStep("age")}
                  disabled={name.trim().length < 2}
                  className="w-full py-4 rounded-2xl bg-mint-500 text-white font-bold text-base disabled:opacity-30 disabled:cursor-not-allowed hover:bg-mint-600 active:scale-95 transition-all"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP: age */}
          {step === "age" && (
            <div className="flex flex-col flex-1">
              <p className="text-mint-400 text-xs font-bold uppercase tracking-widest mb-3">Step 2 of 4</p>
              <h2 className="text-3xl font-black text-white tracking-tight leading-tight mb-2">
                How old are you, {name}?
              </h2>
              <p className="text-white/40 text-sm mb-8">
                ROBATO adapts to just the right level for you.
              </p>

              <div className="space-y-3 flex-1">
                {AGE_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setAge(opt.value)}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all ${
                      age === opt.value
                        ? "border-mint-400 bg-mint-400/15 text-white"
                        : "border-white/10 bg-white/4 text-white/60 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <span className="text-2xl">{opt.emoji}</span>
                    <span className="text-lg font-bold">{opt.label} years old</span>
                    {age === opt.value && <span className="ml-auto text-mint-400">✓</span>}
                  </button>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep("name")} className="flex-1 py-4 rounded-2xl border border-white/12 text-white/40 font-semibold hover:text-white hover:border-white/25 transition-all">
                  ← Back
                </button>
                <button
                  onClick={() => setStep("interests")}
                  disabled={!age}
                  className="flex-[2] py-4 rounded-2xl bg-mint-500 text-white font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-mint-600 active:scale-95 transition-all"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP: interests */}
          {step === "interests" && (
            <div className="flex flex-col flex-1">
              <p className="text-mint-400 text-xs font-bold uppercase tracking-widest mb-3">Step 3 of 4</p>
              <h2 className="text-3xl font-black text-white tracking-tight leading-tight mb-2">
                What do you love?
              </h2>
              <p className="text-white/40 text-sm mb-6">
                Pick up to 3 things. ROBATO will build adventures around them.
              </p>

              <div className="grid grid-cols-4 gap-2 flex-1 content-start">
                {INTEREST_OPTIONS.map(opt => {
                  const selected = interests.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleInterest(opt.id)}
                      className={`flex flex-col items-center gap-1.5 py-3 px-1 rounded-2xl border transition-all ${
                        selected
                          ? "border-mint-400 bg-mint-400/15 text-white"
                          : "border-white/10 bg-white/4 text-white/50 hover:border-white/25 hover:text-white"
                      }`}
                    >
                      <span className="text-2xl">{opt.emoji}</span>
                      <span className="text-[10px] font-bold">{opt.label}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-white/25 text-xs text-center mt-3">
                {interests.length}/3 selected
              </p>

              <div className="flex gap-3 mt-4">
                <button onClick={() => setStep("age")} className="flex-1 py-4 rounded-2xl border border-white/12 text-white/40 font-semibold hover:text-white hover:border-white/25 transition-all">
                  ← Back
                </button>
                <button
                  onClick={() => setStep("style")}
                  disabled={interests.length === 0}
                  className="flex-[2] py-4 rounded-2xl bg-mint-500 text-white font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-mint-600 active:scale-95 transition-all"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP: learning style */}
          {step === "style" && (
            <div className="flex flex-col flex-1">
              <p className="text-mint-400 text-xs font-bold uppercase tracking-widest mb-3">Step 4 of 4</p>
              <h2 className="text-3xl font-black text-white tracking-tight leading-tight mb-2">
                How do you learn best?
              </h2>
              <p className="text-white/40 text-sm mb-6">
                Every ROBATO adventure is personalized to your style.
              </p>

              <div className="space-y-3 flex-1">
                {LEARNING_STYLE_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setStyle(opt.id as ChildProfile["learningStyle"])}
                    className={`w-full text-left px-5 py-4 rounded-2xl border transition-all ${
                      style === opt.id
                        ? "border-mint-400 bg-mint-400/15 text-white"
                        : "border-white/10 bg-white/4 text-white/60 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{opt.emoji}</span>
                      <div>
                        <p className="font-bold text-sm">{opt.label}</p>
                        <p className="text-xs text-white/40 mt-0.5">{opt.description}</p>
                      </div>
                      {style === opt.id && <span className="ml-auto text-mint-400">✓</span>}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep("interests")} className="flex-1 py-4 rounded-2xl border border-white/12 text-white/40 font-semibold hover:text-white hover:border-white/25 transition-all">
                  ← Back
                </button>
                <button
                  onClick={() => setStep("welcome")}
                  disabled={!style}
                  className="flex-[2] py-4 rounded-2xl bg-mint-500 text-white font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-mint-600 active:scale-95 transition-all"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP: welcome / final */}
          {step === "welcome" && (
            <div className="flex flex-col flex-1 items-center justify-between text-center py-4">
              <div />
              <div className="space-y-6">
                <div className="relative w-44 h-52 mx-auto">
                  <div className="absolute inset-0 bg-mint-400/25 rounded-full blur-2xl scale-90 translate-y-6" />
                  <Image src="/robato-character.png" alt="ROBATO" fill className="object-contain drop-shadow-2xl" priority />
                </div>
                <div>
                  <p className="text-mint-400 text-xs font-bold uppercase tracking-widest mb-3">All set!</p>
                  <h2 className="text-4xl font-black text-white tracking-tight leading-tight mb-3">
                    Hello, {name}! 👋
                  </h2>
                  <p className="text-white/40 text-base leading-relaxed max-w-xs mx-auto">
                    ROBATO is ready to explore with you. Your first adventure is waiting in the Whispering Forest.
                  </p>
                </div>
              </div>

              <div className="w-full space-y-3">
                <button
                  onClick={handleFinish}
                  className="w-full py-4 rounded-2xl bg-mint-500 text-white font-bold text-base hover:bg-mint-600 active:scale-95 transition-all shadow-lg shadow-mint-500/25"
                >
                  Start your adventure →
                </button>
                <p className="text-white/20 text-[11px]">20 notes added to your wallet 🎵</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
