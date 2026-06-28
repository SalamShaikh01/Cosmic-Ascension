"use client";

import { ReactNode } from "react";
import { Background } from "./Background";

interface GameLayoutProps {
  children: ReactNode;
}

export function GameLayout({
  children,
}: GameLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">

      <Background />

      <div className="relative z-10">
        {children}
      </div>

    </main>
  );
}