"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, GithubLogo, LockSimple } from "@phosphor-icons/react";
import { projects, ui, type Project, type ProjectCategory, type ProjectStatus } from "@/lib/content";
import { site } from "@/lib/site";
import { useLanguage } from "./language-provider";
import { Reveal } from "./reveal";
import { PillButton, Section, Tag, cn } from "./ui";

type Filter = "all" | ProjectCategory;

const filters: Filter[] = ["all", "saas", "fintech", "commerce", "ai", "backend", "web"];

const statusStyles: Record<ProjectStatus, string> = {
  online: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  beta: "border-sky-400/25 bg-sky-400/10 text-sky-300",
  building: "border-amber-400/25 bg-amber-400/10 text-amber-200",
  done: "border-white/15 bg-white/[0.06] text-white/70",
};

const categoryGlow: Record<ProjectCategory, string> = {
  saas: "rgba(124,92,255,0.28)",
  fintech: "rgba(52,211,153,0.22)",
  commerce: "rgba(249,115,22,0.26)",
  ai: "rgba(217,70,239,0.22)",
  backend: "rgba(56,189,248,0.22)",
  web: "rgba(244,114,182,0.2)",
};

function StatusBadge({ status }: { status: ProjectStatus }) {
  const { t } = useLanguage();
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider", statusStyles[status])}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {t(ui.status[status])}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLanguage();
  const base =
    "group/link inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-500 ease-spring active:scale-[0.98]";
  const linkClass = cn(base, "border-white/10 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08]");
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={cn(base, "border-white bg-white text-ink hover:bg-white/90")}>
          {t(ui.projects.demo)}
          <ArrowUpRight size={13} weight="bold" className="transition-transform duration-500 ease-spring group-hover/link:-translate-y-px group-hover/link:translate-x-0.5" />
        </a>
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <GithubLogo size={14} weight="light" />
          {t(ui.projects.code)}
        </a>
      )}
      {project.privateRepo && (
        <span className="inline-flex items-center gap-1.5 px-2 py-2 text-xs text-fog">
          <LockSimple size={13} weight="light" />
          {t(ui.projects.privateCode)}
        </span>
      )}
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.1rem] border border-white/[0.06] bg-ink">
        <Image
          src={project.image}
          alt={`${project.name} — captura`}
          fill
          sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 92vw"
          className="object-cover object-top transition-transform duration-[1200ms] ease-spring group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-3/35 via-transparent to-transparent" />
      </div>
    );
  }
  return (
    <div
      className="relative flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-[1.1rem] border border-white/[0.06] bg-ink p-5"
      style={{ backgroundImage: `radial-gradient(circle at 85% 10%, ${categoryGlow[project.category]}, transparent 55%)` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)]"
      />
      <span className="relative font-mono text-[11px] text-white/40">~/{project.slug}</span>
      <div className="relative">
        <p className="font-display text-3xl font-semibold tracking-tight text-white/90 sm:text-4xl">{project.name}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[10px] text-white/60">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  const { t } = useLanguage();
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-white/[0.07] bg-white/[0.025] p-1.5 transition-colors duration-700 ease-spring hover:border-white/15">
      <div className="flex h-full flex-col rounded-[calc(1.75rem-0.375rem)] bg-gradient-to-b from-ink-3 to-ink-2 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-4">
        <ProjectVisual project={project} />
        <div className="flex flex-1 flex-col px-2 pb-2 pt-6 sm:px-3">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">{t(ui.categories[project.category])}</span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-1 text-sm text-iris-soft">{t(project.tagline)}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/70 text-pretty">{t(project.description)}</p>
          <ul className={cn("mt-5 grid gap-2", large && "sm:grid-cols-2")}>
            {t(project.highlights).map((h) => (
              <li key={h} className="flex gap-2.5 text-[13px] leading-snug text-white/75">
                <Check size={14} weight="bold" className="mt-0.5 flex-none text-ember" />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          <div className="mt-auto pt-7">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );
  const featured = filter === "all" ? visible.filter((p) => p.featured) : visible;
  const rest = filter === "all" ? visible.filter((p) => !p.featured) : [];

  return (
    <Section id="proyectos" eyebrow={t(ui.projects.eyebrow)} title={t(ui.projects.title)} lead={t(ui.projects.lead)}>
      <Reveal className="-mx-5 mb-10 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0">
        <div role="tablist" aria-label={t(ui.projects.title)} className="inline-flex gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "relative whitespace-nowrap rounded-full px-4 py-2 text-[13px] transition-colors duration-300",
                filter === f ? "text-ink" : "text-fog hover:text-white",
              )}
            >
              {filter === f && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">{f === "all" ? t(ui.projects.all) : t(ui.categories[f])}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, delay: Math.min(i, 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={p} large={filter === "all"} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {rest.length > 0 && (
        <>
          <Reveal className="mb-6 mt-16 flex items-center gap-4">
            <h3 className="font-display text-xl font-semibold tracking-tight">{t(ui.projects.more)}</h3>
            <span className="h-px flex-1 bg-white/10" />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </>
      )}

      <Reveal className="mt-14 flex justify-center">
        <PillButton href={site.github} external variant="ghost" icon={<GithubLogo size={15} weight="light" />}>
          {t(ui.projects.github)}
        </PillButton>
      </Reveal>
    </Section>
  );
}
