"use client";
import { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { ACCESSORIES } from "@/lib/mock-data";

const RARITY_STYLES: Record<string, { badge: string; border: string; glow: string }> = {
  common:    { badge: "bg-white/10 text-white/40",         border: "border-white/10",     glow: "" },
  rare:      { badge: "bg-gold-400/15 text-gold-300",      border: "border-gold-400/20",  glow: "bg-gold-400/5" },
  legendary: { badge: "bg-coral-400/15 text-coral-300",    border: "border-coral-400/25", glow: "bg-coral-400/8" },
};

export default function RewardsPage() {
  const { state, purchaseAccessory, equipAccessory } = useApp();
  const { notes, purchasedAccessories, equippedAccessory } = state;
  const [toast, setToast] = useState<string | null>(null);

  function handleBuy(id: string, cost: number) {
    const ok = purchaseAccessory(id, cost);
    setToast(ok ? "Purchased! 🎉" : "Not enough notes 😢");
    setTimeout(() => setToast(null), 1800);
  }

  return (
    <div className="min-h-full bg-navy-900 text-white">
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-navy-800 border border-white/15 rounded-2xl px-5 py-3 text-sm font-bold text-white shadow-xl animate-bounce">
          {toast}
        </div>
      )}

      <div className="px-6 pt-12 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-white/40 text-sm mb-1">ROBATO's wardrobe</p>
            <h1 className="text-2xl font-black tracking-tight">Rewards</h1>
          </div>
          <div className="text-right">
            <p className="text-xs text-white/30 uppercase tracking-wider">Balance</p>
            <p className="text-xl font-black text-gold-300">🎵 {notes}</p>
          </div>
        </div>
      </div>

      {/* ROBATO preview */}
      <div className="mx-6 rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 border border-white/8 p-5 mb-5 flex items-center gap-4">
        <div className="relative w-20 h-24 flex-shrink-0">
          {equippedAccessory && (
            <span className="absolute -top-1 -right-1 text-2xl z-10">
              {ACCESSORIES.find(a => a.id === equippedAccessory)?.emoji}
            </span>
          )}
          <Image src="/robato-character.png" alt="ROBATO" fill className="object-contain" />
        </div>
        <div>
          <p className="font-bold text-sm text-white">
            {equippedAccessory
              ? `Wearing: ${ACCESSORIES.find(a => a.id === equippedAccessory)?.name}`
              : "Nothing equipped yet"}
          </p>
          <p className="text-xs text-white/35 mt-0.5">
            {equippedAccessory ? "Tap an item below to change or unequip" : "Buy an accessory and tap to equip it"}
          </p>
        </div>
      </div>

      <div className="px-6 pb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Accessories</p>
        <div className="grid grid-cols-2 gap-3">
          {ACCESSORIES.map(acc => {
            const owned   = purchasedAccessories.includes(acc.id);
            const equipped = equippedAccessory === acc.id;
            const canAfford = notes >= acc.cost;
            const r = RARITY_STYLES[acc.rarity];

            return (
              <div
                key={acc.id}
                className={`rounded-3xl border p-4 flex flex-col gap-2 relative overflow-hidden transition-all ${
                  equipped ? "border-mint-400/40" : r.border
                } ${r.glow || "bg-white/3"}`}
              >
                {equipped && (
                  <div className="absolute top-2.5 right-2.5 text-[9px] font-black uppercase tracking-wider bg-mint-400 text-navy-900 px-1.5 py-0.5 rounded-full">
                    ON
                  </div>
                )}

                <span className="text-4xl">{acc.emoji}</span>

                <div>
                  <p className="font-bold text-sm text-white">{acc.name}</p>
                  <p className="text-[11px] text-white/35 leading-snug mt-0.5">{acc.description}</p>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${r.badge}`}>
                    {acc.rarity}
                  </span>
                  <span className="text-xs font-bold text-gold-300">🎵 {acc.cost}</span>
                </div>

                {!owned && (
                  <button
                    onClick={() => handleBuy(acc.id, acc.cost)}
                    disabled={!canAfford}
                    className="mt-1 w-full py-2 rounded-xl text-xs font-bold transition-all active:scale-95 bg-gold-400/20 text-gold-300 hover:bg-gold-400/30 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Buy for {acc.cost}
                  </button>
                )}

                {owned && (
                  <button
                    onClick={() => equipAccessory(acc.id)}
                    className={`mt-1 w-full py-2 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                      equipped
                        ? "bg-mint-400/20 text-mint-300 hover:bg-mint-400/30"
                        : "bg-white/8 text-white/60 hover:bg-white/12"
                    }`}
                  >
                    {equipped ? "Unequip" : "Equip"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
