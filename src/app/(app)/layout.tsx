import AppGuard from "@/components/app/AppGuard";
import BottomNav from "@/components/app/BottomNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppGuard>
      {/* Phone frame on desktop, full-screen on mobile */}
      <div className="min-h-screen bg-navy-950 flex items-center justify-center">
        <div className="w-full md:max-w-[430px] md:min-h-0 md:h-[900px] md:rounded-[44px] md:overflow-hidden md:shadow-2xl md:shadow-black/60 md:border md:border-white/8 flex flex-col bg-navy-900 relative min-h-screen">
          <main className="flex-1 overflow-y-auto overscroll-contain">
            {children}
          </main>
          <BottomNav />
        </div>
      </div>
    </AppGuard>
  );
}
