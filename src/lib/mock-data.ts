// ── Story Worlds ──────────────────────────────────────────────────────────────

export interface World {
  id: "forest" | "lab" | "space";
  name: string;
  emoji: string;
  theme: string;
  description: string;
  unlockRequirement: number; // missions needed to unlock
  gradient: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  missionIds: string[];
}

export const WORLDS: World[] = [
  {
    id: "forest",
    name: "Whispering Forest",
    emoji: "🌿",
    theme: "Nature · Discovery · Language",
    description: "Ancient trees hold secrets. ROBATO needs your help to uncover them.",
    unlockRequirement: 0,
    gradient: "from-emerald-800 to-teal-900",
    accentColor: "text-emerald-300",
    badgeBg: "bg-emerald-900/60",
    badgeText: "text-emerald-300",
    missionIds: ["m-forest-1", "m-forest-2", "m-forest-3"],
  },
  {
    id: "lab",
    name: "Discovery Lab",
    emoji: "🔬",
    theme: "Science · Experiment · Logic",
    description: "Every experiment is a doorway. What will you discover today?",
    unlockRequirement: 2,
    gradient: "from-navy-900 to-indigo-900",
    accentColor: "text-indigo-300",
    badgeBg: "bg-indigo-900/60",
    badgeText: "text-indigo-300",
    missionIds: ["m-lab-1", "m-lab-2", "m-lab-3"],
  },
  {
    id: "space",
    name: "The Cosmos",
    emoji: "🚀",
    theme: "Exploration · Math · Wonder",
    description: "The universe has a question. You have the answer. Let's find out.",
    unlockRequirement: 4,
    gradient: "from-slate-900 to-violet-950",
    accentColor: "text-violet-300",
    badgeBg: "bg-violet-900/60",
    badgeText: "text-violet-300",
    missionIds: ["m-space-1", "m-space-2", "m-space-3"],
  },
];

// ── Missions ──────────────────────────────────────────────────────────────────

export type MissionStep =
  | { type: "choice"; prompt: string; visual?: string; isCreative?: boolean; choices: { id: string; text: string; correct: boolean; feedback: string }[] }
  | { type: "input"; prompt: string; placeholder: string; minLength: number; successMessage: string };

export interface Mission {
  id: string;
  worldId: "forest" | "lab" | "space";
  skillType: "thinking" | "expression" | "creativity";
  title: string;
  story: string;
  emoji: string;
  reward: number;
  duration: string;
  step: MissionStep;
}

