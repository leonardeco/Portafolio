"use client";

import { stackGroups, ui } from "@/lib/content";
import { useLanguage } from "./language-provider";
import { Reveal } from "./reveal";
import { Bezel, Section } from "./ui";

export function Stack() {
  const { t } = useLanguage();
  return (
    <Section id="stack" eyebrow={t(ui.stack.eyebrow)} title={t(ui.stack.title)}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((group, i) => (
          <Reveal key={group.title.en} delay={(i % 4) * 0.06} className="h-full">
            <Bezel className="h-full" innerClassName="p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-semibold tracking-tight">{t(group.title)}</h3>
                <span className="font-mono text-[10px] text-white/25">{String(group.items.length).padStart(2, "0")}</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-[13px] text-white/80 transition-colors duration-300 hover:border-ember/40 hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Bezel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
