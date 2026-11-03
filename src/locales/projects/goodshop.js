export const goodshopProject = {
  en: {
    subtitle: 'E-Commerce, ERP & AI-Powered CRM Platform for Car Detailing',
    client: 'Specialized Professional Car Detailing Supplies & Equipment Store in Tucumán, Argentina (Live Production for In-Store & Online Sales)',
    role: 'Full-Stack Developer — Business Discovery, UI/UX Design, Software Architecture, Backend & Frontend Development, Multimodal AI Integration & Deployment',
    status: 'In Production (Commercial / Active)',
    desc: 'Comprehensive E-Commerce + ERP/CRM platform unifying a public automotive storefront with an administrative Back-Office powered by Multimodal Artificial Intelligence (Google Gemini 2.5 Flash) and an integrated HTML5 Canvas Graphic Studio. Automates atomic inventory deduction (for both individual products and composite kits), digitizes supplier invoices via AI OCR, monitors chemical batch expiration dates via scheduled Cron jobs, and generates A4 PDF quotes/delivery notes ready for one-click WhatsApp dispatch.',
    problem: 'Prior to the system, business operations relied on disconnected manual spreadsheets: there was zero traceability over expiration dates for expensive chemical supplies (ceramic coatings, polishes, sealants), entering supplier invoices consumed hours of manual typing, and designing promotional flyers for product "Combos" required external graphic editing. Furthermore, WhatsApp orders lacked real-time stock validation and quotes/delivery notes were drafted by hand.',
    solution: 'I engineered a unified E-Commerce + ERP/CRM platform connecting the public catalog with an AI-powered Back-Office (Google Gemini 2.5 Flash) and an in-browser HTML5 Canvas Graphic Studio. The system automates atomic inventory deduction (both single items and multi-item composite kits), digitizes supplier invoices via AI OCR, monitors expiring chemical batches with scheduled background jobs, and generates A4 PDF quotes/receipts ready to send via WhatsApp in one click.',
    impact: '90% reduction in expense entry and promotional combo design time, zero stockouts from concurrent sales thanks to ACID database transactions, 100% chemical batch (ProductLot) traceability with preventive alerts, and 3 integrated modules (Customer Storefront, Operations/Inventory, and AI Finance/BI).',
    roles: [
      {
        badge: 'ADMIN & STUDIO',
        title: 'Admin Module (Operations, Batch Inventory & AI Graphic Studio)',
        items: [
          {
            head: 'Catalog Management & Batch Traceability (ProductLot)',
            body: 'Full CRUD for products, hierarchical categories, and brands featuring minimum stock thresholds, manufacturing/expiration dates, and configurable automated batch alerts.'
          },
          {
            head: 'In-Browser HTML5 Canvas Combo Banner Studio',
            body: 'Visual builder for promotional combos and kits (up to 4 products) that automatically renders an 800x450px flyer in HTML5 Canvas combining AI-generated backgrounds (Pollinations AI via Cloudinary proxy), automated background-removed product cutouts (@imgly/background-removal-node), Rajdhani / JetBrains Mono typography, and direct Cloudinary CDN upload.'
          },
          {
            head: 'A4 PDF Quote/Receipt Engine & Order State Machine',
            body: 'Client-side A4 document generator (html2pdf.js) with persistent sequential numbering and direct WhatsApp dispatch, paired with an order lifecycle state machine (pending, in_transit, delivered, cancelled) that automatically restores or deducts stock in real time.'
          }
        ]
      },
      {
        badge: 'AI FINANCE & BI',
        title: 'Finance & Business Intelligence Module (Multimodal Gemini 2.5 Flash)',
        items: [
          {
            head: 'AI Invoice OCR Scanner (Gemini 2.5 Flash)',
            body: 'Upload supplier invoices or receipts (images or PDF) analyzed by the multimodal model to automatically extract supplier, date, line-item breakdown (name, quantity, unitPrice, subtotal), and grand total into structured JSON.'
          },
          {
            head: 'Virtual AI Financial Consultant (AI CFO)',
            body: 'Built-in business analyst inside the reporting dashboard that evaluates period revenue, average ticket, paid vs. pending expenses, net margin, and top products/brands to issue an executive diagnosis with operational alerts and 3 actionable strategic recommendations.'
          },
          {
            head: 'Interactive Recharts BI Dashboard & Cashflow Control',
            body: 'Dynamic revenue evolution charts grouped by day or month, category distribution, brand rankings with period-over-period percentage comparisons, and accounts payable tracking (paid / pending).'
          }
        ]
      },
      {
        badge: 'STOREFRONT',
        title: 'Customer Module (Automotive Storefront & Hybrid Checkout)',
        items: [
          {
            head: 'Dark-Mode Automotive UX & HD Video Hero',
            body: 'High-impact public storefront featuring an HD video Hero, fluid micro-animations, 100% responsive layout, and optimized Skeleton loading states.'
          },
          {
            head: 'Faceted Catalog & Promotional Combo Carousel',
            body: 'Instant filtering by category, brand, and sorting, alongside a dedicated combo showcase that calculates and displays real savings compared to individual item purchases.'
          },
          {
            head: 'Persistent Zustand Cart & Stock-Validated WhatsApp Checkout',
            body: 'Slide-over cart drawer and dedicated checkout view persisted in localStorage that records the order in PostgreSQL after validating live stock before redirecting to WhatsApp with a pre-formatted summary and PDF receipt option.'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'HTML5 Canvas Graphic Studio with Generative AI & Tainted Canvas Prevention',
        desc: 'So administrators could publish combos without Photoshop, I built a custom rendering engine in canvasCombo.js backed by two hooks (useGenerativeBackground and useProductCutouts). Backgrounds are generated dynamically from the combo name using a deterministic hash seed with an 800ms debounce and in-memory Map cache, routing images through Cloudinary Fetch with crossOrigin="anonymous" headers. This resolves browser CORS restrictions, allowing composition of AI backgrounds, drop shadows, dynamic 1-to-4 product grids, and direct canvas.toBlob() export to Cloudinary.'
      },
      {
        title: 'Multimodal AI Applied to Finance (Invoice OCR & Executive BI with Gemini 2.5 Flash)',
        desc: 'Integrated the @google/generative-ai SDK (gemini-2.5-flash) across two critical backend pipelines. In gastos.controller.js, binary Multer buffers (image/* or application/pdf) are converted to Base64 and injected into a schema-constrained prompt to extract invoice headers and line items without human intervention. In reports.controller.js, the /api/reports/analizar-ia endpoint acts as a virtual CFO cross-referencing operational and financial metrics, caching responses in frontend sessionStorage by date range.'
      },
      {
        title: 'ACID Transactions for Composite Inventory & Batch Expiration Cron Jobs',
        desc: 'In orders.controller.js, creating, cancelling, or deleting orders executes inside interactive Prisma transactions (prisma.$transaction). When a customer buys a Combo (Kit), the engine recursively traverses its KitItems, verifies availability of every underlying product, and deducts multiplied quantities (kitItem.quantity * orderItem.quantity)—performing a full rollback if any single component lacks stock. In parallel, background node-cron jobs audit critical stock every 5 minutes, check ProductLot expirations hourly, and run a 4-minute keep-alive ping (SELECT 1) to prevent cold starts on Neon Serverless PostgreSQL.'
      },
      {
        title: 'Zero-Trust Security, Google OAuth 2.0 Whitelist & HTTP Hardening',
        desc: 'The Admin panel eliminates vulnerable database-stored passwords by delegating identity to Google OAuth 2.0 (Passport.js), validating authenticated emails against a strict administrator whitelist (ALLOWED_ADMIN_EMAILS) before issuing a 24h signed JWT. On the client, a global Axios interceptor catches 401/403 responses, clears the auth store, and redirects cleanly. The API is hardened with Helmet (strict Content Security Policy directives) and dynamic regex CORS validation.'
      },
      {
        title: 'React 19 Architecture, Manual Rollup Code-Splitting & Hybrid State',
        desc: 'Built on React 19 + Vite 8, decoupling server state (@tanstack/react-query for catalog, brand, and category caching/invalidation) from client state (Zustand for persistent cart, JWT session, and alerts). To maximize First Contentful Paint, I implemented route-level Lazy Loading (React.lazy + Suspense) and configured Rollup manualChunks to isolate heavy libraries into independent bundles (react-vendor, charts, forms, data, and ui).'
      }
    ],
    stackFull: {
      frontend: ['React 19', 'Vite 8', 'Tailwind CSS', 'Zustand (Persist)', 'TanStack React Query v5', 'React Router DOM v7', 'React Hook Form + Zod', 'Recharts', 'HTML5 Canvas API', 'html2pdf.js'],
      backend: ['Node.js', 'Express 5', 'Google Gemini 2.5 Flash SDK', 'Passport.js (Google OAuth 2.0)', 'JWT', 'Multer', '@imgly/background-removal-node', 'node-cron', 'Helmet (CSP)'],
      database: ['PostgreSQL (Neon Serverless + Pooling)', 'Prisma ORM v5 (Interactive ACID Transactions)', 'Cloudinary CDN (Upload API & Fetch CORS Proxy)', 'SessionStorage / LocalStorage'],
      infra: ['Vercel (Frontend SPA + SEO/OpenGraph)', 'Cloud Node.js Server (Backend API)', 'Rollup Manual Code-Splitting', 'Git & GitHub']
    },
    capturesMeta: [
      {
        label: '01. Automotive Storefront (Desktop)',
        caption: 'Main Dark-Mode automotive storefront featuring the HD video Hero, brand marquee, best-sellers showcase, and persistent cart navigation.'
      },
      {
        label: '02. Faceted Catalog & Combos (Desktop)',
        caption: 'Interactive catalog with real-time category/brand filtering, sorting, and promotional Combo kits with automated savings calculation.'
      },
      {
        label: '03. Admin — Store Overview & KPIs',
        caption: 'Administrative Back-Office dashboard displaying global store metrics, critical stock alerts, batch expiration warnings, and active order management.'
      },
      {
        label: '04. Admin — Create Product & Batches',
        caption: 'Product creation and inventory management form supporting multi-image Cloudinary uploads, minimum stock thresholds, and chemical batch (ProductLot) expiration tracking.'
      },
      {
        label: '05. Admin — Expenses & AI Invoice OCR',
        caption: 'Financial expenses module featuring the smart OCR scanner powered by Google Gemini 2.5 Flash that extracts supplier, date, and line items from invoice photos or PDFs.'
      },
      {
        label: '06. Admin — BI Reports & Statistics',
        caption: 'Business Intelligence dashboard with Recharts cashflow visualizations, profitability breakdowns, top-selling rankings, and AI financial diagnostics.'
      },
      {
        label: '07. Full Mobile Ecosystem (Store + Admin)',
        caption: 'Comprehensive mobile showcase displaying the responsive adaptation across Home, Catalog, Best-Sellers, Admin Overview, Expenses, and Created Products.'
      },
      {
        label: '08. Official A4 PDF Receipt / Delivery Note',
        caption: 'Automatically generated A4 PDF receipt / delivery note (html2pdf.js) with itemized breakdown and sequential numbering ready for instant WhatsApp dispatch.'
      }
    ],
    f1: 'In-browser HTML5 Canvas Combo Studio with Generative AI backgrounds & automated product background removal',
    f2: 'Multimodal Gemini 2.5 Flash integration: Automated Invoice OCR (image/PDF to JSON) & Virtual AI CFO Consultant',
    f3: 'Interactive Prisma ACID transactions for recursive composite Kit stock deduction + node-cron batch expiration alerts',
    f4: 'Zero-Trust Admin security via Google OAuth 2.0 (Passport.js email whitelist), JWT, and strict Helmet CSP',
    f5: 'React 19 + Vite 8 SPA with custom Rollup manualChunks, TanStack Query v5, Recharts BI & A4 PDF generator'
  },
  es: {
    subtitle: 'Plataforma E-Commerce, ERP & CRM con IA para Car Detailing',
    client: 'Tienda especializada en insumos y equipamiento profesional de estética vehicular (Car Detailing) en Tucumán, Argentina (operando en producción para gestión comercial de salón y venta online).',
    role: 'Full-Stack Developer — Relevamiento de negocio, Diseño UI/UX, Arquitectura de Software, Desarrollo Backend & Frontend, Integración de IA Multimodal y Despliegue.',
    status: 'En Producción (Privado / Comercial)',
    desc: 'Ecosistema Full-Stack integral que fusiona una tienda e-commerce B2C de estética automotriz dark-mode con un ERP/CRM administrativo potenciado por Inteligencia Artificial (Google Gemini 2.5 Flash, remoción neural de fondos e IA generativa de escenas). Incluye trazabilidad por lotes con alertas automáticas, control transaccional de kits compuestos, escaneo OCR de facturas de proveedores, consultor financiero IA y un estudio de diseño gráfico integrado en el navegador.',
    problem: 'El negocio operaba con procesos manuales fragmentados: el control de stock de productos individuales y combos promocionales ("kits") sufría desfasajes constantes al venderse por distintos canales; no existía trazabilidad sobre las fechas de vencimiento de químicos automotrices (ceras, selladores, polímeros); la carga de facturas de proveedores y el análisis de rentabilidad se realizaban en planillas aisladas; y la creación de flyers publicitarios para nuevos combos demandaba horas de edición externa.',
    solution: 'Desarrollé un ecosistema Full-Stack integral que fusiona una tienda e-commerce B2C de estética automotriz dark-mode con un ERP/CRM administrativo potenciado por Inteligencia Artificial (Google Gemini 2.5 Flash, remoción neural de fondos e IA generativa de escenas). Incluye trazabilidad por lotes con alertas automáticas, control transaccional de kits compuestos, escaneo OCR de facturas de proveedores, consultor financiero IA y un estudio de diseño gráfico integrado en el navegador.',
    impact: 'Reducción del 90% en el tiempo de carga de gastos y creación de piezas gráficas promocionales; 0 quiebres de stock por ventas simultáneas gracias a transacciones ACID en base de datos; control del 100% de vencimientos químicos mediante alertas automatizadas por cron; y centralización total de la operación (mostrador, tienda online, inventario, presupuestos PDF y finanzas) en 3 módulos integrados.',
    roles: [
      {
        badge: 'ADMIN & ESTUDIO IA',
        title: 'Módulo de Administración, ERP & Estudio Creativo IA (/admin)',
        items: [
          {
            head: 'Gestión de Catálogo y Trazabilidad por Lotes (ProductLot)',
            body: 'ABM completo de productos simples y Kits/Combos compuestos, con carga de múltiples imágenes en Cloudinary, control de stock mínimo y registro de lotes con número de partida, cantidad y fecha de vencimiento.'
          },
          {
            head: 'Combo Banner Studio en Navegador (HTML5 Canvas + IA)',
            body: 'Herramienta de diseño integrada que recorta automáticamente el fondo de cada producto con redes neuronales (@imgly/background-removal-node), genera escenarios fotográficos de talleres de detailing mediante IA generativa (Pollinations AI proxy vía Cloudinary) y compone banners publicitarios en alta resolución listos para publicar.'
          },
          {
            head: 'Motor de Presupuestos/Remitos PDF & Máquina de Estados de Pedidos',
            body: 'Flujo controlado de órdenes (PENDING -> PROCESSING -> SHIPPED -> DELIVERED / CANCELLED) con reversión transaccional automática de stock al cancelar, y confeccionador de presupuestos/remitos A4 exportables en PDF (html2pdf.js) con envío directo por WhatsApp.'
          }
        ]
      },
      {
        badge: 'FINANZAS & BI IA',
        title: 'Módulo de Inteligencia Financiera & OCR con Gemini IA (/admin/gastos, /admin/reportes)',
        items: [
          {
            head: 'Escáner OCR de Facturas con IA (Gemini 2.5 Flash)',
            body: 'Subida de fotos o PDFs de comprobantes/tickets de proveedores que son procesados por visión multimodal para extraer automáticamente proveedor, fecha, categoría e ítems línea por línea en formato JSON estructurado, autocompletando el formulario contable.'
          },
          {
            head: 'Consultor Financiero IA (CFO Virtual)',
            body: 'Motor de Business Intelligence que analiza ingresos brutos, gastos operativos, margen neto, ticket promedio y productos de baja rotación para redactar en vivo un diagnóstico ejecutivo con fortalezas, alertas financieras y un plan de acción comercial.'
          },
          {
            head: 'Dashboard Analítico con Recharts & Control de Caja',
            body: 'Visualización interactiva de flujo de caja (Ingresos vs. Egresos), desglose de gastos por categoría (Stock, Alquiler, Servicios, Marketing, Impuestos), ranking de productos más vendidos y exportación de reportes a Excel/CSV.'
          }
        ]
      },
      {
        badge: 'TIENDA CLIENTE',
        title: 'Módulo Storefront E-Commerce B2C & Checkout (/shop, /cart, /checkout)',
        items: [
          {
            head: 'Experiencia Dark-Mode Automotive & Video Hero HD',
            body: 'Landing page de alto impacto visual con estética racing/detailing en tonos negro profundo y amarillo neón (#FFD700), video hero en bucle optimizado, marquesina infinita de marcas y micro-interacciones fluidas.'
          },
          {
            head: 'Catálogo Facetado y Carrusel de Combos',
            body: 'Buscador reactivo con debounce, filtrado combinado por categorías, ordenamiento por precio/relevancia, vista rápida en modal (ProductModal) y sección destacada de Kits con cálculo automático de porcentaje de ahorro.'
          },
          {
            head: 'Carrito Persistente en Zustand y Checkout Híbrido',
            body: 'Persistencia en localStorage con validación de stock máximo en tiempo real (incluyendo cálculo dinámico del stock disponible de un combo según el componente más restrictivo) y cierre de compra con generación de orden y redirección formateada a WhatsApp.'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'Estudio Gráfico HTML5 Canvas con IA Generativa & Prevención de Tainted Canvas',
        body: 'Pipeline programático en canvasCombo.js con los hooks useGenerativeBackground y useProductCutouts que resuelve restricciones CORS enrutando imágenes de IA a través de un proxy firmado de Cloudinary Fetch (crossOrigin="anonymous"), permitiendo renderizar sombras vectoriales, badges y tipografía Rajdhani/JetBrains Mono para exportar blobs PNG limpios en 800x450px sin bloquear el hilo principal.'
      },
      {
        title: 'IA Multimodal Aplicada a Finanzas (OCR de Comprobantes & BI Ejecutivo con Gemini 2.5 Flash)',
        body: 'En gastos.controller.js, los buffers en memoria (Multer) se inyectan como partes inlineData Base64 al modelo gemini-2.5-flash con prompts determinísticos que devuelven JSON puro para conciliación automática. En reports.controller.js (/api/reports/analizar-ia), las métricas de Prisma alimentan a un agente consultor financiero con caché inteligente en sessionStorage.'
      },
      {
        title: 'Transacciones ACID para Inventario Compuesto & Cron Jobs de Vencimientos',
        body: 'Al confirmar o anular un pedido que incluye tanto productos individuales como Kits (KitItem), el backend ejecuta transacciones atómicas interactivas (prisma.$transaction) que descuentan o restauran recursivamente el stock de cada insumo base. En paralelo, demonios con node-cron auditan cada 5 min quiebres de stock, cada 1 hora lotes próximos a vencer (ProductLot) y cada 4 min ejecutan un keep-alive SELECT 1 en Neon PostgreSQL.'
      },
      {
        title: 'Seguridad Zero-Trust, Google OAuth 2.0 Whitelist & Hardening HTTP',
        body: 'Autenticación delegada con Passport.js (passport-google-oauth20) restringida en servidor mediante una lista blanca estricta de correos autorizados (ALLOWED_ADMIN_EMAILS), emitiendo tokens JWT firmados con expiración de 24h. En el cliente, un interceptor global de Axios captura respuestas 401/403 para purgar sesión automáticamente, respaldado por cabeceras CSP en Helmet y CORS por expresiones regulares.'
      },
      {
        title: 'Arquitectura Frontend React 19, Code-Splitting Manual & Gestión de Estado Híbrida',
        body: 'SPA construida sobre React 19 y Vite 8 separando el estado del servidor (TanStack React Query v5 con invalidación selectiva de caché) del estado efímero del cliente (Zustand con middleware persist). El empaquetado de producción aplica Lazy Loading de rutas administrativas (React.lazy + Suspense) y particionado manual de chunks en Rollup (vendor-react, vendor-charts, vendor-ui, vendor-query).'
      }
    ],
    stackFull: {
      frontend: ['React 19', 'Vite 8', 'Tailwind CSS', 'Zustand (Persist Middleware)', 'TanStack React Query v5', 'React Router DOM v7', 'React Hook Form + Zod', 'Recharts', 'HTML5 Canvas API', 'html2pdf.js'],
      backend: ['Node.js', 'Express 5', 'Google Generative AI SDK (gemini-2.5-flash)', 'Passport.js (Google OAuth 2.0)', 'JWT', 'Multer', '@imgly/background-removal-node', 'node-cron', 'Helmet (CSP)'],
      database: ['PostgreSQL (Neon Serverless + Pooling)', 'Prisma ORM v5 (Transacciones ACID)', 'Cloudinary CDN (Upload API & Fetch Proxy)', 'SessionStorage / LocalStorage'],
      infra: ['Vercel (Frontend SPA + SEO/OpenGraph)', 'Cloud Node.js Server (Backend API)', 'Rollup Manual Code-Splitting', 'Git & GitHub']
    },
    capturesMeta: [
      {
        label: '01. Inicio & Storefront (Escritorio)',
        caption: 'Landing Page principal en modo oscuro con estética automotriz, video hero HD, marquesina de marcas, destacados y navegación con carrito persistente.'
      },
      {
        label: '02. Catálogo Facetado & Combos (Escritorio)',
        caption: 'Vista del catálogo interactivo con filtros en tiempo real por categoría y marca, ordenamiento y sección de Combos/Kits con cálculo automático de ahorro.'
      },
      {
        label: '03. Admin — Resumen de Tienda',
        caption: 'Panel principal de administración (Back-Office) con indicadores clave de operación, alertas de stock crítico, control de lotes por vencer y gestión de pedidos.'
      },
      {
        label: '04. Admin — Crear Producto y Lotes',
        caption: 'Formulario de alta y edición de productos en escritorio con subida múltiple a Cloudinary, configuración de stock mínimo y trazabilidad de lotes químicos (ProductLot).'
      },
      {
        label: '05. Admin — Gastos & Escáner OCR IA',
        caption: 'Módulo de control de gastos operativos e integración con el escáner OCR (Gemini 2.5 Flash) para digitalizar facturas y tickets de proveedores automáticamente.'
      },
      {
        label: '06. Admin — Reportes BI y Estadísticas',
        caption: 'Dashboard de Business Intelligence con gráficos interactivos Recharts de ingresos vs. egresos, margen neto, ranking de productos y diagnóstico del Consultor IA.'
      },
      {
        label: '07. Ecosistema Mobile Completo',
        caption: 'Composición móvil integral donde se aprecia la adaptación 100% responsiva de Inicio, Catálogo, Lo Más Vendido, Resumen Admin, Gastos y Productos Creados.'
      },
      {
        label: '08. Remito / Recibo Oficial en PDF A4',
        caption: 'Comprobante y remito oficial en formato A4 generado dinámicamente en PDF (html2pdf.js) con numeración correlativa y desglose listo para enviar por WhatsApp.'
      }
    ],
    f1: 'Combo Banner Studio en navegador (HTML5 Canvas + remoción neural de fondo + IA generativa de escenas)',
    f2: 'Escáner OCR de facturas de proveedores y Consultor Financiero BI impulsados por Google Gemini 2.5 Flash',
    f3: 'Control de inventario compuesto (Kits) mediante transacciones ACID en Prisma y trazabilidad de lotes con node-cron',
    f4: 'Generador de presupuestos y remitos PDF A4 en cliente (html2pdf.js) con despacho directo por WhatsApp',
    f5: 'Arquitectura React 19 + Vite 8 con TanStack Query v5, Zustand persistente y seguridad Google OAuth 2.0 Whitelist'
  }
};

