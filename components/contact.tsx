"use client";

import { useState } from "react";
import { Check, Copy, EnvelopeSimple, FileArrowDown, GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import { ui } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";
import { useLanguage } from "./language-provider";
import { Reveal } from "./reveal";
import { Eyebrow, PillButton } from "./ui";

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const cvHref = site.cvPath ?? `mailto:${site.email}?subject=${encodeURIComponent(t(ui.contact.cvSubject))}`;

  const channels = [
    { label: "WhatsApp", value: site.phone, href: whatsappLink(t(ui.contact.whatsappMessage)), Icon: WhatsappLogo },
    { label: "LinkedIn", value: "in/leonardo-guzman-t", href: site.linkedin, Icon: LinkedinLogo },
    { label: "GitHub", value: `@${site.githubUser}`, href: site.github, Icon: GithubLogo },
  ];

  return (
    <section id="contacto" className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 md:py-36">
      <Reveal>
        <div className="rounded-[2.25rem] border border-white/[0.08] bg-white/[0.025] p-1.5">
          <div className="relative overflow-hidden rounded-[calc(2.25rem-0.375rem)] bg-ink-2 px-6 py-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:px-12 md:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.25),transparent_65%)]" />
              <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.2),transparent_65%)]" />
            </div>

            <div className="relative grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
              <div>
                <Eyebrow>{t(ui.contact.eyebrow)}</Eyebrow>
                <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
                  {t(ui.contact.title)}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-fog md:text-lg">{t(ui.contact.lead)}</p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <PillButton href={`mailto:${site.email}`} icon={<EnvelopeSimple size={15} weight="bold" />}>
                    {site.email}
                  </PillButton>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-white/80 transition-all duration-500 ease-spring hover:border-white/25 hover:text-white active:scale-[0.98]"
                  >
                    {copied ? <Check size={15} weight="bold" className="text-emerald-400" /> : <Copy size={15} weight="light" />}
                    <span aria-live="polite">{copied ? t(ui.contact.copied) : t(ui.contact.copy)}</span>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {channels.map(({ label, value, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-ink/50 px-5 py-4 transition-all duration-500 ease-spring hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/[0.05] text-white/80">
                      <Icon size={20} weight="light" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-fog">{label}</span>
                      <span className="block truncate text-sm">{value}</span>
                    </span>
                    <span aria-hidden className="text-fog transition-transform duration-500 ease-spring group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white">
                      ↗
                    </span>
                  </a>
                ))}
                <a
                  href={cvHref}
                  {...(site.cvPath ? { download: true } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-ember/25 bg-ember/[0.07] px-5 py-4 transition-all duration-500 ease-spring hover:border-ember/50 hover:bg-ember/[0.12]"
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-ember/15 text-ember">
                    <FileArrowDown size={20} weight="light" />
                  </span>
                  <span className="flex-1 text-sm font-medium">{site.cvPath ? t(ui.contact.cv) : t(ui.contact.cvRequest)}</span>
                </a>
                <p className="px-1 pt-2 text-xs text-fog">{t(ui.contact.references)}</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
