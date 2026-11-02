<img src="https://capsule-render.vercel.app/api?type=waving&color=0:EA580C,100:7c5cff&height=200&section=header&text=Portafolio%20%C2%B7%20Leonardo%20Guzm%C3%A1n&fontSize=44&fontColor=ffffff&fontAlignY=38&desc=Desarrollador%20Full%20Stack%20%C2%B7%20Colombia&descAlignY=58&descSize=18&animation=fadeIn" width="100%" />

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  Mi portafolio profesional: experiencia, servicios y proyectos en producción, en español e inglés.<br/>
  Pensado para que un reclutador o un cliente entienda en dos minutos qué construyo y cómo lo construyo.
</p>

---

## Vista previa

<p align="center">
  <img src="docs/preview-desktop.jpg" alt="Portafolio en escritorio" width="74%" />
  &nbsp;
  <img src="docs/preview-mobile.jpg" alt="Portafolio en celular" width="22%" />
</p>

## Qué incluye

| Sección | Contenido |
|---|---|
| **Inicio** | Presentación, disponibilidad, stack principal y cifras clave |
| **Perfil** | Cómo trabajo: full stack real, seguridad por diseño, rendimiento e IA aplicada |
| **Experiencia** | Línea de tiempo con Lanxa Technology, Bitwan, Super Ozono Global y LINK NETWORKS |
| **Servicios** | Aplicaciones web, SaaS y ERPs multi-tenant, APIs e integraciones, automatización e IA, auditoría y rendimiento |
| **Proyectos** | 15 proyectos con filtros por categoría, capturas reales, estado honesto (en línea, beta, en desarrollo, completado) y enlaces a demo y código |
| **Stack** | Lenguajes, frontend, backend, datos, infraestructura, calidad, IA y prácticas |
| **Formación** | Ingeniería de Software, certificaciones de Microsoft, Politécnico de Colombia y Udemy |
| **Contacto** | Correo con botón de copiar, WhatsApp, LinkedIn y GitHub |

## Detalles técnicos

- **Bilingüe ES / EN** con selector y detección del idioma del navegador; la preferencia se guarda en el dispositivo.
- **Responsive mobile-first**: menú a pantalla completa en celular, grillas que pasan a una columna y sin scroll horizontal en pantallas de celular.
- **Páginas estáticas** generadas en el build: carga rápida y ~190 kB de JavaScript inicial.
- **SEO**: metadatos, imagen Open Graph generada con la foto, `sitemap.xml`, `robots.txt` y datos estructurados `Person` (schema.org).
- **Accesibilidad**: navegación por teclado, foco visible, enlace para saltar al contenido y animaciones que respetan `prefers-reduced-motion`.
- **Animaciones** con Framer Motion basadas en `IntersectionObserver`, solo sobre `transform` y `opacity`.
- **Contenido tipado** en un solo archivo: el texto se actualiza sin tocar componentes.

## Estructura

```
app/
  layout.tsx            Fuentes, metadatos y datos estructurados
  page.tsx              Orden de las secciones
  opengraph-image.tsx   Imagen para compartir en LinkedIn y WhatsApp
  sitemap.ts · robots.ts
components/             Una sección por archivo (hero, experience, projects, contact…)
lib/
  content.ts            Experiencia, servicios, proyectos, stack y formación (ES / EN)
  site.ts               Correo, WhatsApp, redes y URL del sitio
  i18n.ts               Tipos de idioma
public/                 Foto y capturas de los proyectos
```

## Correr en local

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # build de producción
npm start          # sirve el build
npm run typecheck  # verificación de tipos
npm run lint
```

## Actualizar el contenido

- **Textos, proyectos y experiencia** → `lib/content.ts`. Cada texto tiene su versión `es` y `en`.
- **Datos de contacto** → `lib/site.ts`.
- **Nuevo proyecto con captura** → agregar la imagen en `public/projects/` y la ruta en el campo `image` del proyecto.
- **CV descargable** → copiar el PDF en `public/` y poner su ruta en `cvPath` (`lib/site.ts`).

## Despliegue

Pensado para **Vercel**: importar el repositorio y definir la variable de entorno

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

para que el sitemap, las URLs canónicas y la imagen de vista previa apunten al dominio final.

---

<p align="center">
  <a href="mailto:leonardecoj@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-leonardecoj@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="https://wa.me/573226993891">
    <img src="https://img.shields.io/badge/WhatsApp-322%20699%203891-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
  </a>
  <a href="https://linkedin.com/in/leonardo-guzman-t">
    <img src="https://img.shields.io/badge/LinkedIn-leonardo--guzman--t-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/leonardeco">
    <img src="https://img.shields.io/badge/GitHub-leonardeco-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

<p align="center"><i>Abierto a posiciones Full Stack, Frontend o Backend y a proyectos freelance.</i></p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:7c5cff,100:EA580C&height=110&section=footer" width="100%" />
