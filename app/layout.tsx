import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

const title = "Leonardo Guzmán — Desarrollador Full Stack";
const description =
  "Desarrollador Full Stack en Colombia: React, Next.js, Angular, Node.js, FastAPI y Spring Boot. ERPs, SaaS multi-tenant, APIs, integraciones de pago e IA aplicada.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s · Leonardo Guzmán" },
  description,
  applicationName: "Leonardo Guzmán",
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  keywords: [
    "Leonardo Guzmán",
    "Desarrollador Full Stack",
    "Full Stack Developer Colombia",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "FastAPI",
    "Spring Boot",
    "Node.js",
    "PostgreSQL",
    "SaaS",
    "ERP",
    "Armenia Quindío",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "es_CO",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: "Leonardo Guzmán",
    title,
    description,
    firstName: "Leonardo",
    lastName: "Guzmán",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Full Stack Developer",
  url: site.url,
  image: `${site.url}${site.photo}`,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Armenia", addressRegion: "Quindío", addressCountry: "CO" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Corporación Universitaria Iberoamericana" },
  worksFor: { "@type": "Organization", name: "Lanxa Technology" },
  knowsAbout: ["React", "Next.js", "Angular", "TypeScript", "Node.js", "FastAPI", "Spring Boot", "PostgreSQL", "Docker"],
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable} ${jakarta.variable}`}>
      <body className="grain">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
