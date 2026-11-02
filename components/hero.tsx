"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EnvelopeSimple, GithubLogo, LinkedinLogo, MapPin, ArrowDown } from "@phosphor-icons/react";
import { ui } from "@/lib/content";
import { site } from "@/lib/site";
import { useLanguage } from "./language-provider";
import { Bezel, PillButton } from "./ui";

const ease = [0.16, 1, 0.3, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1, delay, ease },
  };
}

function CodeCard() {
  const { t } = useLanguage();
  const k = "text-iris-soft";
  const s = "text-[#fdba74]";
  const p = "text-white/80";
  return (
    <div className="rounded-2xl border border-white/10 bg-ink/90 p-4 font-mono text-[11px] leading-relaxed shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 text-[10px] text-fog">leonardo.ts</span>
      </div>
      <pre className="overflow-hidden whitespace-pre">
        <span className={k}>export const</span> <span className={p}>leonardo</span> = {"{\n"}
        {"  "}role: <span className={s}>&quot;{t(ui.hero.role)}&quot;</span>,{"\n"}
        {"  "}stack: [<span className={s}>&quot;React&quot;</span>, <span className={s}>&quot;Next.js&quot;</span>, <span className={s}>&quot;FastAPI&quot;</span>],{"\n"}
        {"  "}ships: [<span className={s}>&quot;SaaS&quot;</span>, <span className={s}>&quot;ERP&quot;</span>, <span className={s}>&quot;APIs&quot;</span>, <span className={s}>&quot;IA&quot;</span>],{"\n"}
        {"  "}available: <span className={k}>true</span>,{"\n"}
        {"}"};
      </pre>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.22),transparent_65%)]" />
        <div className="absolute -right-32 top-20 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.22),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      </div>

      <div className="mx-auto grid min-h-[100dvh] w-full max-w-6xl items-center gap-14 px-5 pb-16 pt-32 sm:px-8 md:grid-cols-[1.25fr_1fr] md:gap-10 md:pt-36">
        <div>
          <motion.div {...fadeUp(0.05)} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs text-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t(ui.hero.availability)}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-fog">
              <MapPin size={14} weight="light" />
              {t(ui.hero.location)}
            </span>
          </motion.div>

          <motion.p {...fadeUp(0.15)} className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-fog">
            Leonardo Guzmán · {t(ui.hero.role)}
          </motion.p>

          <motion.h1
            {...fadeUp(0.25)}
            className="mt-4 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{t(ui.hero.headline)}</span>
          </motion.h1>

          <motion.p {...fadeUp(0.35)} className="mt-7 max-w-xl text-base leading-relaxed text-fog text-pretty md:text-lg">
            {t(ui.hero.lead)}
          </motion.p>

          <motion.div {...fadeUp(0.45)} className="mt-10 flex flex-wrap items-center gap-3">
            <PillButton href="#proyectos" icon={<ArrowDown size={15} weight="bold" />}>
              {t(ui.hero.primary)}
            </PillButton>
            <PillButton href="#contacto" variant="ghost">
              {t(ui.hero.secondary)}
            </PillButton>
          </motion.div>

          <motion.ul {...fadeUp(0.55)} className="mt-10 flex items-center gap-2">
            {[
              { href: site.github, label: "GitHub", Icon: GithubLogo },
              { href: site.linkedin, label: "LinkedIn", Icon: LinkedinLogo },
              { href: `mailto:${site.email}`, label: "Email", Icon: EnvelopeSimple },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-fog transition-all duration-500 ease-spring hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
                >
                  <Icon size={19} weight="light" />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-[22rem] md:max-w-none"
        >
          <Bezel className="rounded-[2rem]" innerClassName="overflow-hidden rounded-[calc(2rem-0.375rem)]">
            <div className="relative aspect-[4/5]">
              <Image
                src={site.photo}
                alt="Leonardo Guzmán"
                fill
                priority
                sizes="(min-width: 768px) 420px, 90vw"
                className="object-cover object-[50%_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/40" />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-ink/60 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="font-display text-sm font-semibold">Lanxa Technology</p>
                  <p className="text-xs text-fog">{t({ es: "Fundador", en: "Founder" })}</p>
                </div>
                <span className="rounded-full bg-gradient-to-r from-ember-deep to-iris px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
                  Full Stack
                </span>
              </div>
            </div>
          </Bezel>
          <div className="absolute -bottom-10 -left-16 hidden w-[21rem] lg:block">
            <CodeCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
