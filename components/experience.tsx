"use client";

import { experience, ui } from "@/lib/content";
import { useLanguage } from "./language-provider";
import { Reveal } from "./reveal";
import { Bezel, Section, Tag, cn } from "./ui";

export function ExperienceSection() {
  const { t } = useLanguage();
  return (
    <Section id="experiencia" eyebrow={t(ui.experience.eyebrow)} title={t(ui.experience.title)}>
      <ol className="relative space-y-6 md:space-y-8">
        <span aria-hidden className="absolute bottom-4 left-[7px] top-4 w-px bg-gradient-to-b from-ember/60 via-white/10 to-transparent md:left-[calc(14rem+7px)]" />
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 0.05} className="relative grid gap-4 pl-8 md:grid-cols-[14rem_1fr] md:gap-0 md:pl-0">
            <span
              aria-hidden
              className={cn(
                "absolute left-0 top-7 h-[15px] w-[15px] rounded-full border-2 border-ink md:left-56",
                job.current ? "bg-ember shadow-[0_0_0_4px_rgba(249,115,22,0.18)]" : "bg-white/30",
              )}
            />
            <div className="md:pr-10 md:pt-6 md:text-right">
              {job.current ? (
                <span className="inline-flex rounded-full border border-ember/30 bg-ember/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ember">
                  {t(job.period)}
                </span>
              ) : (
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-fog">{t(job.period)}</p>
              )}
              <p className="mt-2 font-display text-lg font-semibold tracking-tight">{job.company}</p>
            </div>
            <div className="md:pl-10">
              <Bezel innerClassName="p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold tracking-tight">{t(job.role)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{t(job.summary)}</p>
                <ul className="mt-5 space-y-2.5">
                  {t(job.achievements).map((a) => (
                    <li key={a} className="flex gap-3 text-sm leading-relaxed text-white/80">
                      <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-ember" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </Bezel>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
