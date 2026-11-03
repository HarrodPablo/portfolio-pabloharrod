export const florProject = {
  en: {
    subtitle: 'Interactive Editorial Web Experience — [In Development / Finalizing]',
    inProgressBadge: 'IN PROGRESS · FINALIZING CODE',
    client: 'Florencia Ramallo — Active Community Manager, Digital Content Creator & Social Media Strategist (+9 years of combined experience across her own design/stationery brand and agency account management).',
    role: 'Frontend & UI/UX Developer — Editorial Interface Design, Next.js 14 Component Architecture, Responsive Layout, Animation Choreography, Telemetry & Production Deployment.',
    status: 'In Development — Coding Final Phase (Live Preview Available)',
    desc: 'Interactive print-inspired editorial web application built on Next.js 14 App Router and TypeScript that centralizes a Social Media Strategist’s entire value proposition into an immersive visual experience. Integrates custom-coded polymorphic iPhone hardware simulators to showcase interactive Instagram feeds, direct "Before & After" brand transformations, a 16-tool mastery matrix, and an omnichannel arch-shaped contact vault.',
    problem: 'In the Digital Marketing and Community Management industry, portfolios are typically presented through static PDF files, fragmented Google Drive folders, or loose profile links. That passive format makes it difficult to convey aesthetic judgment in curating an Instagram grid, the real impact of a visual redesign ("Before & After"), and the organizational capacity of a professional who manages everything from ideation and scripting to filming, CapCut editing, and AI implementation across multiple brands.',
    solution: 'I designed and built an interactive magazine-style editorial web application (print-inspired) that centralizes her entire value proposition into an immersive visual experience. The platform integrates custom-coded iPhone hardware simulators to display interactive Instagram grids, direct brand transformation comparisons, software mastery matrices, and a direct omnichannel contact vault.',
    impact: '24/7 owned digital presence with instant loading and optimal Core Web Vitals scores; structured showcase of +9 years of career trajectory and proven capacity managing up to 11 simultaneous clients; 8 interactive modules running at 60 FPS with 16 custom-vectorized professional tools; and 0 contact friction via direct WhatsApp, Email, and Professional Instagram routing.',
    roles: [
      {
        badge: 'EDITORIAL & BIO',
        title: 'Editorial Identity & Storytelling Module (HeroSection & AboutSection)',
        items: [
          {
            head: 'High-Impact Stacked Typographic Cover',
            body: 'Stacked central composition ("POR / TA / FOLIO") paired with vector speech bubbles, spring-physics floating reaction stickers, and device-adaptive decorative dot matrices (DotGrid).'
          },
          {
            head: 'Glassmorphic Biography & Verified Avatar',
            body: 'Priority-loaded professional portrait (next/image) framed in a double cyan ring with a rosette verification badge and a GlassBioCard with backdrop-blur-md highlighting key career metrics.'
          },
          {
            head: 'Live Mobile Feed Preview',
            body: 'Side iPhone hardware mockup displaying a curated 12-post strategic Instagram grid (Reels, promotional carousels, tips, and catalogs) with visual format and pricing indicators.'
          }
        ]
      },
      {
        badge: 'SKILLS & 360° WORKFLOW',
        title: 'Skills, 360° Services & Methodology Module (SkillsSection, FunctionsSection & ToolsProcessSection)',
        items: [
          {
            head: 'Soft Skills & 5-Level Competency Meters',
            body: 'Top row featuring 5 custom vector illustrations (Leadership, Professionalism, Creativity, Public Speaking/Communication, and Copywriting/Spelling), complemented by a PaperCard evaluating 9 technical skills via animated 5-level gauges.'
          },
          {
            head: '360° Functions Catalog',
            body: 'Stylized search bar ("¿CÓMO PUEDO AYUDARTE?") with a blinking cursor and an 8-card service grid (Content Creation, Monthly Grid Planning, Community & DM Management, Copywriting, Online Sales Strategies, Graphic Design, Administrative Assistance, and Metrics Analysis).'
          },
          {
            head: '16-Tool Ecosystem & 4-Step Strategic Process',
            body: 'Interactive grid of mastered software and platforms (TikTok, Facebook, Instagram, WhatsApp, Corel Draw, Excel, PowerPoint, Word, Illustrator, Trello, Picsart, Canva, CapCut, Meta, Zoom, and Calendar Planning) alongside a numbered 4-stage workflow.'
          }
        ]
      },
      {
        badge: 'SHOWROOM & CASE STUDIES',
        title: 'Interactive Showroom & Success Stories (SocialMediaCasesSection)',
        items: [
          {
            head: 'Case Study 1 — Full Brand Management (Fashion)',
            body: 'Interactive 3x3 commercial graphic grid paired with 5 strategic deliverables (brand identity, content pillars, templates, copywriting, and bio optimization) plus live iPhone preview.'
          },
          {
            head: 'Case Study 2 — Before & After Visual Transformation (Aesthetics & Spa)',
            body: 'Direct side-by-side visual comparison contrasting the previous profile state in a light iPhone mockup ("ANTES") against the newly curated 9-post grid with clinical photography, harmonic pink palette, and typographic hierarchy ("DESPUÉS").'
          },
          {
            head: 'Case Study 3 — Featured Commercial Campaign (Tech & Telecom)',
            body: 'Editorial layout with 3 promotional flyers on the left, monumental vertical typography ("TECNOLOGÍA") on the right margin, and an expanded Instagram post card emerging from an iPhone chassis with social interaction controls.'
          }
        ]
      },
      {
        badge: 'SOCIAL PROOF & VAULT',
        title: 'Social Proof & Omnichannel Conversion (TestimonialsSection, ContactFooterSection & Navbar)',
        items: [
          {
            head: 'Verified Reviews & Testimonials',
            body: 'Dual social-proof format combining a warm tactile card with a handwritten header and a dark speech-bubble container (#2D2D2D) with a neon-yellow 5-star rating.'
          },
          {
            head: 'Architectural Contact Vault (Arch-Shaped Vault)',
            body: 'Arch-shaped footer container featuring interactive cards to start a WhatsApp chat (wa.me), send an Email (mailto:), check global remote availability, and visit Instagram.'
          },
          {
            head: 'Smart Floating Pill Navbar',
            body: 'Pill-shaped top navigation bar with passive scroll detection that dynamically adjusts opacity, backdrop blur, and elevation shadow while enabling smooth scrolling across all 8 sections.'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'Editorial Design System & Zero-KB Procedural SVG Paper Texture (globals.css & tailwind.config.ts)',
        body: 'Instead of loading heavy raster texture images that degrade Largest Contentful Paint (LCP), a fixed global overlay uses a procedural SVG feTurbulence fractalNoise filter with mix-blend-multiply. This delivers a tactile printed-magazine feel across the entire app with 0 KB of extra network payload, backed by semantic tokens (bg-base, text-dark, accent-magenta, accent-yellow, accent-purple, accent-cyan) and multi-layer shadows (shadow-paper, shadow-phone, shadow-sticker).'
      },
      {
        title: 'Polymorphic Mobile Hardware Simulator Engine (PhoneMockup.tsx)',
        body: 'Engineered from scratch in React + Tailwind CSS as a realistic iPhone hardware simulator complete with physical side buttons, gradient metallic bezel, Dynamic Island, and status bar. Accepts strongly typed variants (instagram-grid, instagram-post, custom), themes (dark / light), vertical/bottom labels, and InstagramFeedPost[] arrays—achieving razor-sharp vector clarity at any zoom level without static PNG device frames.'
      },
      {
        title: 'Declarative Viewport-Driven Micro-Interaction Choreography (Framer Motion 11)',
        body: 'Animations are decoupled per component using viewport intersection detection (whileInView with viewport={{ once: true }}), preventing unnecessary re-renders during scroll. Combines spring physics (type: "spring") for playful stickers, infinite cyclical levitation (repeat: Infinity) on key badges, and staggered delays (index * 0.05) across skill meters and tool matrices.'
      },
      {
        title: 'Zero-CLS Multi-Font Pipeline, Image Optimization & Inline Vector Iconography (Next.js 14 App Router)',
        body: 'Integrates 3 contrasting Google Font families via next/font/google (Anton for display impact, Dancing Script for organic calligraphy, and Plus Jakarta Sans for UI legibility) injected as CSS variables with display: swap. All specialized software icons (such as Corel Draw’s hot-air balloon, Meta, CapCut, and soft-skill illustrations) plus the squircle favicon (src/app/icon.svg) are hand-crafted in pure inline SVG.'
      },
      {
        title: 'Edge Telemetry & Real-User Core Web Vitals Auditing (Vercel Analytics & Speed Insights)',
        body: 'Direct RootLayout integration of @vercel/analytics/next and @vercel/speed-insights/next to capture real-user production metrics (unique visitors, page views, bounce rate, TTFB, FCP, LCP, and CLS) on Vercel’s Edge Network without blocking the main thread.'
      }
    ],
    stackFull: {
      frontend: ['Next.js 14.2 (App Router)', 'React 18.3', 'TypeScript 5.6', 'Tailwind CSS 3.4', 'Framer Motion 11.11', 'Lucide React', 'clsx + tailwind-merge'],
      backend: ['Next.js Server Components (RSC)', 'Declarative Routing & Metadata API', 'Omnichannel Deep-Linking (wa.me / mailto)', 'Static Asset Pipeline'],
      database: ['Typed Static Content Dictionaries (InstagramFeedPost[])', 'Zero-Latency In-Bundle SVG Vector Assets', 'next/font Local CSS Variable Cache'],
      infra: ['Vercel Edge Network (Automated CI/CD)', 'Vercel Web Analytics (@vercel/analytics)', 'Vercel Speed Insights (Real-User Web Vitals)', 'Git & GitHub']
    },
    capturesMeta: [
      {
        label: '01. Editorial Cover & Portfolio Preview (WIP)',
        caption: 'High-impact editorial cover preview currently in final active coding stage, showcasing print-inspired typography, custom stickers, and live mobile preview.'
      }
    ],
    f1: 'Print-inspired editorial design system with 0 KB procedural SVG fractalNoise paper texture overlay',
    f2: 'Polymorphic React/Tailwind iPhone hardware simulator (PhoneMockup.tsx) with typed Instagram Grid & Before/After modes',
    f3: 'Interactive showcase of +9 years of experience, 8 service modules, 16 custom-vectorized tools & 3 brand case studies',
    f4: '60 FPS Framer Motion 11 choreography with spring physics, infinite badge levitation & staggered viewport reveals',
    f5: 'Next.js 14 App Router + TypeScript 5.6 architecture with next/font (Anton, Dancing Script, Plus Jakarta) & Vercel Speed Insights'
  },
  es: {
    subtitle: 'Web Editorial Interactiva — [En Desarrollo / Codificando]',
    inProgressBadge: 'EN DESARROLLO · CODIFICANDO FASE FINAL',
    client: 'Florencia Ramallo — Community Manager, Creadora de Contenido Digital y Estratega de Redes Sociales en activo (+9 años de experiencia combinada entre su propio emprendimiento de diseño/papelería y la gestión de cuentas en agencia).',
    role: 'Frontend & UI/UX Developer — Diseño de Interfaz Editorial, Arquitectura de Componentes en Next.js 14, Maquetación Responsiva, Coreografía de Animaciones, Telemetría y Despliegue en Producción.',
    status: 'En Desarrollo — Codificando Fase Final (Vista Previa en Vivo)',
    desc: 'Aplicación web interactiva con estética editorial de revista (print-inspired) desarrollada en Next.js 14 App Router y TypeScript que centraliza toda su propuesta de valor en una experiencia visual inmersiva. Integra simuladores polimórficos de hardware de iPhone programados a medida para exhibir grillas de Instagram interactivas, comparativas directas de transformación de marca ("Antes y Después"), matrices de dominio de 16 herramientas y una bóveda arquitectónica de contacto omnicanal.',
    problem: 'En el rubro del Marketing Digital y Community Management, los portafolios suelen presentarse mediante archivos PDF estáticos, carpetas de Google Drive fragmentadas o enlaces sueltos a perfiles. Este formato pasivo dificulta transmitir el criterio estético en el armado de un feed de Instagram, el impacto real de un rediseño visual ("Antes y Después") y la capacidad organizativa de una profesional que gestiona desde la idea y el guion hasta la filmación, edición en CapCut e implementación de IA para múltiples marcas.',
    solution: 'Diseñé y construí una aplicación web interactiva con estética editorial de revista (print-inspired), que centraliza toda su propuesta de valor en una experiencia visual inmersiva. La plataforma integra simuladores de hardware de iPhone programados a medida para exhibir grillas de Instagram interactivas, comparativas directas de transformación de marca, matrices de dominio de software y una bóveda de contacto directo omnicanal.',
    impact: 'Presencia digital propia 24/7 de carga instantánea con puntuación óptima en Core Web Vitals; exposición estructurada de +9 años de trayectoria y capacidad probada gestionando hasta 11 clientes en simultáneo; 8 módulos interactivos con animaciones fluidas a 60 FPS y 16 herramientas profesionales vectorizadas a medida; y 0 fricción de contacto mediante redirección directa a WhatsApp, Correo Electrónico e Instagram Profesional.',
    roles: [
      {
        badge: 'EDITORIAL & BIO',
        title: 'Módulo de Identidad Editorial & Storytelling (HeroSection & AboutSection)',
        items: [
          {
            head: 'Portada Tipográfica de Alto Impacto',
            body: 'Composición central apilada ("POR / TA / FOLIO") acompañada de burbujas de diálogo vectoriales, stickers de reacciones flotantes con física de resortes y matrices decorativas de puntos (DotGrid) adaptativas según el dispositivo.'
          },
          {
            head: 'Biografía Glassmórfica & Avatar Verificado',
            body: 'Retrato profesional optimizado con prioridad de carga (next/image) enmarcado en doble anillo cian, insignia de verificación estilo escarapela y tarjeta GlassBioCard con desenfoque de fondo (backdrop-blur-md) que destaca métricas clave de experiencia.'
          },
          {
            head: 'Feed Móvil en Vivo',
            body: 'Mockup lateral de iPhone mostrando una grilla de 12 publicaciones estratégicas (Reels, carruseles promocionales, tips y catálogos) con indicadores visuales de formato y precios.'
          }
        ]
      },
      {
        badge: 'SKILLS & FLUJO 360°',
        title: 'Módulo de Habilidades, Servicios 360° & Metodología (SkillsSection, FunctionsSection & ToolsProcessSection)',
        items: [
          {
            head: 'Aptitudes Blandas & Medidor de Competencias',
            body: 'Fila superior con 5 ilustraciones vectoriales personalizadas (Liderazgo, Profesionalismo, Creatividad, Oratoria/Comunicación y Excelente Ortografía/Redacción), complementada por una tarjeta PaperCard que evalúa 9 habilidades técnicas mediante medidores animados de 5 niveles.'
          },
          {
            head: 'Catálogo de Funciones 360°',
            body: 'Barra de búsqueda estilizada ("¿CÓMO PUEDO AYUDARTE?") con cursor parpadeante y cuadrícula de 8 tarjetas cuadradas de servicio (Creación de Contenido, Planificación y Grilla Mensual, Gestión de Comunidad y DM, Copywriting, Estrategias de Ventas Online, Diseño de Piezas Gráficas, Asistencia Administrativa y Análisis de Métricas).'
          },
          {
            head: 'Ecosistema de 16 Herramientas & Proceso en 4 Pasos',
            body: 'Grilla interactiva de software y plataformas dominadas (TikTok, Facebook, Instagram, WhatsApp, Corel Draw, Excel, PowerPoint, Word, Illustrator, Trello, Picsart, Canva, CapCut, Meta, Zoom y Planificación de Calendarios) junto al flujo de trabajo estratégico numerado de la etapa 1 a la 4.'
          }
        ]
      },
      {
        badge: 'SHOWROOM & CASOS',
        title: 'Módulo de Showroom & Casos de Éxito Interactivos (SocialMediaCasesSection)',
        items: [
          {
            head: 'Caso de Éxito 1 — Gestión Integral de Marca (Rubro Moda)',
            body: 'Grilla interactiva 3x3 de piezas gráficas comerciales junto al listado de 5 entregables estratégicos (identidad, pilares, plantillas, copywriting y biografía) y previsualización en iPhone.'
          },
          {
            head: 'Caso de Éxito 2 — Transformación Visual Antes y Después (Rubro Estética & Spa)',
            body: 'Comparativa visual directa que enfrenta el estado previo del perfil en un mockup de iPhone claro ("ANTES") contra la nueva grilla curada de 9 publicaciones con fotografía clínica, paleta rosada armónica y jerarquía tipográfica ("DESPUÉS").'
          },
          {
            head: 'Caso de Éxito 3 — Campaña Comercial Destacada (Rubro Tecnología / Telecomunicaciones)',
            body: 'Maquetación especial con 3 flyers promocionales a la izquierda, tipografía monumental vertical ("TECNOLOGÍA") en el margen derecho y una tarjeta de post de Instagram expandida emergiendo de un chasis de iPhone con barra de interacción social.'
          }
        ]
      },
      {
        badge: 'RESEÑAS & CONTACTO',
        title: 'Módulo de Prueba Social & Conversión Omnicanal (TestimonialsSection, ContactFooterSection & Navbar)',
        items: [
          {
            head: 'Reseñas y Testimonios Verificados',
            body: 'Doble formato de prueba social que combina una tarjeta cálida con cabecera manuscrita y un contenedor de burbuja de diálogo oscura (#2D2D2D) con calificación de 5 estrellas en amarillo neón.'
          },
          {
            head: 'Bóveda Arquitectónica de Contacto (Arch-Shaped Vault)',
            body: 'Contenedor final en forma de arco con tarjetas interactivas para iniciar conversación por WhatsApp (wa.me), enviar Correo Electrónico (mailto:), consultar disponibilidad remota global e ir a Instagram.'
          },
          {
            head: 'Navegación Flotante Inteligente (Navbar)',
            body: 'Barra superior tipo píldora con detección pasiva de scroll que ajusta dinámicamente su opacidad, desenfoque y sombra, permitiendo saltar suavemente entre las 8 secciones.'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'Sistema de Diseño Editorial & Textura Orgánica SVG (globals.css & tailwind.config.ts)',
        body: 'En lugar de cargar imágenes de textura pesadas que degraden el LCP (Largest Contentful Paint), se implementó un overlay fijo global con un filtro SVG procedural (feTurbulence tipo fractalNoise con mix-blend-multiply y opacidad controlada). Esto otorga una sensación táctil de papel impreso en toda la aplicación con 0 KB de peso adicional en red, respaldado por tokens semánticos (bg-base, text-dark, accent-magenta, accent-yellow, accent-purple, accent-cyan) y sombras multicapa (shadow-paper, shadow-phone, shadow-sticker).'
      },
      {
        title: 'Motor Polimórfico de Mockups Móviles (PhoneMockup.tsx)',
        body: 'Diseñado e implementado desde cero en código (React + Tailwind CSS) como un simulador de hardware de iPhone realista con botones físicos laterales, bisel metálico degradado, Dynamic Island y barra de estado. Acepta variantes tipadas (instagram-grid, instagram-post, custom), temas (dark / light), etiquetas verticales/inferiores y arreglos de datos (InstagramFeedPost[]), logrando nitidez vectorial perfecta en cualquier nivel de zoom sin depender de capturas PNG estáticas.'
      },
      {
        title: 'Coreografía Declarativa de Micro-Interacciones (Framer Motion 11)',
        body: 'Las animaciones están desacopladas por componente mediante detección de intersección en el viewport (whileInView con viewport={{ once: true }}), evitando re-renderizados innecesarios al hacer scroll. Combina físicas de resortes (type: "spring") para elementos lúdicos, levitación cíclica infinita (repeat: Infinity) en insignias clave y retrasos escalonados (index * 0.05) en listas de habilidades y herramientas.'
      },
      {
        title: 'Optimización de Fuentes, Imágenes e Iconografía Vectorial In-Line (Next.js 14 App Router)',
        body: 'Se integraron 3 familias tipográficas contrastantes desde next/font/google (Anton para impacto display, Dancing Script para caligrafía orgánica y Plus Jakarta Sans para legibilidad UI) inyectadas mediante variables CSS con estrategia display: swap. Todos los íconos de herramientas específicas (como el globo aerostático de Corel Draw, el lazo de Meta, CapCut o las ilustraciones de aptitudes) y el favicon squircle (src/app/icon.svg) fueron trazados en SVG puro dentro del bundle.'
      },
      {
        title: 'Observabilidad, Telemetría & Auditoría de Web Vitals (Vercel Analytics & Speed Insights)',
        body: 'Integración directa en el RootLayout de @vercel/analytics/next y @vercel/speed-insights/next para capturar métricas reales de usuarios en producción (visitantes únicos, páginas vistas, rebote, TTFB, FCP, LCP y CLS) sobre la red Edge de Vercel sin afectar el hilo principal de ejecución.'
      }
    ],
    stackFull: {
      frontend: ['Next.js 14.2 (App Router)', 'React 18.3', 'TypeScript 5.6', 'Tailwind CSS 3.4', 'Framer Motion 11.11', 'Lucide React', 'clsx + tailwind-merge'],
      backend: ['Next.js Server Components (RSC)', 'Enrutamiento Declarativo & Metadata API', 'Deep-Linking Omnicanal (wa.me / mailto)', 'Pipeline de Assets Estáticos'],
      database: ['Diccionarios Tipados de Contenido (InstagramFeedPost[])', 'Vectores SVG In-Bundle con Latencia Cero', 'Caché de Variables CSS next/font'],
      infra: ['Vercel Edge Network (CI/CD Automatizado)', 'Vercel Web Analytics (@vercel/analytics)', 'Vercel Speed Insights (Real-User Web Vitals)', 'Git & GitHub']
    },
    capturesMeta: [
      {
        label: '01. Portada Editorial & Vista Previa (En Desarrollo)',
        caption: 'Vista previa de la portada editorial actualmente en etapa final de desarrollo y codificación, con tipografía estilo revista, stickers con física de resortes y previsualización móvil.'
      }
    ],
    f1: 'Sistema de diseño editorial print-inspired con textura orgánica de papel en SVG procedural (0 KB de peso en red)',
    f2: 'Motor polimórfico de mockups de iPhone en código (PhoneMockup.tsx) con grillas interactivas y comparativa Antes/Después',
    f3: 'Showroom de +9 años de experiencia, 8 servicios 360°, 16 herramientas vectorizadas a medida y 3 casos de éxito reales',
    f4: 'Coreografía de animaciones a 60 FPS con Framer Motion 11 (físicas de resortes, levitación infinita y revelación por viewport)',
    f5: 'Arquitectura Next.js 14 App Router + TypeScript 5.6 con 3 fuentes next/font sin CLS y telemetría Vercel Speed Insights'
  }
};