export const MISSIONS: Mission[] = [
  // ── Forest ──
  {
    id: "m-forest-1",
    worldId: "forest",
    skillType: "thinking",
    title: "The Missing Path",
    story: "ROBATO has wandered deep into the Whispering Forest and lost the way home. Three moonlit trails appear ahead. Which one leads to the valley?",
    emoji: "🌙",
    reward: 15,
    duration: "2 min",
    step: {
      type: "choice",
      prompt: "Which path leads to the valley below?",
      visual: "🌸   🪨   💧",
      choices: [
        { id: "a", text: "The path lined with blue flowers", correct: false, feedback: "Beautiful, but flowers don't point to valleys. Think about what flows downhill..." },
        { id: "b", text: "The rocky stone path", correct: false, feedback: "Stones are steady, but streams know the way. Water always flows down." },
        { id: "c", text: "The path following the stream", correct: true, feedback: "Yes! Water always flows toward the lowest point. You guided ROBATO home safely! 🌿" },
      ],
    },
  },
  {
    id: "m-forest-2",
    worldId: "forest",
    skillType: "expression",
    title: "The Talking Tree",
    story: "Deep in the forest lives the oldest tree. It has seen 500 years of history — but it has never been asked to describe itself. Until now.",
    emoji: "🌳",
    reward: 18,
    duration: "3 min",
    step: {
      type: "input",
      prompt: "Write what the oldest tree in the forest would say if it could speak for the first time. Describe what it has seen.",
      placeholder: "\"I remember the day when...\"",
      minLength: 15,
      successMessage: "Wonderful! The tree finally found its voice — and you gave it to them. ROBATO is moved.",
    },
  },
  {
    id: "m-forest-3",
    worldId: "forest",
    skillType: "creativity",
    title: "The New Creature",
    story: "A corner of the Whispering Forest has never been explored. ROBATO believes something extraordinary lives there — but nobody has ever named it.",
    emoji: "✨",
    reward: 20,
    duration: "3 min",
    step: {
      type: "input",
      prompt: "Invent a creature that lives in the hidden part of the forest. Give it a name, one special ability, and describe what it looks like.",
      placeholder: "Its name is... It can... It looks like...",
      minLength: 20,
      successMessage: "Extraordinary! Your creature has been added to the ROBATO Forest Encyclopedia. 🌿",
    },
  },
  // ── Lab ──
  {
    id: "m-lab-1",
    worldId: "lab",
    skillType: "thinking",
    title: "The Color Discovery",
    story: "In the Discovery Lab, ROBATO has mixed blue and gold paint — and created a color the world has never seen. But first, a riddle about mixing things...",
    emoji: "🎨",
    reward: 20,
    duration: "2 min",
    step: {
      type: "choice",
      prompt: "If you mix something cold with something warm, what do you usually get?",
      choices: [
        { id: "a", text: "Something that disappears", correct: false, feedback: "Not quite! When opposites meet, something interesting usually happens instead." },
        { id: "b", text: "Something in between — balanced", correct: true, feedback: "Exactly right! Balance is one of science's most beautiful outcomes. The perfect temperature for discovery." },
        { id: "c", text: "The colder one wins always", correct: false, feedback: "Try thinking of warm soup meeting cold air — what happens? Balance!" },
      ],
    },
  },
  {
    id: "m-lab-2",
    worldId: "lab",
    skillType: "expression",
    title: "Name the New Color",
    story: "ROBATO's experiment worked — a brand-new color exists that no one has ever seen before. It sits between deep ocean blue and sunrise gold. Now it needs a name.",
    emoji: "🌈",
    reward: 22,
    duration: "3 min",
    step: {
      type: "input",
      prompt: "Name this new color between deep blue and warm gold. Describe it in 1–2 sentences so anyone could picture it.",
      placeholder: "I'd call it... because it looks like...",
      minLength: 12,
      successMessage: "Brilliant naming! Your color has been entered into the ROBATO Lab color registry. 🔬",
    },
  },
  {
    id: "m-lab-3",
    worldId: "lab",
    skillType: "creativity",
    title: "The Invention Brief",
    story: "Every great invention started as someone's answer to a problem. Today you get to be the inventor. ROBATO needs something that doesn't exist yet.",
    emoji: "💡",
    reward: 25,
    duration: "4 min",
    step: {
      type: "input",
      prompt: "Invent something that would make learning more fun. Give it a name and explain how it works in 2 sentences.",
      placeholder: "My invention is called... It works by...",
      minLength: 20,
      successMessage: "Patent pending! ROBATO has filed your invention in the Lab of Brilliant Ideas. 💡",
    },
  },
  // ── Space ──
  {
    id: "m-space-1",
    worldId: "space",
    skillType: "thinking",
    title: "The Space Inventor",
    story: "You've traveled 400 million miles from Earth. ROBATO's toolkit is running low, and something must be invented from starlight and ideas alone.",
    emoji: "⭐",
    reward: 25,
    duration: "2 min",
    step: {
      type: "choice",
      prompt: "If you could bring ONE thing from Earth to help astronauts live better in space, what would help most?",
      isCreative: true,
      choices: [
        { id: "a", text: "A garden pod where plants grow in zero gravity", correct: true, feedback: "Incredible! NASA is actually researching this. You just independently invented space botany." },
        { id: "b", text: "A machine that turns starlight into music", correct: true, feedback: "Pure poetry! Scientists and musicians would both love this. Sound in space has always fascinated us." },
        { id: "c", text: "A window that shows Earth weather from space in real time", correct: true, feedback: "Brilliant — and real! Earth observation satellites do exactly this. You're thinking like a space engineer." },
      ],
    },
  },
  {
    id: "m-space-2",
    worldId: "space",
    skillType: "expression",
    title: "Message to the Stars",
    story: "Scientists believe there may be intelligent life beyond our solar system. ROBATO is sending a message today — the first ever from your world. What should it say?",
    emoji: "📡",
    reward: 28,
    duration: "3 min",
    step: {
      type: "input",
      prompt: "Write a 2–3 sentence message to a civilization far across the galaxy. What would you want them to know about us?",
      placeholder: "Dear distant friends, on our world we...",
      minLength: 20,
      successMessage: "Transmitted! Your message is now traveling at the speed of light. ROBATO is proud to represent Earth alongside you. 🚀",
    },
  },
  {
    id: "m-space-3",
    worldId: "space",
    skillType: "creativity",
    title: "Design a New Planet",
    story: "ROBATO's telescope has detected an undiscovered planet. It's perfect — but empty. It needs a name, a sky color, and something that makes it unlike anything else.",
    emoji: "🪐",
    reward: 30,
    duration: "4 min",
    step: {
      type: "input",
      prompt: "Name your new planet, describe what color its sky is, and share one thing that makes it special that no other planet has.",
      placeholder: "My planet is called... Its sky is... What makes it special is...",
      minLength: 25,
      successMessage: "Filed with the Galactic Registry! Your planet has been officially added to the ROBATO atlas of the cosmos. 🪐",
    },
  },
];

