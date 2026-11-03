export const weddingProject = {
  en: {
    subtitle: 'Bilingual Interactive Invitation & Automated Guest Management Platform',
    client: 'International Wedding Event in Production (Seville, Spain — February 2027), centralizing logistics for local and international guests',
    role: 'Full-Stack Developer — Editorial UI/UX Design, Serverless Architecture, Frontend & Backend Development, API Integrations (Google Cloud / SMTP), Database & Deploy',
    status: 'In Production (Active)',
    desc: 'Mobile-first, fully bilingual (Spanish / English) web platform with an editorial aesthetic that unifies all event logistics (timeline, interactive maps, shuttle buses, hotels, and tourist guide) and integrates an end-to-end RSVP engine. Every confirmation is persisted idempotently in PostgreSQL, synchronized in real time to a Google Sheets spreadsheet for event organizers, and dispatches an automated transactional confirmation email to the guest.',
    problem: 'Traditional guest management for international events often relies on manual WhatsApp confirmations or disconnected generic forms. This causes loss of traceability when a guest updates their attendance, confusion in plus-one counts, errors in shuttle bus seat reservations or dietary restrictions/allergies, and creates a language barrier for international attendees.',
    solution: 'I built a mobile-first, fully bilingual (ES / EN) web application with an editorial aesthetic unifying all event information (schedule, maps, shuttle transport, hotels, and cultural guide) and integrating an end-to-end RSVP confirmation engine. Each submission is saved idempotently in PostgreSQL, synced in real time to a Google Sheets spreadsheet for organizers, and automatically sends a confirmation email to the guest.',
    impact: '100% automation in tracking guests, plus-ones, shuttle bus seats, and dietary restrictions; zero manual latency between web confirmation and the organizers’ live operational spreadsheet; instant support in 2 languages (ES/EN) without page reloads; and zero data loss thanks to a fault-tolerant dual-persistence architecture.',
    roles: [
      {
        badge: 'GUEST',
        title: 'Guest Module (Bilingual Portal & Dynamic RSVP)',
        items: [
          {
            head: 'Instant Multi-Language Experience (ES | EN)',
            body: 'Fixed navbar language switcher with automatic browser language detection (navigator.language) and device persistence without page reloads.'
          },
          {
            head: 'Interactive Editorial Sections & Event Logistics',
            body: 'Full-bleed Hero with real-time Countdown, automated photo carousel with passe-partout framing, custom linear SVG timeline, embedded Google Maps, bus schedules, one-tap hotel calling (tel:), Seville cultural guide, gift module, and animated FAQ accordion.'
          },
          {
            head: 'Smart Dynamic RSVP Form',
            body: 'Reactive generation of required input fields for each companion’s name based on the selected count, shuttle bus selection, allergy/intolerance registry, song requests, and an animated progress submit button.'
          }
        ]
      },
      {
        badge: 'ORGANIZERS',
        title: 'Organizers / Back-Office Module (Live Google Sheets Sync)',
        items: [
          {
            head: 'Zero-Code Real-Time Management',
            body: 'Organizers and wedding planners receive every confirmation instantaneously in a structured 11-column Google Sheets spreadsheet (Timestamp in Europe/Madrid timezone, Name, Phone, Email, Attendance, Shuttle Bus, Companion Count, Companion Names, Dietary Restrictions, Song, and Message).'
          },
          {
            head: 'Direct Operational Auditing',
            body: 'Enables live filtering and auditing of shuttle bus capacity, instant export of allergy lists for the catering service, and exact headcount tracking from mobile or desktop without touching the database.'
          }
        ]
      },
      {
        badge: 'BACKEND & SMTP',
        title: 'Serverless API, Idempotent DB & Notification Engine',
        items: [
          {
            head: 'Idempotent Upsert Persistence',
            body: 'The endpoint processes confirmations using the guest’s email as a unique key; if a guest resubmits the form to update companions or dietary needs, the system updates their existing PostgreSQL record without duplicating rows.'
          },
          {
            head: 'Automated Transactional Email Dispatch',
            body: 'Immediate dispatch of a personalized thank-you and confirmation email to the guest via Gmail SMTP (Nodemailer).'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'Dual Persistence with Graceful Degradation (Neon PostgreSQL + Google Sheets API v4)',
        desc: 'The Next.js Route Handler (app/api/rsvp/route.js) decouples the critical database transaction from side effects. First, it guarantees persistence in PostgreSQL via Prisma ORM (prisma.rSVP.upsert). Subsequently, it executes the Google Sheets write (authenticated via Google Service Account JWT credentials) and the SMTP email dispatch inside independent try/catch blocks—if Google’s API or the SMTP server experiences latency, the guest’s confirmation never fails and remains safely stored in PostgreSQL.'
      },
      {
        title: 'Dictionary-Driven Reactive Internationalization (LanguageContext)',
        desc: 'All textual content across the 11 sections is decoupled from React components and centralized in two single sources of truth (data/content.js and data/content_en.js). The Context provider detects the system language (navigator.language), persists the choice in localStorage, and updates the entire UI in memory without route reloads or sub-path complexity.'
      },
      {
        title: 'End-to-End Validation (React Hook Form + Zod) & Anti-Bot Honeypot Security',
        desc: 'Form payloads are validated on both client and server using typed Zod schemas, including reactive input generation (watch("acompanantes")) to capture up to 20 companion names. To block bot spam on a public form without ruining the editorial aesthetic with intrusive CAPTCHAs, I implemented an off-screen hidden honeypot field (_gotcha at left-[-9999px] and tabIndex={-1}): if filled by a bot, the server short-circuits and returns a decoy 200 OK without polluting the database.'
      },
      {
        title: 'Serverless-Safe Architecture & Connection Pooling (Prisma Singleton)',
        desc: 'To prevent connection pool exhaustion across Vercel Serverless Functions and during development hot-reloads, I implemented a PrismaClient Singleton pattern attached to globalThis (lib/prisma.js) connected to Neon Tech’s PgBouncer connection pooler. Additionally, the backend sanitizes the RSA private key format (GOOGLE_PRIVATE_KEY) at runtime to safely handle escaped newlines in production environment variables.'
      },
      {
        title: 'Editorial Design System, Font Optimization (next/font) & Micro-Interactions',
        desc: 'Configured a custom Tailwind CSS theme with an organic palette and 5 editorial typefaces (Playfair Display, Cormorant Garamond, Jost, Bodoni Moda, and Allura) injected as CSS variables via next/font/google with display: swap to eliminate Cumulative Layout Shift (CLS). Sections reveal progressively on scroll via a custom <FadeIn> Framer Motion wrapper, paired with SEO privacy directives (noindex, nofollow) to protect private event details.'
      }
    ],
    stackFull: {
      frontend: ['React 18', 'Next.js 14 (App Router)', 'Tailwind CSS', 'Framer Motion', 'React Hook Form', 'Zod', 'React Context API (i18n)', 'Google Fonts (next/font)'],
      backend: ['Node.js (Next.js Route Handlers)', 'Google Sheets API v4 (Service Account JWT)', 'Nodemailer (Gmail SMTP)', 'Zod Server Validation', 'Anti-Bot Honeypot'],
      database: ['PostgreSQL Serverless (Neon Tech)', 'PgBouncer Connection Pooler', 'Prisma ORM (Upsert Singleton)', 'Google Sheets (Live Back-Office)', 'Cloudinary CDN', 'LocalStorage'],
      infra: ['Vercel (CI/CD, Serverless & Edge CDN)', 'Git / GitHub', 'SEO Privacy Protection (noindex, nofollow)']
    },
    capturesMeta: [
      {
        label: '01. Editorial Hero & Countdown (Desktop + Mobile)',
        caption: 'Side-by-side Desktop & Mobile view of the main invitation cover, featuring full-bleed photography, Bodoni/Allura typography, ES/EN language switcher, and real-time countdown.'
      },
      {
        label: '02. Dynamic RSVP Form (Desktop + Mobile)',
        caption: 'Interactive RSVP form in Desktop and Mobile views showcasing reactive companion field generation, shuttle bus seat reservation, dietary restrictions, and Zod validation.'
      },
      {
        label: '03. End-to-End Flow: RSVP + Email + Google Sheets',
        caption: 'Complete automated workflow in a single composite view: submitted RSVP confirmation on Desktop/Mobile, instant transactional email received by the guest via Gmail SMTP, and live synchronization in the organizers’ Google Sheets spreadsheet.'
      },
      {
        label: '04. FAQ & Event Logistics (Desktop + Mobile)',
        caption: 'Interactive Frequently Asked Questions (FAQ) accordion, dress code, and event logistics seamlessly adapted for both Desktop and Mobile guests.'
      }
    ],
    f1: 'Dual fault-tolerant persistence: Idempotent Prisma Upsert in Neon PostgreSQL + Live Google Sheets API v4 sync',
    f2: 'Instant dictionary-based bilingual engine (ES | EN) with browser detection and zero page reloads',
    f3: 'End-to-end React Hook Form + Zod validation with dynamic companion fields and invisible anti-bot Honeypot',
    f4: 'Automated transactional confirmation emails via Gmail SMTP (Nodemailer) in isolated non-blocking blocks',
    f5: 'Editorial design system with 5 zero-CLS next/font typefaces and progressive Framer Motion scroll reveals'
  },
  es: {
    subtitle: 'Plataforma Bilingüe de Invitación Interactiva y Gestión Automatizada de Invitados',
    client: 'Evento nupcial internacional en producción (Sevilla, España — Febrero 2027), diseñado para centralizar la logística de invitados locales y extranjeros',
    role: 'Full-Stack Developer — Diseño UI/UX Editorial, Arquitectura Serverless, Desarrollo Frontend y Backend, Integración de APIs (Google Cloud / SMTP), Base de Datos y Deploy',
    status: 'En Producción (Activo)',
    desc: 'Aplicación web mobile-first y completamente bilingüe (Español / Inglés) con estética editorial que unifica toda la información del evento (cronograma, mapas, traslados, hoteles y guía turística) e integra un motor de confirmación (RSVP) de extremo a extremo. Cada respuesta se guarda de forma idempotente en PostgreSQL, se sincroniza en tiempo real en una planilla de Google Sheets para los organizadores y envía automáticamente un email de confirmación al invitado.',
    problem: 'La gestión tradicional de invitados en eventos internacionales suele depender de confirmaciones manuales por WhatsApp o formularios genéricos desconectados. Esto genera pérdida de trazabilidad cuando un invitado modifica su asistencia, confusión en el conteo de acompañantes, errores en la reserva de plazas de autobús o alergias alimentarias, además de presentar una barrera idiomática para los asistentes extranjeros.',
    solution: 'Construí una aplicación web mobile-first y completamente bilingüe (Español / Inglés) con estética editorial que unifica toda la información del evento (cronograma, mapas, traslados, hoteles y guía turística) e integra un motor de confirmación (RSVP) de extremo a extremo. Cada respuesta se guarda de forma idempotente en PostgreSQL, se sincroniza en tiempo real en una planilla de Google Sheets para los organizadores y envía automáticamente un email de confirmación al invitado.',
    impact: '100% de automatización en el registro de invitados, acompañantes, cupos de autobús y restricciones alimentarias; 0 latencia manual entre la confirmación web y la planilla operativa de los organizadores; soporte instantáneo en 2 idiomas (ES/EN) sin recarga de página; y 0 pérdida de datos gracias a una arquitectura tolerante a fallos.',
    roles: [
      {
        badge: 'INVITADO',
        title: 'Módulo Invitado (Portal Bilingüe & RSVP Dinámico)',
        items: [
          {
            head: 'Experiencia Multilenguaje Instantánea (ES | EN)',
            body: 'Conmutador ES | EN en la barra de navegación fija con detección automática del idioma del navegador y persistencia en el dispositivo.'
          },
          {
            head: 'Secciones Interactivas y Logística Integral',
            body: 'Portada full-bleed con cuenta regresiva en tiempo real (Countdown), carrusel fotográfico con enmarcado passe-partout, línea de tiempo con iconografía SVG lineal a medida, mapa interactivo embebido, horarios de autobuses, hoteles con llamada a un toque (tel:), guía cultural de Sevilla, módulo de regalo y acordeón FAQ.'
          },
          {
            head: 'Formulario RSVP Inteligente',
            body: 'Despliegue dinámico de campos obligatorios para los nombres de cada acompañante según la cantidad ingresada, selección de servicio de autobús, registro de alergias/intolerancias, sugerencia de canciones y botón de envío con barra de progreso animada.'
          }
        ]
      },
      {
        badge: 'ORGANIZADORES',
        title: 'Módulo Organizadores / Back-Office (Sincronización en Vivo con Google Sheets)',
        items: [
          {
            head: 'Gestión en Tiempo Real sin Conocimientos Técnicos',
            body: 'Los organizadores y wedding planners reciben cada confirmación al instante en una hoja de cálculo de Google Sheets estructurada en 11 columnas (Fecha/Hora en huso horario Europe/Madrid, Nombre, Teléfono, Email, Asistencia, Autobús, N° de Acompañantes, Nombres de Acompañantes, Restricciones Alimentarias, Canción y Mensaje).'
          },
          {
            head: 'Control Operativo Directo',
            body: 'Permite filtrar y auditar en vivo el cupo de los autobuses, exportar el listado de alergias para el servicio de catering y llevar el conteo exacto de asistentes desde el móvil o escritorio sin tocar la base de datos.'
          }
        ]
      },
      {
        badge: 'BACKEND & SMTP',
        title: 'Módulo Backend & Motor de Notificaciones (API Serverless, DB & SMTP)',
        items: [
          {
            head: 'Persistencia Idempotente (Upsert)',
            body: 'El endpoint procesa la confirmación utilizando el email como clave única; si un invitado vuelve a completar el formulario para actualizar sus acompañantes o restricciones, el sistema actualiza su registro existente en PostgreSQL sin duplicar filas.'
          },
          {
            head: 'Notificación Transaccional Automática',
            body: 'Envío inmediato de un correo electrónico de agradecimiento y confirmación al invitado mediante Gmail SMTP (Nodemailer).'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'Persistencia Dual con Degradación Elegante (Neon PostgreSQL + Google Sheets API v4)',
        desc: 'El Route Handler (app/api/rsvp/route.js) separa la transacción crítica de los efectos secundarios. Primero asegura el guardado en PostgreSQL mediante Prisma ORM (prisma.rSVP.upsert). Posteriormente, ejecuta la escritura en Google Sheets (autenticada con credenciales JWT de Google Service Account) y el disparo del correo SMTP en bloques try/catch independientes. Si la API de Google o el servidor SMTP experimentan demoras, la confirmación del invitado no falla y queda resguardada en la base de datos.'
      },
      {
        title: 'Internacionalización Reactiva Basada en Diccionarios (LanguageContext)',
        desc: 'Todo el contenido textual de las 11 secciones está desacoplado de los componentes de React y centralizado en dos fuentes únicas de verdad (data/content.js y data/content_en.js). El proveedor de contexto detecta el idioma del sistema (navigator.language), guarda la elección en localStorage y actualiza la interfaz completa en memoria sin recargar la ruta ni requerir sub-rutas adicionales.'
      },
      {
        title: 'Validación End-to-End (React Hook Form + Zod) & Seguridad Anti-Bot (Honeypot)',
        desc: 'Los datos del formulario se validan tanto en el cliente como en el servidor con esquemas tipados de Zod, incluyendo la generación reactiva de inputs (watch("acompanantes")) para capturar los nombres de hasta 20 acompañantes. Para evitar el spam de bots en un formulario público sin arruinar la experiencia visual con CAPTCHAs invasivos, se implementó un campo oculto _gotcha (honeypot) fuera de pantalla (left-[-9999px] y tabIndex={-1}): si un bot lo rellena, el servidor corta la ejecución y devuelve un 200 OK señuelo sin ensuciar la base de datos.'
      },
      {
        title: 'Arquitectura Serverless-Safe & Conexiones Pooler (Prisma Singleton)',
        desc: 'Para evitar el agotamiento del pool de conexiones en las funciones serverless de Vercel y durante el hot-reload en desarrollo, se implementó un patrón Singleton de PrismaClient sobre globalThis (lib/prisma.js) conectado al connection pooler (PgBouncer) de Neon Tech. Además, el backend sanea en tiempo de ejecución el formato de la clave privada RSA (GOOGLE_PRIVATE_KEY) para manejar de forma segura los saltos de línea escapados en variables de entorno de producción.'
      },
      {
        title: 'Sistema de Diseño Editorial, Optimización de Fuentes (next/font) & Micro-interacciones',
        desc: 'Se configuró un tema personalizado en Tailwind CSS con una paleta orgánica (bloque, fondo, texto, textoCalido) y 5 tipografías editoriales (Playfair Display, Cormorant Garamond, Jost, Bodoni Moda y Allura) inyectadas como variables CSS mediante next/font/google con display: swap para eliminar el Cumulative Layout Shift (CLS). Las secciones se revelan progresivamente al scrollear mediante el componente <FadeIn> construido con Framer Motion, complementado con directivas de privacidad (noindex, nofollow).'
      }
    ],
    stackFull: {
      frontend: ['React 18', 'Next.js 14 (App Router)', 'Tailwind CSS', 'Framer Motion', 'React Hook Form', 'Zod', 'React Context API (i18n)', 'Google Fonts (next/font)'],
      backend: ['Node.js (Next.js Serverless Route Handlers)', 'Google Sheets API v4 (Service Account Auth)', 'Nodemailer (Gmail SMTP App Password)', 'Zod Server Validation', 'Honeypot Anti-Bot'],
      database: ['PostgreSQL Serverless (Neon Tech)', 'PgBouncer Connection Pooler', 'Prisma ORM (Upsert Singleton)', 'Google Sheets (Back-Office en Vivo)', 'Cloudinary CDN', 'LocalStorage'],
      infra: ['Vercel (CI/CD, Serverless Functions & Edge CDN)', 'Git / GitHub', 'Privacidad SEO (robots: noindex, nofollow)']
    },
    capturesMeta: [
      {
        label: '01. Portada Editorial & Countdown (Escritorio + Mobile)',
        caption: 'Vista principal en versión Escritorio y Mobile con fotografía editorial full-bleed, tipografía Bodoni/Allura, selector de idioma ES/EN y cuenta regresiva en tiempo real.'
      },
      {
        label: '02. Formulario RSVP Dinámico (Escritorio + Mobile)',
        caption: 'Formulario interactivo de confirmación en Escritorio y Mobile mostrando la generación reactiva de campos por acompañante, reserva de autobús, alergias y validación con Zod.'
      },
      {
        label: '03. Flujo Completo: RSVP + Email + Excel',
        caption: 'Trazabilidad End-to-End en una sola captura compuesta: formulario enviado en Escritorio/Mobile, correo transaccional de confirmación recibido por el invitado (SMTP) e impacto en vivo en la planilla de Google Sheets.'
      },
      {
        label: '04. Preguntas Frecuentes (FAQ) & Logística (Escritorio + Mobile)',
        caption: 'Sección interactiva de Preguntas Frecuentes (FAQ), código de vestimenta y detalles logísticos del evento en versión Escritorio y Mobile.'
      }
    ],
    f1: 'Persistencia dual tolerante a fallos: Upsert idempotente en Neon PostgreSQL + Sincronización en vivo con Google Sheets API v4',
    f2: 'Motor bilingüe reactivo basado en diccionarios (ES | EN) con detección de navegador y cero recargas',
    f3: 'Validación End-to-End con React Hook Form + Zod, campos dinámicos por acompañante y Honeypot anti-bots invisible',
    f4: 'Despacho automático de correos transaccionales vía Gmail SMTP (Nodemailer) en bloques aislados no bloqueantes',
    f5: 'Sistema de diseño editorial con 5 tipografías next/font sin CLS y animaciones de entrada con Framer Motion'
  }
};

