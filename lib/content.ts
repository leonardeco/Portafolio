import type { Localized } from "./i18n";

export type ProjectStatus = "online" | "beta" | "building" | "done";
export type ProjectCategory = "saas" | "fintech" | "commerce" | "backend" | "web" | "ai";

export type Project = {
  slug: string;
  name: string;
  tagline: Localized;
  description: Localized;
  highlights: Localized<string[]>;
  stack: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  featured?: boolean;
  demo?: string;
  repo?: string;
  privateRepo?: boolean;
  image?: string;
};

export type Experience = {
  company: string;
  role: Localized;
  period: Localized;
  current?: boolean;
  summary: Localized;
  achievements: Localized<string[]>;
  stack: string[];
};

export const ui = {
  nav: {
    about: { es: "Perfil", en: "Profile" },
    experience: { es: "Experiencia", en: "Experience" },
    services: { es: "Servicios", en: "Services" },
    projects: { es: "Proyectos", en: "Projects" },
    stack: { es: "Stack", en: "Stack" },
    contact: { es: "Contacto", en: "Contact" },
    cta: { es: "Hablemos", en: "Let's talk" },
    menu: { es: "Menú", en: "Menu" },
    close: { es: "Cerrar", en: "Close" },
    language: { es: "Cambiar idioma", en: "Switch language" },
  },
  hero: {
    availability: { es: "Disponible para nuevos retos", en: "Open to new opportunities" },
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    headline: {
      es: "Llevo productos de software de la idea a producción.",
      en: "I take software products from idea to production.",
    },
    lead: {
      es: "Frontend con React, Next.js y Angular; backend con Node.js, FastAPI y Spring Boot. Diseño APIs, modelo datos, aseguro el acceso por roles y despliego con Docker. Fundador de Lanxa Technology.",
      en: "Frontend with React, Next.js and Angular; backend with Node.js, FastAPI and Spring Boot. I design APIs, model data, secure role-based access and ship with Docker. Founder of Lanxa Technology.",
    },
    primary: { es: "Ver proyectos", en: "View projects" },
    secondary: { es: "Contactar", en: "Get in touch" },
    location: { es: "Armenia, Colombia · Remoto", en: "Armenia, Colombia · Remote" },
  },
  about: {
    eyebrow: { es: "Perfil", en: "Profile" },
    title: {
      es: "Ingeniería pensada para el negocio, no solo para el editor.",
      en: "Engineering built for the business, not just the editor.",
    },
    body: {
      es: [
        "Soy desarrollador Full Stack con más de dos años construyendo aplicaciones web de punta a punta: ERPs empresariales, productos SaaS multi-tenant, integraciones de pago y facturación electrónica, y herramientas internas que la gente usa todos los días.",
        "Me interesa la parte que no se ve en una demo: endpoints sin autenticación, condiciones de carrera, consultas lentas y llamadas redundantes. Trabajo con principios SOLID, código limpio y equipos Scrum, y mientras tanto curso Ingeniería de Software.",
      ],
      en: [
        "I'm a Full Stack developer with 2+ years building end-to-end web applications: enterprise ERPs, multi-tenant SaaS products, payment and e-invoicing integrations, and internal tools people rely on every day.",
        "I care about what a demo doesn't show: unauthenticated endpoints, race conditions, slow queries and redundant calls. I work with SOLID principles, clean code and Scrum teams, while completing a Software Engineering degree.",
      ],
    },
    pillars: [
      {
        icon: "stack",
        title: { es: "Full stack real", en: "True full stack" },
        text: {
          es: "Del modelo de datos a la interfaz: React, Angular, FastAPI, Spring Boot y Node.js.",
          en: "From data model to interface: React, Angular, FastAPI, Spring Boot and Node.js.",
        },
      },
      {
        icon: "shield",
        title: { es: "Seguridad por diseño", en: "Security by design" },
        text: {
          es: "RBAC, autenticación con JWT y cookies httpOnly, aislamiento por tenant y auditorías técnicas.",
          en: "RBAC, JWT and httpOnly cookie auth, tenant isolation and technical audits.",
        },
      },
      {
        icon: "gauge",
        title: { es: "Rendimiento medible", en: "Measurable performance" },
        text: {
          es: "Menos llamadas redundantes, SQL más eficiente y caché con Redis donde importa.",
          en: "Fewer redundant calls, leaner SQL and Redis caching where it matters.",
        },
      },
      {
        icon: "sparkle",
        title: { es: "IA aplicada", en: "Applied AI" },
        text: {
          es: "Asistentes con uso de herramientas, bots de WhatsApp y Telegram y automatización para pymes.",
          en: "Tool-using assistants, WhatsApp and Telegram bots and automation for SMBs.",
        },
      },
    ],
  },
  stats: [
    { value: "2+", label: { es: "años construyendo software", en: "years building software" } },
    { value: "3", label: { es: "empresas en Colombia", en: "companies in Colombia" } },
    { value: "20+", label: { es: "repositorios públicos", en: "public repositories" } },
    { value: "5", label: { es: "productos y sitios en línea", en: "products & sites live" } },
  ],
  experience: {
    eyebrow: { es: "Trayectoria", en: "Career" },
    title: { es: "Experiencia profesional", en: "Professional experience" },
  },
  services: {
    eyebrow: { es: "Servicios", en: "Services" },
    title: {
      es: "Lo que puedo construir para su equipo o empresa.",
      en: "What I can build for your team or company.",
    },
    lead: {
      es: "Como parte de un equipo de producto o como freelance, con entregables claros y código que otro desarrollador puede mantener.",
      en: "As part of a product team or as a freelancer, with clear deliverables and code another developer can maintain.",
    },
  },
  projects: {
    eyebrow: { es: "Portafolio", en: "Portfolio" },
    title: { es: "Proyectos seleccionados", en: "Selected work" },
    lead: {
      es: "Productos propios, trabajo para clientes y proyectos en equipo. Cada estado es honesto: beta significa desplegado y usable, todavía sin validación comercial.",
      en: "Own products, client work and team projects. Every status is honest: beta means deployed and usable, not yet commercially validated.",
    },
    all: { es: "Todos", en: "All" },
    more: { es: "Más proyectos", en: "More projects" },
    demo: { es: "Ver demo", en: "Live demo" },
    code: { es: "Código", en: "Code" },
    privateCode: { es: "Código privado", en: "Private code" },
    github: { es: "Ver todo en GitHub", en: "See everything on GitHub" },
  },
  stack: {
    eyebrow: { es: "Stack", en: "Stack" },
    title: { es: "Herramientas con las que entrego", en: "The tools I ship with" },
  },
  education: {
    eyebrow: { es: "Formación", en: "Education" },
    title: { es: "Formación y certificaciones", en: "Education & certifications" },
    languages: { es: "Idiomas", en: "Languages" },
  },
  contact: {
    eyebrow: { es: "Contacto", en: "Contact" },
    title: {
      es: "¿Tiene un proyecto o una vacante? Conversemos.",
      en: "Have a project or an opening? Let's talk.",
    },
    lead: {
      es: "Respondo rápido por correo o WhatsApp. Abierto a posiciones Full Stack, Frontend o Backend, remoto o híbrido, y a proyectos freelance.",
      en: "I reply quickly by email or WhatsApp. Open to Full Stack, Frontend or Backend roles, remote or hybrid, and freelance projects.",
    },
    copy: { es: "Copiar", en: "Copy" },
    copied: { es: "Copiado", en: "Copied" },
    whatsappMessage: {
      es: "Hola Leonardo, vi su portafolio y me gustaría conversar.",
      en: "Hi Leonardo, I saw your portfolio and would like to talk.",
    },
    cv: { es: "Descargar CV", en: "Download CV" },
    cvRequest: { es: "Solicitar CV", en: "Request CV" },
    cvSubject: { es: "Solicitud de hoja de vida", en: "CV request" },
    references: {
      es: "Referencias laborales disponibles a solicitud.",
      en: "Professional references available upon request.",
    },
  },
  footer: {
    built: { es: "Hecho con Next.js, TypeScript y Tailwind CSS.", en: "Built with Next.js, TypeScript and Tailwind CSS." },
    top: { es: "Volver arriba", en: "Back to top" },
  },
  status: {
    online: { es: "En línea", en: "Live" },
    beta: { es: "Beta", en: "Beta" },
    building: { es: "En desarrollo", en: "In progress" },
    done: { es: "Completado", en: "Completed" },
  },
  categories: {
    saas: { es: "SaaS", en: "SaaS" },
    fintech: { es: "Fintech", en: "Fintech" },
    commerce: { es: "E-commerce", en: "E-commerce" },
    backend: { es: "APIs", en: "APIs" },
    web: { es: "Web", en: "Web" },
    ai: { es: "IA", en: "AI" },
  },
} as const;

