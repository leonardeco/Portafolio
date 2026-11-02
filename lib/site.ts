export const site = {
  name: "Leonardo Guzmán",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://leonardo-guzman.vercel.app",
  email: "leonardecoj@gmail.com",
  phone: "+57 322 699 3891",
  whatsapp: "573226993891",
  location: "Armenia, Quindío · Colombia",
  linkedin: "https://linkedin.com/in/leonardo-guzman-t",
  github: "https://github.com/leonardeco",
  githubUser: "leonardeco",
  photo: "/leonardo.png",
  /** Ruta dentro de /public de un CV sin datos de referencias. Si es null se ofrece por correo. */
  cvPath: null as string | null,
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
