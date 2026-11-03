export const ikigaiProject = {
  en: {
    subtitle: 'Corporate Web Platform & B2B Lead Generation Engine',
    client: 'Ikigai Technology — Software Development, Data Analytics & Enterprise Management Systems Consultancy (San Miguel de Tucumán, Argentina)',
    role: 'Lead Frontend / Full-Stack Developer — SPA Development, Native PHP Backend Integration & Hostinger Deploy (in collaboration with Agustín Ortiz on Brand Design)',
    status: 'In Production (Active)',
    desc: 'Dark Luxury Single Page Application (SPA) engineered for B2B conversion. Articulates the consultancy’s value proposition and 5-stage engineering roadmap, integrating a dual lead-capture engine: a structured form connected to a native PHP REST script for immediate corporate email dispatch and a direct fast-response WhatsApp channel.',
    problem: 'As an expanding B2B technology consultancy, the firm lacked a centralized digital channel that conveyed corporate solidity and explained its engineering methodology to enterprise clients. Commercial inquiries arrived dispersedly and informally, without prior filtering regarding each prospect’s project vision or technical needs.',
    solution: 'Designed and developed a Dark Luxury Single Page Application (SPA) focused on B2B conversion. The platform articulates the consultancy’s value proposition and engineering roadmap, integrating a dual lead-capture system: a structured form connected to a native PHP script for immediate corporate email dispatch and a direct fast-response WhatsApp channel.',
    impact: '100% digital presence aligned with enterprise B2B clients, instant multi-section navigation with zero page reloads, omnichannel lead capture (Structured Email + Direct WhatsApp), and $0 cost in dedicated backend servers by leveraging native execution on shared hosting.',
    roles: [
      {
        badge: 'HOME',
        title: 'Institutional Module (Home & 5-Stage Roadmap)',
        items: [
          {
            head: 'High-Impact Dark Luxury Hero',
            body: 'Visual Hero section with dark gradient overlays, editorial Playfair Display typography, and clear B2B Calls to Action (CTAs).'
          },
          {
            head: 'The Four Pillars of Existence Grid',
            body: 'Interactive grid showcasing Passion, Mission, Vocation, and Profession with smooth hover micro-interactions.'
          },
          {
            head: '5-Stage End-to-End Development Showcase',
            body: 'Visual breakdown of Analysis & Diagnosis, Solution Design, Development, Implementation, and Ongoing Support with scale and color reveal transitions.'
          }
        ]
      },
      {
        badge: 'SERVICES',
        title: 'Catalog & Engineering Methodology Module',
        items: [
          {
            head: 'Dynamic Service Pillar Cards',
            body: 'Interactive service cards (Purpose, Knowledge, Impact, and Sustainability) with conditional theming (primary-gold & accent-green) optimized via useCallback.'
          },
          {
            head: '3-Phase Executive Development Process',
            body: 'Operational workflow tailored to business decision-makers, built with responsive CSS Container Queries (@container).'
          }
        ]
      },
      {
        badge: 'B2B LEADS',
        title: 'Conversion, Lead Capture & Global Navigation Module',
        items: [
          {
            head: 'Reactive B2B Form & Custom Toast Feedback',
            body: 'Captures name, email, phone, and Project Vision with synchronous regex validations, duplicate submission lock (isSubmitting), and custom-themed react-hot-toast alerts.'
          },
          {
            head: 'Styled Dark Map & Persistent WhatsApp Channel',
            body: 'Office location card styled with custom CSS filters (muted-map & glass-dark) plus a floating WhatsAppButton with URL-encoded pre-filled messages.'
          },
          {
            head: 'Sticky Backdrop-Blur Header & ScrollToTop Controller',
            body: 'Sticky navigation bar with active route indicator (useLocation), mobile drawer menu, and automatic viewport reset (0, 0) on every route transition.'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'Lightweight Native PHP Backend for Shared Hosting (contacto.php)',
        desc: 'Instead of over-engineering the infrastructure with an external Node.js server solely for email dispatch, I built a native PHP REST endpoint inside public/contacto.php. The script parses the JSON php://input stream sent by React, configures dynamic MIME and Reply-To headers pointing to the prospect’s email, and dispatches notifications to info@ikigai-technology.com directly within the Hostinger environment.'
      },
      {
        title: 'Dark Luxury Design System with Tailwind CSS & DaisyUI',
        desc: 'Extended Tailwind configuration (tailwind.config.js) with a custom high-contrast palette (charcoal, deep-slate, background-dark, primary-gold #C5A059, and accent-green #8BA888) and an editorial font pairing (Playfair Display Serif + Inter Sans-Serif). Created native CSS utilities (soft-glow-focus, glass-dark, muted-map) for frosted glass finishes and dark map integration without heavy image assets.'
      },
      {
        title: 'Reactive Form Management & Non-Intrusive UX Feedback',
        desc: 'Implemented react-hook-form in the contact view to minimize unnecessary re-renders while typing, validating data formats on the client before executing the server fetch. Backend responses trigger contextual notifications via react-hot-toast, globally styled in App.jsx to match the brand’s dark and gold palette.'
      },
      {
        title: 'Modular SPA Architecture & Seamless Scroll Lifecycle',
        desc: 'Client-side routing with react-router-dom v6 is paired with a custom lifecycle controller component (ScrollToTop.jsx) that listens to location.pathname changes and resets the viewport to (0, 0), solving the classic scroll-retention issue across long SPA views.'
      },
      {
        title: 'Optimized Vite Bundling for Hybrid Static + PHP Deployment',
        desc: 'The Vite build pipeline generates minified, fast-loading bundles and automatically copies the public/contacto.php endpoint to the root of the distribution directory (dist/), enabling atomic deployments to Hostinger’s public_html without manual post-build steps.'
      }
    ],
    stackFull: {
      frontend: ['React 18', 'Vite 7', 'Tailwind CSS 3', 'DaisyUI 4', 'React Router DOM v6', 'React Hook Form', 'React Hot Toast', 'Lucide React', 'React Icons'],
      backend: ['PHP (Native REST Endpoint contacto.php)', 'JSON Stream Parsing (php://input)', 'Native SMTP/Mail Dispatch (Dynamic MIME & Reply-To)'],
      database: ['Stateless Architecture (Zero Relational DB Overhead)', 'Direct Corporate Mailbox Dispatch', 'WhatsApp Business API (wa.me)'],
      infra: ['Hostinger Web Hosting (Hybrid Static Vite + PHP in public_html)', 'Custom Domain (ikigai-technology.com)', 'Atomic dist/ Build Pipeline']
    },
    capturesMeta: [
      {
        label: '01. Home & Pillars (Desktop + Mobile)',
        caption: 'Dual Desktop and Mobile view of the Dark Luxury homepage featuring editorial Playfair Display typography, the 4 Ikigai corporate pillars, and the 5-stage development roadmap.'
      },
      {
        label: '02. Services & Methodology (Desktop + Mobile)',
        caption: 'Desktop and Mobile responsive layout of the Services module showcasing dynamically themed pillar cards (Gold & Green) and the 3-phase executive workflow.'
      },
      {
        label: '03. B2B Lead Capture & Contact (Desktop + Mobile)',
        caption: 'Desktop and Mobile contact view featuring the reactive B2B form connected to the native PHP REST endpoint (contacto.php), dark-styled office map, and direct WhatsApp channel.'
      }
    ],
    f1: 'Hybrid SPA + Native PHP REST endpoint (contacto.php) running with $0 dedicated server overhead on Hostinger',
    f2: 'Bespoke Dark Luxury Design System (Tailwind CSS + DaisyUI) with Playfair Display & gold/green theming',
    f3: 'Dual B2B lead generation engine: React Hook Form + Custom Toast email dispatch & URL-encoded WhatsApp channel',
    f4: 'Client-side routing (React Router v6) with automated ScrollToTop lifecycle management and CSS Container Queries',
    f5: 'Ultra-fast Vite 7 build pipeline outputting atomic static assets + PHP backend directly into public_html'
  },
  es: {
    subtitle: 'Plataforma Web Corporativa & Motor de Captación B2B',
    client: 'Ikigai Technology — Consultora de desarrollo de software, análisis de datos y sistemas de gestión empresarial (San Miguel de Tucumán, Argentina)',
    role: 'Lead Frontend / Full-Stack Developer — Desarrollo SPA, Integración Backend PHP y Deploy en Hostinger (en colaboración con Agustín Ortiz en Diseño de Marca)',
    status: 'En Producción (Activo)',
    desc: 'Single Page Application (SPA) de estética Dark Luxury enfocada en conversión B2B. La plataforma articula la propuesta de valor y el roadmap de ingeniería de la consultora, e integra un sistema dual de captación de leads: un formulario estructurado conectado a un script nativo en PHP para despacho inmediato de correos corporativos y un canal directo de respuesta rápida vía WhatsApp.',
    problem: 'Como firma consultora B2B en expansión, la empresa carecía de un canal digital centralizado que transmitiera solidez corporativa y explicara su metodología de trabajo a clientes empresariales. Las consultas comerciales llegaban de forma dispersa e informal, sin un filtro previo sobre la visión o necesidad técnica de cada prospecto.',
    solution: 'Se diseñó y desarrolló una Single Page Application (SPA) de estética Dark Luxury enfocada en conversión B2B. La plataforma articula la propuesta de valor y el roadmap de ingeniería de la consultora, e integra un sistema dual de captación de leads: un formulario estructurado conectado a un script nativo en PHP para despacho inmediato de correos corporativos y un canal directo de respuesta rápida vía WhatsApp.',
    impact: 'Presencia digital 100% alineada a clientes corporativos, navegación instantánea entre secciones con 0 recargas de página, captación omnicanal (Email estructurado + WhatsApp directo) y costo $0 en servidores backend dedicados al aprovechar la ejecución nativa del hosting compartido.',
    roles: [
      {
        badge: 'HOME',
        title: 'Módulo Institucional (Home & Desarrollo en 5 Etapas)',
        items: [
          {
            head: 'Hero Section de Alto Impacto Visual',
            body: 'Portada Dark Luxury con superposición de gradientes oscuros, tipografía editorial Playfair Display y llamados a la acción (CTA) claros.'
          },
          {
            head: 'Grilla Interactiva de Los Cuatro Pilares',
            body: 'Presentación interactiva de Pasión, Misión, Vocación y Profesión con micro-interacciones en hover.'
          },
          {
            head: 'Showcase de Desarrollo Integral en 5 Etapas',
            body: 'Flujo completo (Análisis y Diagnóstico, Diseño de la Solución, Desarrollo, Implementación y Acompañamiento) con transiciones de escala y color en imágenes de alto contraste.'
          }
        ]
      },
      {
        badge: 'SERVICIOS',
        title: 'Módulo de Catálogo y Metodología (Services)',
        items: [
          {
            head: 'Tarjetas Dinámicas de Pilares de Servicio',
            body: 'Secciones de Propósito, Conocimiento, Impacto y Sustentabilidad con tematización condicional (primary-gold y accent-green) optimizada mediante useCallback.'
          },
          {
            head: 'Proceso de Desarrollo en 3 Fases Operativas',
            body: 'Desglose ejecutivo orientado a decisores de negocio, con diseño adaptable mediante Container Queries (@container).'
          }
        ]
      },
      {
        badge: 'CONTACTO B2B',
        title: 'Módulo de Conversión, Captación de Leads y Navegación Global',
        items: [
          {
            head: 'Formulario B2B Reactivo & Alertas Personalizadas',
            body: 'Releva nombre, correo, teléfono y Visión del Proyecto con validaciones sincrónicas (campos obligatorios y regex de email), bloqueo preventivo de doble envío (isSubmitting) y alertas con react-hot-toast.'
          },
          {
            head: 'Mapa Estilizado & Botón Flotante de WhatsApp',
            body: 'Panel con datos de oficina física, tarjeta de mapa con filtros CSS (muted-map y glass-dark) y WhatsAppButton persistente con mensaje pre-configurado (encodeURIComponent).'
          },
          {
            head: 'Navbar Sticky con Backdrop-Blur & ScrollToTop',
            body: 'Barra de navegación con indicador dinámico de ruta activa (useLocation), menú drawer responsivo para móviles y restauración automática de posición de scroll en cada transición.'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'Integración Backend Ligera en PHP para Hosting Compartido (contacto.php)',
        desc: 'En lugar de sobredimensionar la infraestructura con un servidor Node.js externo solo para el envío de correos, se desarrolló un endpoint REST nativo en PHP dentro de public/contacto.php. El script procesa el flujo php://input en formato JSON enviado por React, configura cabeceras MIME y Reply-To dinámicas hacia el correo del prospecto y despacha el aviso a info@ikigai-technology.com ejecutándose directamente en el entorno de Hostinger.'
      },
      {
        title: 'Sistema de Diseño "Dark Luxury" con Tailwind CSS y DaisyUI',
        desc: 'Se extendió la configuración de Tailwind (tailwind.config.js) con una paleta personalizada de alto contraste (charcoal, deep-slate, background-dark, primary-gold #C5A059 y accent-green #8BA888) y un par tipográfico editorial (Playfair Display Serif para títulos + Inter Sans-Serif para lectura ágil). Además, se crearon utilidades CSS nativas (soft-glow-focus, glass-dark, muted-map) para lograr acabados de vidrio esmerilado e integración visual del mapa sin depender de imágenes pesadas.'
      },
      {
        title: 'Gestión de Formularios Reactivos y Feedback UX No Intrusivo',
        desc: 'Se implementó react-hook-form en la vista de contacto para minimizar re-renderizados innecesarios durante el tipeo, validando el formato de los datos en el cliente antes de realizar el fetch al servidor. La respuesta del backend dispara notificaciones contextuales mediante react-hot-toast, cuyos estilos fueron customizados a nivel global en App.jsx para respetar la paleta oscura y dorada de la marca.'
      },
      {
        title: 'Arquitectura SPA Modular y Experiencia de Navegación Fluida',
        desc: 'El enrutamiento en cliente con react-router-dom v6 se complementó con un componente controlador de ciclo de vida (ScrollToTop.jsx) que escucha cambios en location.pathname y resetea el viewport a (0, 0), solucionando el clásico problema de retención de scroll entre vistas largas en SPAs.'
      },
      {
        title: 'Empaquetado Optimizado con Vite para Despliegue Estático + PHP',
        desc: 'La configuración de compilación con Vite genera bundles minificados de rápida carga inicial y copia automáticamente el endpoint public/contacto.php en la raíz del directorio de distribución (dist/), permitiendo actualizaciones atómicas en el public_html de Hostinger sin pasos manuales adicionales.'
      }
    ],
    stackFull: {
      frontend: ['React 18', 'Vite 7', 'Tailwind CSS 3', 'DaisyUI 4', 'React Router DOM v6', 'React Hook Form', 'React Hot Toast', 'Lucide React', 'React Icons'],
      backend: ['PHP (Endpoint REST nativo contacto.php)', 'Recepción JSON vía php://input', 'Despacho SMTP/Mail nativo con Reply-To'],
      database: ['Arquitectura Stateless (Sin Base de Datos Relacional)', 'Despacho Transaccional a Buzón Corporativo', 'WhatsApp Business API (wa.me)'],
      infra: ['Hostinger Web Hosting (Híbrido Estáticos Vite + PHP en public_html)', 'Dominio Oficial (ikigai-technology.com)', 'Deploy Atómico dist/']
    },
    capturesMeta: [
      {
        label: '01. Home & Pilares (Desktop + Mobile)',
        caption: 'Vista comparativa Escritorio y Mobile de la portada Dark Luxury con tipografía Playfair Display, los 4 pilares corporativos y el roadmap de desarrollo en 5 etapas.'
      },
      {
        label: '02. Servicios & Metodología (Desktop + Mobile)',
        caption: 'Diseño responsivo Escritorio y Mobile del catálogo de servicios con tarjetas tematizadas (Dorado y Verde) y el flujo ejecutivo en 3 fases.'
      },
      {
        label: '03. Formulario B2B & Contacto (Desktop + Mobile)',
        caption: 'Vista Escritorio y Mobile del módulo de captación B2B con formulario reactivo conectado al endpoint nativo PHP (contacto.php), mapa oscuro y canal de WhatsApp.'
      }
    ],
    f1: 'Integración híbrida SPA + Endpoint REST nativo en PHP (contacto.php) con $0 de costo en servidores dedicados',
    f2: 'Sistema de diseño Dark Luxury (Tailwind CSS + DaisyUI) con Playfair Display y paleta dorada/verde',
    f3: 'Captación B2B omnicanal: Formulario reactivo (React Hook Form + Hot Toast) + Canal directo a WhatsApp',
    f4: 'Enrutamiento dinámico (React Router v6) con controlador ScrollToTop y diseño adaptable con Container Queries',
    f5: 'Empaquetado ultrarrápido con Vite 7 copiando estáticos + endpoint PHP directo al public_html de Hostinger'
  }
};

