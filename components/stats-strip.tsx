"use client";

import { marquee, ui } from "@/lib/content";
import { useLanguage } from "./language-provider";
import { Reveal } from "./reveal";

export function StatsStrip() {
  const { t } = useLanguage();
  return (
    <div className="relative border-y border-white/[0.06] bg-ink-2/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-8 md:grid-cols-4">
        {ui.stats.map((s, i) => (
          <Reveal
            key={s.value + i}
            delay={i * 0.08}
            className="border-white/[0.06] py-8 pr-4 odd:border-r md:border-r md:py-10 md:pl-6 md:first:pl-0 md:last:border-r-0 [&:nth-child(n+3)]:border-t md:[&:nth-child(n+3)]:border-t-0 even:pl-5 md:even:pl-6"
          >
            <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-fog">{t(s.label)}</p>
          </Reveal>
        ))}
      </div>
      <div className="mask-fade-x overflow-hidden border-t border-white/[0.06] py-5" aria-hidden>
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-sm text-white/45">
              {item}
              <span className="h-1 w-1 rounded-full bg-white/20" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
