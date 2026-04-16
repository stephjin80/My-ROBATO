import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — My ROBATO",
  description:
    "Get in touch with the My ROBATO team. Whether you are a parent, educator, investor, or partner — we would love to hear from you.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
