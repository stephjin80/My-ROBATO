"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";

export default function AppGuard({ children }: { children: React.ReactNode }) {
  const { state } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!state.isOnboarded) {
      router.replace("/");
    }
  }, [state.isOnboarded, router]);

  if (!state.isOnboarded) return null;
  return <>{children}</>;
}
