import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — ROBATO",
  description:
    "Get in touch with the ROBATO team. We'd love to hear from you.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
