"use client";

import { MotionConfig } from "motion/react";
import { LanguageProvider } from "./language-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LanguageProvider>
  );
}