export const experience: Experience[] = [
  {
    company: "Lanxa Technology",
    role: { es: "Fundador · Desarrollador Full Stack", en: "Founder · Full Stack Developer" },
    period: { es: "Actual", en: "Present" },
    current: true,
    summary: {
      es: "Estudio de software en Armenia que construye productos SaaS con IA, bots y automatización para pymes de LATAM.",
      en: "Software studio in Armenia building AI-powered SaaS products, bots and automation for LATAM SMBs.",
    },
    achievements: {
      es: [
        "Diseño y desarrollo de Lanxa ERP: multi-tenant con seguridad a nivel de fila en PostgreSQL, motor contable de partida doble e inventario FEFO.",
        "Lanzamiento de productos en beta pública (MenuFlow, NEXA, MT5 Señales) con despliegue en Vercel y bases de datos en Neon.",
        "Sitios corporativos para clientes con SEO técnico, datos estructurados y canales de venta por WhatsApp.",
      ],
      en: [
        "Designed and built Lanxa ERP: multi-tenant with PostgreSQL row-level security, double-entry accounting engine and FEFO inventory.",
        "Shipped public beta products (MenuFlow, NEXA, MT5 Signals) deployed on Vercel with Neon databases.",
        "Corporate websites for clients with technical SEO, structured data and WhatsApp sales channels.",
      ],
    },
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Prisma", "Docker", "Vercel"],
  },
  {
    company: "Bitwan",
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    period: { es: "Ago 2026 — Oct 2026", en: "Aug 2026 — Oct 2026" },
    summary: {
      es: "Evolución de aplicaciones para operación de campo y administración, en un equipo ágil.",
      en: "Evolving field-operations and back-office applications within an agile team.",
    },
    achievements: {
      es: [
        "Nuevos endpoints REST para ampliar funcionalidades y mejorar el comportamiento general de la aplicación.",
        "Optimización de la comunicación entre módulos: menos llamadas redundantes y consultas SQL más eficientes.",
        "Refactorización del frontend en TypeScript con mejor experiencia de usuario y tiempos de carga más rápidos.",
        "Autenticación y control de acceso por roles (RBAC) con buenas prácticas de seguridad.",
        "Servicios contenerizados con Docker y flujo Git/GitHub en equipo Scrum.",
      ],
      en: [
        "New REST endpoints to extend features and improve overall application behavior.",
        "Optimized inter-module communication: fewer redundant calls and more efficient SQL queries.",
        "Refactored the TypeScript frontend for better UX and faster load times.",
        "Authentication and role-based access control (RBAC) following security best practices.",
        "Containerized services with Docker and Git/GitHub flow within a Scrum team.",
      ],
    },
    stack: ["TypeScript", "REST APIs", "PostgreSQL", "RBAC", "Docker", "Postman"],
  },
  {
    company: "Super Ozono Global",
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    period: { es: "Mar 2025 — Ago 2026", en: "Mar 2025 — Aug 2026" },
    summary: {
      es: "Desarrollo full stack de un ERP empresarial con facturación electrónica, contabilidad y pagos.",
      en: "Full stack development of an enterprise ERP with e-invoicing, accounting and payments.",
    },
    achievements: {
      es: [
        "Frontend en React y TypeScript; backend en Python con FastAPI y APIs REST.",
        "Modelado de PostgreSQL y caché con Redis para mejorar el rendimiento.",
        "Integración de pasarelas de pago y módulos de facturación electrónica y contabilidad.",
        "Auditoría técnica que detectó endpoints sin autenticación y una condición de carrera en la numeración de facturas electrónicas DIAN.",
        "RBAC bajo principios SOLID y despliegue con Docker y Docker Compose.",
      ],
      en: [
        "React and TypeScript frontend; Python FastAPI backend with REST APIs.",
        "PostgreSQL data modeling and Redis caching to improve performance.",
        "Integrated payment gateways plus e-invoicing and accounting modules.",
        "Technical audit that uncovered unauthenticated endpoints and a race condition in DIAN e-invoice numbering.",
        "RBAC under SOLID principles, deployed with Docker and Docker Compose.",
      ],
    },
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    company: "LINK NETWORKS SAS",
    role: { es: "Desarrollador de Software · Freelance", en: "Software Developer · Freelance" },
    period: { es: "Feb 2024 — Feb 2025", en: "Feb 2024 — Feb 2025" },
    summary: {
      es: "Aplicaciones web y de escritorio para operación interna.",
      en: "Web and desktop applications for internal operations.",
    },
    achievements: {
      es: [
        "Aplicaciones con Java y Spring Boot e interfaces con Angular y TypeScript.",
        "Diseño, integración y pruebas de APIs REST validadas con Postman.",
        "Principios SOLID y código limpio para mejorar la mantenibilidad.",
      ],
      en: [
        "Applications with Java and Spring Boot, interfaces with Angular and TypeScript.",
        "Designed, integrated and tested REST APIs validated with Postman.",
        "SOLID principles and clean code to improve maintainability.",
      ],
    },
    stack: ["Java", "Spring Boot", "Angular", "TypeScript", "MySQL", "Git"],
  },
];

