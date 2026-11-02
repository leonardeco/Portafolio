"use client";

import { Certificate, GraduationCap, Translate } from "@phosphor-icons/react";
import { education, ui } from "@/lib/content";
import { useLanguage } from "./language-provider";
import { Reveal } from "./reveal";
import { Bezel, Section } from "./ui";

export function Education() {
  const { t } = useLanguage();
  return (
    <Section id="formacion" eyebrow={t(ui.education.eyebrow)} title={t(ui.education.title)}>
      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal className="h-full">
          <Bezel className="h-full" innerClassName="flex h-full flex-col p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-ember">
              <GraduationCap size={22} weight="light" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{t(education.degree.title)}</h3>
            <p className="mt-2 text-sm text-white/75">{education.degree.school}</p>
            <p className="mt-1 font-mono text-xs text-fog">{t(education.degree.detail)}</p>
            <div className="mt-auto pt-8">
              <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-ember to-iris" />
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
                <Translate size={14} weight="light" />
                {t(ui.education.languages)}
              </p>
              <ul className="mt-4 space-y-2">
                {education.languages.map((l) => (
                  <li key={l.name.en} className="flex items-center justify-between text-sm">
                    <span>{t(l.name)}</span>
                    <span className="text-fog">{t(l.level)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Bezel>
        </Reveal>

        <div className="grid gap-4 lg:col-span-2">
          {education.certifications.map((c, i) => (
            <Reveal key={c.issuer} delay={i * 0.07}>
              <Bezel innerClassName="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="flex items-center gap-3 sm:w-48 sm:flex-none">
                  <Certificate size={22} weight="light" className="text-iris-soft" />
                  <p className="font-display font-semibold tracking-tight">{c.issuer}</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {t(c.items).map((item) => (
                    <li key={item} className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