// ── Accessories ───────────────────────────────────────────────────────────────

export interface Accessory {
  id: string;
  name: string;
  emoji: string;
  cost: number;
  rarity: "common" | "rare" | "legendary";
  description: string;
}

export const ACCESSORIES: Accessory[] = [
  { id: "scarf",   name: "Forest Scarf",  emoji: "🌿", cost: 15,  rarity: "common",    description: "Woven from ancient forest vines" },
  { id: "glasses", name: "Lab Goggles",   emoji: "🥽", cost: 20,  rarity: "common",    description: "For the relentlessly curious" },
  { id: "hat",     name: "Star Hat",      emoji: "⭐", cost: 25,  rarity: "common",    description: "A hat made from solidified starlight" },
  { id: "badge",   name: "Explorer Badge",emoji: "🏅", cost: 35,  rarity: "rare",      description: "Awarded to brave explorers only" },
  { id: "wings",   name: "Glow Wings",    emoji: "✨", cost: 45,  rarity: "rare",      description: "Wings that shimmer with every lesson learned" },
  { id: "crown",   name: "Gold Crown",    emoji: "👑", cost: 60,  rarity: "legendary", description: "Reserved for the wisest of companions" },
];

// ── Onboarding Options ────────────────────────────────────────────────────────

export const INTEREST_OPTIONS = [
  { id: "space",    label: "Space",    emoji: "🚀" },
  { id: "animals",  label: "Animals",  emoji: "🦁" },
  { id: "music",    label: "Music",    emoji: "🎵" },
  { id: "art",      label: "Art",      emoji: "🎨" },
  { id: "sports",   label: "Sports",   emoji: "⚽" },
  { id: "stories",  label: "Stories",  emoji: "📖" },
  { id: "science",  label: "Science",  emoji: "🔬" },
  { id: "building", label: "Building", emoji: "🏗️" },
];

export const LEARNING_STYLE_OPTIONS = [
  {
    id: "visual",
    label: "Visual Explorer",
    emoji: "🗺️",
    description: "I love maps, pictures, and seeing things clearly.",
  },
  {
    id: "storyteller",
    label: "The Storyteller",
    emoji: "📖",
    description: "I love reading, writing, and telling stories.",
  },
  {
    id: "challenger",
    label: "The Challenger",
    emoji: "🧩",
    description: "I love puzzles, riddles, and hard problems.",
  },
];

// ── Helper ────────────────────────────────────────────────────────────────────

export function getMission(id: string): Mission | undefined {
  return MISSIONS.find(m => m.id === id);
}

export function getWorld(id: string): World | undefined {
  return WORLDS.find(w => w.id === id);
}

export function getWorldMissions(worldId: string): Mission[] {
  return MISSIONS.filter(m => m.worldId === worldId);
}

export function isWorldUnlocked(worldId: string, completedCount: number): boolean {
  const world = getWorld(worldId);
  return world ? completedCount >= world.unlockRequirement : false;
}