export const services = [
  {
    icon: "browsers",
    title: { es: "Aplicaciones web full stack", en: "Full stack web applications" },
    text: {
      es: "Productos completos con React, Next.js o Angular y APIs propias, listos para producción.",
      en: "Complete products with React, Next.js or Angular and custom APIs, production-ready.",
    },
  },
  {
    icon: "buildings",
    title: { es: "SaaS y ERPs multi-tenant", en: "Multi-tenant SaaS & ERPs" },
    text: {
      es: "Aislamiento por empresa, roles, suscripciones, contabilidad, inventario y facturación.",
      en: "Per-company isolation, roles, subscriptions, accounting, inventory and invoicing.",
    },
  },
  {
    icon: "plugs",
    title: { es: "APIs e integraciones", en: "APIs & integrations" },
    text: {
      es: "APIs REST documentadas con OpenAPI, pasarelas de pago (Wompi, Stripe) y servicios externos.",
      en: "OpenAPI-documented REST APIs, payment gateways (Wompi, Stripe) and third-party services.",
    },
  },
  {
    icon: "robot",
    title: { es: "Automatización e IA", en: "Automation & AI" },
    text: {
      es: "Bots de WhatsApp y Telegram, asistentes con IA sobre datos reales y flujos automatizados.",
      en: "WhatsApp and Telegram bots, AI assistants over real data and automated workflows.",
    },
  },
  {
    icon: "shieldCheck",
    title: { es: "Auditoría y seguridad", en: "Audits & security" },
    text: {
      es: "Revisión de autenticación, permisos, condiciones de carrera y exposición de datos.",
      en: "Review of authentication, permissions, race conditions and data exposure.",
    },
  },
  {
    icon: "lightning",
    title: { es: "Rendimiento y refactor", en: "Performance & refactoring" },
    text: {
      es: "Consultas SQL eficientes, caché, menos peticiones y código más mantenible.",
      en: "Efficient SQL, caching, fewer requests and more maintainable code.",
    },
  },
] as const;

