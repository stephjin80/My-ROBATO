"use client";

import {
  createContext, useContext, useEffect, useState, ReactNode,
} from "react";

// ── Types ──────────────────────────────────────────────────────────────────────

export interface ChildProfile {
  name: string;
  ageRange: "5–7" | "8–10" | "10–12";
  interests: string[];
  world: "forest" | "lab" | "space";
  learningStyle: "visual" | "storyteller" | "challenger";
}

export interface RobatoStatus {
  energy: number;     // 0–100
  happiness: number;  // 0–100
  clean: number;      // 0–100
}

export interface AppState {
  isOnboarded: boolean;
  profile: ChildProfile | null;
  notes: number;
  robato: RobatoStatus;
  completedMissions: string[];
  equippedAccessory: string | null;
  purchasedAccessories: string[];
  currentStreak: number;
  level: number;
  totalNotesEarned: number;
  lastActivity: string | null; // ISO timestamp
}

interface AppContextType {
  state: AppState;
  completeOnboarding: (profile: ChildProfile) => void;
  completeMission: (missionId: string, reward: number) => void;
  careForRobato: (action: "recharge" | "clean" | "encourage") => void;
  purchaseAccessory: (id: string, cost: number) => boolean;
  equipAccessory: (id: string) => void;
  resetApp: () => void;
}

// ── Defaults ───────────────────────────────────────────────────────────────────

const DEFAULT_STATE: AppState = {
  isOnboarded: false,
  profile: null,
  notes: 0,
  robato: { energy: 55, happiness: 65, clean: 50 },
  completedMissions: [],
  equippedAccessory: null,
  purchasedAccessories: [],
  currentStreak: 0,
  level: 1,
  totalNotesEarned: 0,
  lastActivity: null,
};

// ── Context ────────────────────────────────────────────────────────────────────

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(DEFAULT_STATE);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("myrobato-v1");
      if (stored) setState(JSON.parse(stored));
    } catch { /* ignore */ }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem("myrobato-v1", JSON.stringify(state));
  }, [state, loaded]);

  function completeOnboarding(profile: ChildProfile) {
    setState(prev => ({
      ...prev,
      isOnboarded: true,
      profile,
      notes: 20,           // starter notes
      totalNotesEarned: 20,
      lastActivity: new Date().toISOString(),
    }));
  }

  function completeMission(missionId: string, reward: number) {
    setState(prev => {
      if (prev.completedMissions.includes(missionId)) return prev;
      const completed = [...prev.completedMissions, missionId];
      return {
        ...prev,
        completedMissions: completed,
        notes: prev.notes + reward,
        totalNotesEarned: prev.totalNotesEarned + reward,
        currentStreak: prev.currentStreak + 1,
        level: Math.floor(completed.length / 2) + 1,
        robato: { ...prev.robato, happiness: Math.min(100, prev.robato.happiness + 12) },
        lastActivity: new Date().toISOString(),
      };
    });
  }

  function careForRobato(action: "recharge" | "clean" | "encourage") {
    setState(prev => ({
      ...prev,
      robato: {
        energy:    action === "recharge"  ? Math.min(100, prev.robato.energy + 30)    : Math.max(0, prev.robato.energy - 2),
        clean:     action === "clean"     ? Math.min(100, prev.robato.clean + 30)     : Math.max(0, prev.robato.clean - 1),
        happiness: action === "encourage" ? Math.min(100, prev.robato.happiness + 30) : prev.robato.happiness,
      },
      lastActivity: new Date().toISOString(),
    }));
  }

  function purchaseAccessory(id: string, cost: number): boolean {
    if (state.notes < cost || state.purchasedAccessories.includes(id)) return false;
    setState(prev => ({
      ...prev,
      notes: prev.notes - cost,
      purchasedAccessories: [...prev.purchasedAccessories, id],
    }));
    return true;
  }

  function equipAccessory(id: string) {
    setState(prev => ({
      ...prev,
      equippedAccessory: prev.equippedAccessory === id ? null : id,
    }));
  }

  function resetApp() {
    setState(DEFAULT_STATE);
    localStorage.removeItem("myrobato-v1");
  }

  // prevent SSR/hydration mismatch
  if (!loaded) return null;

  return (
    <AppContext.Provider value={{
      state, completeOnboarding, completeMission,
      careForRobato, purchaseAccessory, equipAccessory, resetApp,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
