export interface NavItem {
  label: string;
  href: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  ageRange: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
