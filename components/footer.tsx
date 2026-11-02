"use client";

import { ArrowUp } from "@phosphor-icons/react";
import { ui } from "@/lib/content";
import { site } from "@/lib/site";
import { useLanguage } from "./language-provider";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-fog sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-white/80">© {new Date().getFullYear()} {site.name}</p>
          <p className="mt-1 text-xs">{t(ui.footer.built)}</p>
        </div>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 text-xs transition-colors duration-300 hover:border-white/25 hover:text-white sm:self-auto"
        >
          {t(ui.footer.top)}
          <ArrowUp size={13} weight="bold" className="transition-transform duration-500 ease-spring group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
