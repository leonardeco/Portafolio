"use client";

import { services, ui } from "@/lib/content";
import { useLanguage } from "./language-provider";
import { NamedIcon } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./ui";

export function Services() {
  const { t } = useLanguage();
  return (
    <Section id="servicios" eyebrow={t(ui.services.eyebrow)} title={t(ui.services.title)} lead={t(ui.services.lead)}>
      <div className="grid overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-white/[0.07] [gap:1px] sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.icon} delay={(i % 3) * 0.07} className="group relative bg-ink-2 p-7 md:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-spring group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_0%,rgba(124,92,255,0.12),transparent_60%)]"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-iris-soft transition-transform duration-700 ease-spring group-hover:-translate-y-1">
                  <NamedIcon name={s.icon} size={24} />
                </span>
                <span className="font-mono text-xs text-white/25">0{i + 1}</span>
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{t(s.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">{t(s.text)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
