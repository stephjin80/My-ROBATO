import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home",             href: "/" },
  { label: "About ROBATO",     href: "/about-robato" },
  { label: "How It Works",     href: "/how-it-works" },
  { label: "Inside My ROBATO", href: "/inside-my-robato" },
  { label: "Why My ROBATO",    href: "/why-my-robato" },
  { label: "Contact",          href: "/contact" },
];

export const STATS = [
  { value: "50K+", label: "Families enrolled" },
  { value: "120+", label: "Learning modules" },
  { value: "4.9★", label: "Parent rating" },
  { value: "30+",  label: "Countries reached" },
];

export const SOLUTION_PILLARS = [
  {
    number: "01",
    icon: "◈",
    title: "Customized Curriculum",
    description:
      "Every child's journey in My ROBATO is uniquely theirs. Content adapts to their level, pace, learning style, and interests — building a curriculum that actually fits.",
    points: [
      "Level-appropriate content",
      "Interest-based modules",
      "Adaptive pacing",
      "Multi-subject coverage",
    ],
    accent: "mint",
  },
  {
    number: "02",
    icon: "✦",
    title: "Core Skill Development",
    description:
      "Beyond knowledge, My ROBATO builds the four capabilities that will define your child's future: thinking clearly, expressing confidently, creating boldly, and engaging deeply.",
    points: [
      "Critical thinking",
      "Creative expression",
      "Focused engagement",
      "Emotional intelligence",
    ],
    accent: "coral",
  },
  {
    number: "03",
    icon: "◎",
    title: "Story & Gamification",
    description:
      "Children don't need to be tricked into learning — they need a reason to care. My ROBATO uses story-driven worlds and meaningful achievement to make every lesson an adventure.",
    points: [
      "Narrative-driven worlds",
      "Mission-based learning",
      "Reward progression",
      "Choice and agency",
    ],
    accent: "gold",
  },
];

export const FOUR_LAYERS = [
  {
    number: "01",
    name: "Learning Layer",
    tagline: "Structured. Adaptive. Personal.",
    description:
      "A rigorous yet flexible curriculum that maps each child's skills, identifies gaps, and builds a unique pathway forward — lesson by lesson.",
    color: "mint",
  },
  {
    number: "02",
    name: "Story Layer",
    tagline: "Context. Meaning. Stakes.",
    description:
      "Learning is wrapped in story worlds — Forest, Lab, Space, Ocean — where every lesson carries narrative weight and every choice matters.",
    color: "gold",
  },
  {
    number: "03",
    name: "Engagement Layer",
    tagline: "Focus. Motivation. Joy.",
    description:
      "Missions, challenges, and care routines ensure children always have a reason to return — and always feel the satisfaction of real growth.",
    color: "coral",
  },
  {
    number: "04",
    name: "Companion Layer",
    tagline: "Personalized. Emotional. Evolving.",
    description:
      "ROBATO learns from each child, celebrates wins, supports struggles, and becomes a trusted presence in their learning life — day after day.",
    color: "mint",
  },
];

export const ENGINE_SYSTEMS = [
  {
    icon: "⬡",
    title: "Personalization Engine",
    description:
      "Continuously maps each child's profile — skill level, learning style, interests, and emotional state — to adapt all content in real time.",
  },
  {
    icon: "◈",
    title: "Adaptive Learning System",
    description:
      "Sequences and paces curriculum dynamically, ensuring each lesson is appropriately challenging without causing frustration or boredom.",
  },
  {
    icon: "◎",
    title: "Narrative Generation System",
    description:
      "Weaves personalized story outcomes from the child's choices and progress, making each child's journey genuinely unique.",
  },
  {
    icon: "✦",
    title: "Interaction Model",
    description:
      "Governs how ROBATO communicates, responds, and expresses emotion — creating a companion that feels alive, caring, and consistent.",
  },
];

export const STORY_WORLDS = [
  {
    name: "Forest World",
    theme: "Nature · Discovery · Language",
    description: "Where stories grow like trees and every question leads somewhere beautiful.",
    color: "from-emerald-900 to-teal-900",
    badge: "🌿",
  },
  {
    name: "Lab World",
    theme: "Science · Experiment · Logic",
    description: "Every hypothesis is a mission. Every experiment, a breakthrough waiting to happen.",
    color: "from-navy-900 to-indigo-900",
    badge: "🔬",
  },
  {
    name: "Space World",
    theme: "Exploration · Math · Wonder",
    description: "The universe is the classroom. The stars are the curriculum.",
    color: "from-slate-900 to-navy-900",
    badge: "🚀",
  },
];

export const WHY_PILLARS = [
  {
    icon: "◎",
    title: "A holistic learning ecosystem",
    description:
      "My ROBATO does not teach subjects. It develops the whole child — their thinking, expression, creativity, and resilience.",
  },
  {
    icon: "◈",
    title: "True personalization at scale",
    description:
      "Every child gets a curriculum built for them, not a template. ROBATO adapts to their pace, style, and interests continuously.",
  },
  {
    icon: "✦",
    title: "Built for ongoing engagement",
    description:
      "With story progression, rewards, and a companion that evolves, children always have a reason to come back — and genuinely want to.",
  },
  {
    icon: "⬡",
    title: "Designed to grow with the child",
    description:
      "My ROBATO scales from ages 5 through 12, adapting its depth, style, and challenge as the child develops.",
  },
];