export const projects: Project[] = [
  {
    slug: "menuflow",
    name: "MenuFlow",
    tagline: { es: "SaaS multi-restaurante", en: "Multi-restaurant SaaS" },
    description: {
      es: "Pedidos web, QR de mesa y cocina en tiempo real para restaurantes, con registro, prueba gratuita de 14 días y suscripción.",
      en: "Web ordering, table QR codes and a real-time kitchen display for restaurants, with sign-up, 14-day trial and subscriptions.",
    },
    highlights: {
      es: ["265 pruebas automatizadas", "API documentada con OpenAPI", "Aislamiento de datos por restaurante", "Cobro con Wompi o WhatsApp"],
      en: ["265 automated tests", "OpenAPI-documented API", "Per-restaurant data isolation", "Billing via Wompi or WhatsApp"],
    },
    stack: ["Next.js 15", "TypeScript", "Prisma", "Neon", "Tailwind", "Vercel"],
    category: "saas",
    status: "beta",
    featured: true,
    demo: "https://menu-flow-navy.vercel.app",
    privateRepo: true,
    image: "/projects/menuflow.png",
  },
  {
    slug: "lanxa-erp",
    name: "Lanxa ERP",
    tagline: { es: "ERP multi-tenant para pymes", en: "Multi-tenant ERP for SMBs" },
    description: {
      es: "Contabilidad, ventas, compras, cartera, inventario y reportes financieros en un solo sistema, con aislamiento completo por empresa.",
      en: "Accounting, sales, purchasing, receivables, inventory and financial reports in one system, fully isolated per company.",
    },
    highlights: {
      es: ["RLS en PostgreSQL por tenant", "Asientos de partida doble automáticos", "Inventario FEFO con kardex", "P&L, balance y aging de cartera"],
      en: ["PostgreSQL RLS per tenant", "Automatic double-entry postings", "FEFO inventory with stock ledger", "P&L, balance sheet and AR aging"],
    },
    stack: ["FastAPI", "React 19", "SQLAlchemy 2", "PostgreSQL", "Docker", "Terraform"],
    category: "saas",
    status: "building",
    featured: true,
    repo: "https://github.com/leonardeco/Lanxa",
  },
  {
    slug: "nexa",
    name: "NEXA Sports Nutrition",
    tagline: { es: "E-commerce con pagos y asistente IA", en: "E-commerce with payments and AI assistant" },
    description: {
      es: "Tienda de suplementos con catálogo en PostgreSQL, cobro en línea y un asistente de ventas que consulta el catálogo real. Evolución de una SPA estática a monorepo full stack.",
      en: "Supplement store with a PostgreSQL catalog, online checkout and a sales assistant that queries the real catalog. Evolved from a static SPA into a full stack monorepo.",
    },
    highlights: {
      es: ["Dominio puro sin framework (arquitectura hexagonal)", "Wompi: PSE, Nequi y tarjeta", "Búsqueda semántica con pgvector", "Manifiestos de Kubernetes"],
      en: ["Framework-free domain layer (hexagonal)", "Wompi: PSE, Nequi and cards", "Semantic search with pgvector", "Kubernetes manifests"],
    },
    stack: ["Next.js 15", "TypeScript", "Prisma", "pgvector", "Tailwind 4", "Wompi"],
    category: "commerce",
    status: "beta",
    featured: true,
    demo: "https://nexa-sports-nutrition-web.vercel.app",
    repo: "https://github.com/leonardeco/NEXA-Sports-Nutrition",
    image: "/projects/nexa.png",
  },
  {
    slug: "mt5-signals",
    name: "MT5 Señales",
    tagline: { es: "Terminal de señales y riesgo", en: "Signals & risk terminal" },
    description: {
      es: "Radar de señales para MetaTrader 5 con gestión de riesgo en el servidor y un laboratorio que bloquea el auto-trading hasta que la estadística lo justifique.",
      en: "Signal radar for MetaTrader 5 with server-side risk management and a lab that blocks auto-trading until the statistics justify it.",
    },
    highlights: {
      es: ["Escaneo de 5 símbolos cada 1,5 s", "Kill switch al −3 % diario", "Backtest con spread, comisión y deslizamiento", "Prueba en sombra con huella SHA-256"],
      en: ["Scans 5 symbols every 1.5 s", "Kill switch at −3% daily", "Backtests with spread, fees and slippage", "Shadow testing with SHA-256 fingerprint"],
    },
    stack: ["Python", "FastAPI", "WebSockets", "pandas", "TypeScript", "MetaTrader 5"],
    category: "fintech",
    status: "beta",
    featured: true,
    demo: "https://mt5-signals.vercel.app",
    repo: "https://github.com/leonardeco/MT5-Signals",
    image: "/projects/mt5-signals.png",
  },
  {
    slug: "ganancia",
    name: "GanancIA",
    tagline: { es: "Inteligencia financiera para restaurantes", en: "Financial intelligence for restaurants" },
    description: {
      es: "Micro-SaaS que convierte los datos de un restaurante en decisiones: KPIs, ingeniería de menú, detección de fugas y un chatbot que responde en lenguaje natural.",
      en: "Micro-SaaS that turns restaurant data into decisions: KPIs, menu engineering, leak detection and a chatbot that answers in natural language.",
    },
    highlights: {
      es: ["Matriz BCG de ingeniería de menú", "Alertas de costo, cancelaciones y mermas", "Asistente IA sobre las métricas"],
      en: ["BCG menu-engineering matrix", "Cost, cancellation and waste alerts", "AI assistant over the metrics"],
    },
    stack: ["Next.js", "Fastify", "Drizzle", "PostgreSQL", "Claude API"],
    category: "ai",
    status: "building",
    featured: true,
    repo: "https://github.com/leonardeco/GanancIA",
  },
  {
    slug: "nighttable",
    name: "NightTable CO",
    tagline: { es: "Marketplace de reservas + SaaS multi-sede", en: "Booking marketplace + multi-venue SaaS" },
    description: {
      es: "Plataforma para descubrir y reservar restaurantes, bares y discotecas en Colombia, con planes SaaS para los locales.",
      en: "Platform to discover and book restaurants, bars and clubs in Colombia, with SaaS plans for venues.",
    },
    highlights: {
      es: ["JWT con rotación de refresh y OAuth", "Reservas con HOLD y locks en Redis", "Suscripciones con Stripe", "Monorepo con Turborepo"],
      en: ["JWT refresh rotation and OAuth", "Bookings with HOLD and Redis locks", "Stripe subscriptions", "Turborepo monorepo"],
    },
    stack: ["Next.js 15", "Fastify", "PostgreSQL", "Drizzle", "Redis", "Stripe"],
    category: "saas",
    status: "building",
    featured: true,
    repo: "https://github.com/leonardeco/saas-boilerplate",
  },
  {
    slug: "quant-guardian",
    name: "Quant Guardian",
    tagline: { es: "Vigilancia de riesgo para cuentas MT5", en: "Risk guard for MT5 accounts" },
    description: {
      es: "El asesor informa y ejecuta; el servidor decide. Control de drawdown, estrategias, copia entre cuentas y alertas por Telegram.",
      en: "The expert advisor reports and executes; the server decides. Drawdown control, strategies, account copying and Telegram alerts.",
    },
    highlights: {
      es: ["Estados NORMAL, ALERT y KILL", "Webhooks de TradingView con deduplicación", "Pausa automática en NFP, CPI y FOMC"],
      en: ["NORMAL, ALERT and KILL states", "Deduplicated TradingView webhooks", "Auto-pause on NFP, CPI and FOMC"],
    },
    stack: ["FastAPI", "PostgreSQL", "Redis", "React", "MQL5", "pytest"],
    category: "fintech",
    status: "building",
    repo: "https://github.com/leonardeco/Quant-Guardian",
  },
  {
    slug: "osinteye",
    name: "OSINTEYE",
    tagline: { es: "Plataforma de inteligencia de fuentes abiertas", en: "Open-source intelligence platform" },
    description: {
      es: "Investigación de dominios, IPs, correos y teléfonos con un catálogo de más de 100 herramientas, escaneos automatizados, grafos y asistente IA.",
      en: "Investigates domains, IPs, emails and phones with a catalog of 100+ tools, automated scans, intelligence graphs and an AI assistant.",
    },
    highlights: {
      es: ["Routing de escaneos por tipo de objetivo", "Visualización en grafo", "App de escritorio con Tauri"],
      en: ["Scan routing by target type", "Graph visualization", "Desktop app with Tauri"],
    },
    stack: ["FastAPI", "React", "TypeScript", "Tauri", "Claude API"],
    category: "ai",
    status: "building",
    repo: "https://github.com/leonardeco/OSINTEYE",
  },
  {
    slug: "optiagenda",
    name: "OptiAgenda",
    tagline: { es: "API REST de agendamiento", en: "Scheduling REST API" },
    description: {
      es: "API para gestionar citas entre clientes y profesionales, con autenticación JWT y permisos por rol.",
      en: "API to manage appointments between clients and professionals, with JWT authentication and role-based permissions.",
    },
    highlights: {
      es: ["Roles ADMIN, PROFESSIONAL y CLIENT", "Validación de conflictos de horario", "Swagger UI y manejo global de excepciones"],
      en: ["ADMIN, PROFESSIONAL and CLIENT roles", "Schedule conflict validation", "Swagger UI and global exception handling"],
    },
    stack: ["Java 17", "Spring Boot 3", "Spring Security", "JWT", "MySQL", "Gradle"],
    category: "backend",
    status: "done",
    repo: "https://github.com/leonardeco/OptiAgenda",
  },
  {
    slug: "reservaya",
    name: "ReservaYa",
    tagline: { es: "Reservas para restaurantes · trabajo en equipo", en: "Restaurant bookings · team project" },
    description: {
      es: "Búsqueda de restaurantes, ficha, reserva con confirmación y panel administrativo. Desarrollado en equipo de tres personas.",
      en: "Restaurant search, detail pages, booking with confirmation and an admin panel. Built by a team of three.",
    },
    highlights: {
      es: ["Componentes standalone con lazy loading", "Estado compartido con Signals", "Pruebas con Vitest"],
      en: ["Standalone components with lazy loading", "Shared state with Signals", "Tests with Vitest"],
    },
    stack: ["Angular 21", "TypeScript", "Signals", "Tailwind 4", "Vitest"],
    category: "web",
    status: "done",
    repo: "https://github.com/leonardeco/ReservaYa",
  },
  {
    slug: "lanxa-web",
    name: "Lanxa Technology",
    tagline: { es: "Sitio corporativo", en: "Corporate website" },
    description: {
      es: "Sitio de la software factory: servicios, portafolio, equipo y captación de clientes B2B y B2C.",
      en: "Software studio website: services, portfolio, team and B2B/B2C lead capture.",
    },
    highlights: {
      es: ["Reconstruido desde cero en Next.js 16", "Formulario con envío de correo", "Animaciones con Framer Motion"],
      en: ["Rebuilt from scratch on Next.js 16", "Contact form with email delivery", "Framer Motion animations"],
    },
    stack: ["Next.js 16", "TypeScript", "Tailwind 4", "Resend"],
    category: "web",
    status: "online",
    demo: "https://lanxa-technology.vercel.app",
    repo: "https://github.com/leonardeco/Lanxa-Technology",
    image: "/projects/lanxa-web.png",
  },
  {
    slug: "altaira",
    name: "Altaira Group",
    tagline: { es: "Landing para cliente · consultoría ambiental", en: "Client landing · environmental consulting" },
    description: {
      es: "Presentación de ocho servicios de ingeniería geográfica y ambiental, con contacto directo por WhatsApp, correo e Instagram.",
      en: "Showcase of eight geographic and environmental engineering services, with direct contact via WhatsApp, email and Instagram.",
    },
    highlights: {
      es: ["Datos estructurados para SEO", "Datos de contacto centralizados", "CSS propio sin dependencias"],
      en: ["Structured data for SEO", "Centralized contact data", "Hand-written CSS, no dependencies"],
    },
    stack: ["Next.js 16", "React 19", "TypeScript", "CSS"],
    category: "web",
    status: "online",
    demo: "https://altaira-group.vercel.app",
    repo: "https://github.com/leonardeco/altaira-group",
    image: "/projects/altaira.png",
  },
  {
    slug: "biofit",
    name: "BioFit Dashboard",
    tagline: { es: "Composición corporal con IA", en: "AI body-composition dashboard" },
    description: {
      es: "Para entrenadores y nutricionistas: registra bioimpedancia, calcula métricas y genera planes de entrenamiento y nutrición con IA.",
      en: "For trainers and nutritionists: records bioimpedance, computes metrics and generates training and nutrition plans with AI.",
    },
    highlights: {
      es: ["Historial con gráficos de evolución", "Hoja de ruta a 12 meses", "Exportación a PDF"],
      en: ["History with progress charts", "12-month roadmap", "PDF export"],
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Claude API"],
    category: "ai",
    status: "done",
    repo: "https://github.com/leonardeco/biofit-dashboard",
  },
  {
    slug: "leofit",
    name: "LEOFIT",
    tagline: { es: "Tienda de suplementos", en: "Supplement store" },
    description: {
      es: "E-commerce con más de 127 productos, filtros, carrito persistente y pedido automático por WhatsApp. Base del refactor que dio origen a NEXA.",
      en: "E-commerce with 127+ products, filters, a persistent cart and automatic WhatsApp ordering. The base later refactored into NEXA.",
    },
    highlights: {
      es: ["Carrito con Context API", "SEO dinámico por página", "Mobile-first con navegación inferior"],
      en: ["Cart with Context API", "Per-page dynamic SEO", "Mobile-first with bottom navigation"],
    },
    stack: ["React", "Vite", "Tailwind", "React Router"],
    category: "commerce",
    status: "done",
    repo: "https://github.com/leonardeco/sports-store",
  },
  {
    slug: "skills-grok",
    name: "SKILLS-GROK",
    tagline: { es: "Biblioteca de procedimientos para agentes de IA", en: "Procedure library for AI coding agents" },
    description: {
      es: "Procedimientos versionados que hacen que un agente de código trabaje como un equipo: diseño antes de código, TDD, seguridad y cierre profesional.",
      en: "Versioned procedures that make a coding agent work like a team: design before code, TDD, security and a professional wrap-up.",
    },
    highlights: {
      es: ["Validación en CI y contrato formal", "Modelado de amenazas y privacidad por diseño"],
      en: ["CI validation and formal contract", "Threat modeling and privacy by design"],
    },
    stack: ["Markdown", "PowerShell", "GitHub Actions"],
    category: "ai",
    status: "done",
    repo: "https://github.com/leonardeco/SKILLS-GROK",
  },
];

export const stackGroups = [
  {
    title: { es: "Lenguajes", en: "Languages" },
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    title: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3"],
  },
  {
    title: { es: "Backend y APIs", en: "Backend & APIs" },
    items: ["Node.js", "Fastify", "FastAPI", "Spring Boot", "REST / OpenAPI", "WebSockets"],
  },
  {
    title: { es: "Datos", en: "Data" },
    items: ["PostgreSQL", "MySQL", "Redis", "Prisma", "Drizzle", "SQLAlchemy"],
  },
  {
    title: { es: "Infraestructura", en: "Infrastructure" },
    items: ["Docker", "Docker Compose", "Kubernetes", "Azure", "Vercel", "GitHub Actions"],
  },
  {
    title: { es: "Calidad y seguridad", en: "Quality & security" },
    items: ["RBAC", "JWT", "Vitest", "pytest", "Postman", "JMeter"],
  },
  {
    title: { es: "IA y automatización", en: "AI & automation" },
    items: ["Claude API", "AI Agents", "Tool calling", "WhatsApp Bots", "Telegram Bots", "pgvector"],
  },
  {
    title: { es: "Prácticas", en: "Practices" },
    items: ["SOLID", "Clean Code", "Hexagonal Architecture", "Scrum", "Git Flow", "Code Review"],
  },
] as const;

export const marquee = [
  "TypeScript", "React", "Next.js", "Angular", "Node.js", "FastAPI", "Spring Boot", "PostgreSQL",
  "Redis", "Docker", "Kubernetes", "Prisma", "Tailwind CSS", "Python", "Java", "Azure",
];

export const education = {
  degree: {
    title: { es: "Ingeniería de Software", en: "B.Sc. Software Engineering" },
    school: "Corporación Universitaria Iberoamericana",
    detail: { es: "6.º de 8 semestres · En curso", en: "Semester 6 of 8 · In progress" },
  },
  certifications: [
    {
      issuer: "Microsoft",
      items: {
        es: ["Programación con Transact-SQL", "Spring Boot en Azure App Service", "Agile para el desarrollo de software"],
        en: ["Programming with Transact-SQL", "Spring Boot on Azure App Service", "Agile for software development"],
      },
    },
    {
      issuer: "Politécnico de Colombia",
      items: { es: ["Diplomado en Java"], en: ["Java Diploma Program"] },
    },
    {
      issuer: "Udemy",
      items: {
        es: ["Java con Spring Boot y Angular", "React y TypeScript", "SQL y MySQL", "JavaScript, HTML5 y CSS3", "Codificación segura en aplicaciones web"],
        en: ["Java with Spring Boot and Angular", "React and TypeScript", "SQL and MySQL", "JavaScript, HTML5 and CSS3", "Secure coding for web applications"],
      },
    },
  ],
  languages: [
    { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
    { name: { es: "Inglés", en: "English" }, level: { es: "B1 · Intermedio", en: "B1 · Intermediate" } },
  ],
} as const;
