"use client";

import { ui } from "@/lib/content";
import { useLanguage } from "./language-provider";
import { NamedIcon } from "./icons";
import { Reveal } from "./reveal";
import { Bezel, Section } from "./ui";

export function About() {
  const { t } = useLanguage();
  return (
    <Section id="perfil" eyebrow={t(ui.about.eyebrow)} title={t(ui.about.title)}>
      <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14">
        <Reveal className="space-y-5 text-base leading-relaxed text-white/75 text-pretty md:text-lg">
          {t(ui.about.body).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {ui.about.pillars.map((pillar, i) => (
            <Reveal key={pillar.icon} delay={i * 0.08}>
              <Bezel className="h-full" innerClassName="p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-ember">
                  <NamedIcon name={pillar.icon} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{t(pillar.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{t(pillar.text)}</p>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
