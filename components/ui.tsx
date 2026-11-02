"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "./reveal";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-fog">
      <span className="h-1 w-1 rounded-full bg-ember" />
      {children}
    </span>
  );
}

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, lead, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 md:py-36", className)}>
      <Reveal className="mb-12 max-w-3xl md:mb-16">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {lead && <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog text-pretty md:text-lg">{lead}</p>}
      </Reveal>
      {children}
    </section>
  );
}

export function Bezel({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div className={cn("rounded-[1.75rem] border border-white/[0.07] bg-white/[0.025] p-1.5", className)}>
      <div
        className={cn(
          "h-full rounded-[calc(1.75rem-0.375rem)] bg-gradient-to-b from-ink-3 to-ink-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

type PillButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  icon?: React.ReactNode;
  className?: string;
};

export function PillButton({ href, children, variant = "primary", external, icon, className }: PillButtonProps) {
  const isPrimary = variant === "primary";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full py-2 pl-5 pr-2 text-sm font-medium transition-all duration-500 ease-spring active:scale-[0.98]",
        isPrimary
          ? "bg-white text-ink hover:bg-white/90"
          : "border border-white/12 bg-white/[0.03] text-white hover:border-white/25 hover:bg-white/[0.07]",
        className,
      )}
    >
      {children}
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 ease-spring group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105",
          isPrimary ? "bg-ink/[0.08]" : "bg-white/10",
        )}
      >
        {icon ?? <ArrowUpRight size={15} weight="bold" />}
      </span>
    </a>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/70">
      {children}
    </span>
  );
}
