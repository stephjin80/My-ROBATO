import type { NavItem, Program, TeamMember } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
];

export const PROGRAMS: Program[] = [
  {
    id: "explorers",
    title: "Little Explorers",
    description:
      "A playful introduction to reading, writing, and numbers through interactive storytelling and games.",
    ageRange: "Ages 5–7",
    icon: "🌱",
    features: [
      "Phonics & early reading",
      "Number foundations",
      "Creative storytelling",
      "Color & shape recognition",
    ],
  },
  {
    id: "thinkers",
    title: "Young Thinkers",
    description:
      "Deepen critical thinking, math reasoning, and language arts with guided projects and challenges.",
    ageRange: "Ages 8–10",
    icon: "🔭",
    features: [
      "Math problem-solving",
      "Reading comprehension",
      "Science exploration",
      "Logical puzzles",
    ],
  },
  {
    id: "builders",
    title: "Future Builders",
    description:
      "Empower students with STEM foundations, coding basics, and collaborative learning experiences.",
    ageRange: "Ages 10–12",
    icon: "🚀",
    features: [
      "Intro to coding",
      "Engineering challenges",
      "Data & patterns",
      "Team projects",
    ],
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Dr. Maya Chen",
    role: "Chief Learning Officer",
    bio: "Former educator with 15+ years developing curriculum for elementary schools across Southeast Asia.",
  },
  {
    name: "Arin Patel",
    role: "Head of Product",
    bio: "EdTech specialist passionate about making premium learning accessible to every child.",
  },
  {
    name: "Leo Santos",
    role: "Lead Engineer",
    bio: "Full-stack engineer who believes technology, when thoughtfully designed, can transform education.",
  },
];

export const STATS = [
  { value: "50K+", label: "Students enrolled" },
  { value: "120+", label: "Learning modules" },
  { value: "4.9★", label: "Parent rating" },
  { value: "30+", label: "Countries reached" },
];
