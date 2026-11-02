"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ui } from "@/lib/content";
import { useLanguage } from "./language-provider";
import { cn } from "./ui";

const links = [
  { id: "perfil", label: ui.nav.about },
  { id: "experiencia", label: ui.nav.experience },
  { id: "servicios", label: ui.nav.services },
  { id: "proyectos", label: ui.nav.projects },
  { id: "stack", label: ui.nav.stack },
] as const;

function LanguageSwitch({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  return (
    <div
      role="group"
      aria-label={t(ui.nav.language)}
      className={cn("flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5 font-mono text-[11px]", className)}
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors duration-300",
            locale === l ? "bg-white text-ink" : "text-fog hover:text-white",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Nav() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("top");
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => sectionObserver.observe(s));

    const topObserver = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    if (sentinel) topObserver.observe(sentinel);

    return () => {
      sectionObserver.disconnect();
      topObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 md:pt-6">
        <nav
          aria-label="Principal"
          className={cn(
            "pointer-events-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border px-2 py-2 transition-all duration-700 ease-spring md:w-auto md:justify-start",
            scrolled || open
              ? "border-white/10 bg-ink/70 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <a href="#top" className="flex items-center gap-2.5 rounded-full pl-2 pr-1" onClick={() => setOpen(false)}>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-ember to-iris font-display text-xs font-bold text-white">
              LG
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">Leonardo Guzmán</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-300",
                    active === l.id ? "text-white" : "text-fog hover:text-white",
                  )}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {t(l.label)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageSwitch className="hidden sm:flex" />
            <a
              href="#contacto"
              className="hidden rounded-full bg-white px-4 py-2 text-[13px] font-medium text-ink transition-transform duration-500 ease-spring hover:scale-[1.03] active:scale-[0.98] md:inline-flex"
            >
              {t(ui.nav.cta)}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t(ui.nav.close) : t(ui.nav.menu)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] md:hidden"
            >
              <span
                className={cn(
                  "absolute h-[1.5px] w-4 bg-white transition-transform duration-500 ease-spring",
                  open ? "rotate-45" : "-translate-y-[3px]",
                )}
              />
              <span
                className={cn(
                  "absolute h-[1.5px] w-4 bg-white transition-transform duration-500 ease-spring",
                  open ? "-rotate-45" : "translate-y-[3px]",
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-30 flex flex-col justify-between bg-ink/90 px-6 pb-10 pt-28 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {[...links, { id: "contacto", label: ui.nav.contact }].map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.06 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-2.5 font-display text-4xl font-semibold tracking-tight"
                  >
                    <span className="font-mono text-xs text-fog">0{i + 1}</span>
                    {t(l.label)}
                  </a>
                </motion.li>
              ))}
            </ul>
            <LanguageSwitch className="self-start" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
