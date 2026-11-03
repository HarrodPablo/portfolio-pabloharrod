export const newnorthProject = {
  en: {
    subtitle: 'E-Commerce & High-End Cycling Catalog Management',
    client: 'New North (Official Store specialized in E-Bikes, Mountain Bikes, Urban Cycling, Apparel & Accessories in Argentina)',
    role: 'Full-Stack Developer — UI/UX Design, Software Architecture, Frontend & Backend Development, Performance Optimization & Production Deployment',
    status: 'In Production (Active)',
    desc: 'Custom Full-Stack E-Commerce platform with decoupled architecture (React SPA + Node.js/Express REST API & PostgreSQL). Centralizes the high-end cycling catalog with real-time multi-criteria filtering, automates financial pricing breakdowns (cash discount vs. interest-free installments), digitizes lead capture via an interactive Test Ride wizard, and drives sales conversion through a Direct WhatsApp Checkout engine backed by a role-protected Admin Backoffice.',
    problem: 'Before the platform, showcasing bicycles and gear was fragmented across social media (Instagram/WhatsApp), creating operational bottlenecks: sales advisors had to manually answer hundreds of repetitive inquiries regarding available sizes, colors, cash vs. installment pricing, and Test Ride scheduling. Moreover, there was no single source of truth for inventory control nor a fast digital storefront optimized for mobile devices.',
    solution: 'I developed a custom Full-Stack E-Commerce platform with a decoupled architecture (React SPA + Node.js/Express REST API and PostgreSQL). The system centralizes the catalog with smart real-time filters, automates financial pricing calculations (10% cash discount and interest-free installment breakdowns), digitizes customer acquisition through an interactive Test Ride booking wizard, and channels sales closing via a Direct WhatsApp Checkout engine with prior stock validation—plus a role-protected Admin Backoffice to manage inventory and upload multimedia galleries straight to the cloud.',
    impact: '100% centralized and self-manageable catalog in real time by the store owner without technical support; ~80% reduction in image transfer payload via dynamic CDN transformations (on-the-fly WebP/AVIF) for instant loading on 3G/4G networks; zero friction in sales conversion with automated WhatsApp Business orders; and Zero Cold-Start API latency via GZIP compression, lightweight DB projections, and 24/7 active uptime monitoring.',
    roles: [
      {
        badge: 'ADMIN',
        title: 'Backoffice & Inventory Management Module',
        items: [
          {
            head: 'Slide-Over Drawer CRUD Dashboard',
            body: 'Creation, editing, and deletion of products without page reloads through a fluid slide-over drawer interface.'
          },
          {
            head: 'Multi-Image & Video Multimedia Management',
            body: 'Drag-and-drop upload for cover image, secondary gallery (up to 5 additional photos), and demonstrative video integration (YouTube Embed).'
          },
          {
            head: 'Smart Featured Products Limit & Stock Traffic Light',
            body: 'Homepage positioning system (Featured Products) that validates occupied slots (1 to 8) in real time to prevent layout collisions, paired with automatic color-coded stock indicators (out of stock in red, critical <= 3 in orange, healthy in green).'
          }
        ]
      },
      {
        badge: 'COMMERCIAL',
        title: 'Sales Conversion & Lead Capture Module',
        items: [
          {
            head: 'Structured WhatsApp Checkout Engine',
            body: 'Automatic compilation of the shopping cart (quantities, model names, subtotals, and grand total) into a pre-formatted wa.me link ready to close the sale and coordinate shipping.'
          },
          {
            head: 'Interactive Test Ride Booking Wizard (/test-ride)',
            body: 'Dynamic lead-generation form with interactive chip selectors and strict validation allowing prospective buyers to schedule test rides based on their rider profile and desired bike type.'
          },
          {
            head: 'Contextualized Direct Product Inquiries',
            body: 'Dedicated WhatsApp button on every product sheet that automatically injects the exact model name being viewed into the advisor’s chat message.'
          }
        ]
      },
      {
        badge: 'CLIENT',
        title: 'Public Catalog & Shopping Experience Module',
        items: [
          {
            head: 'Multi-Criteria Exploration & Debounced Search',
            body: 'Reactive free-text search (name, description, brand, color) combined with real-time filters by Category (Bikes, Apparel, Accessories, Components), Subtype (E-Bikes, MTB, Road, Gravel, Urban), Official Brand, and Size.'
          },
          {
            head: 'Interactive Technical Sheet & Live Stock Meter',
            body: 'Image gallery with thumbnails, dynamic tabs (Description + Video, Technical Specs Table, Purchase Benefits), and a visual stock meter that deducts units already reserved in the user’s cart.'
          },
          {
            head: 'Automatic Financial Breakdown & Social Proof',
            body: 'Clear visualization of cash/transfer price (10% OFF), strikethrough list price, and exact interest-free installments (3, 6, and 12 payments), alongside interactive Hero model selectors, customer reviews, E-Bike community videos, and animated FAQs.'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'Zero-Disk Multimedia Pipeline & Dynamic CDN Optimization (Cloudinary)',
        desc: 'On the backend, files received via multer are processed exclusively in RAM buffers (multer.memoryStorage()) without ever touching the server disk and streamed directly to Cloudinary. On the frontend, I implemented the optimizeCloudinaryUrl() interceptor that injects runtime transformation parameters (c_limit,w_{width},f_auto,q_auto), delivering 100px–600px thumbnails in WebP/AVIF format tailored to the user’s browser.'
      },
      {
        title: 'Stateless JWT Authentication, RBAC & API Rate Limiting',
        desc: 'Catalog mutation routes (POST, PUT, PATCH, DELETE) are protected in Express by a dual middleware layer (authMiddleware + requireAdmin) that verifies the JWT cryptographic signature and encoded role without querying the database on every request. The login endpoint enforces brute-force protection with express-rate-limit (max 10 attempts per 15 min per IP), while the frontend Axios client injects the Bearer token and dispatches a global auth-logout event on 401 Unauthorized responses.'
      },
      {
        title: 'Conditional Database Projections & HTTP GZIP Compression',
        desc: 'The product controller uses conditional select projections in Prisma ORM: when requests originate from the public catalog, heavy arrays (images, videoUrl) are excluded to minimize JSON payload size, enabling them only on the product detail view or when the Admin panel requests ?admin=true. Combined with Express GZIP compression and PgBouncer connection pooling in Supabase PostgreSQL, API response times remain in the low milliseconds.'
      },
      {
        title: 'Smart Cache (Stale-While-Revalidate) & URL as Single Source of Truth',
        desc: 'Integrated TanStack React Query with a stale-while-revalidate strategy (staleTime: 0, gcTime: 10 min) that renders the catalog instantaneously from memory cache while syncing background updates and automatically invalidating queries after Admin mutations. Additionally, all catalog filter states reside in URLSearchParams (with a 400ms debounce on text search), enabling shareable deep links and preserving browser history.'
      },
      {
        title: 'Modular Frontend Architecture, Persistent Cart State & Code Splitting',
        desc: 'Applied route-level Code Splitting via React.lazy() and Suspense with a custom PageLoader fallback, drastically reducing the initial JavaScript bundle. Shopping cart state is managed with useReducer inside CartContext, persisted to localStorage, and coupled with strict inventory validation that prevents adding more units than the real stock available in PostgreSQL.'
      }
    ],
    stackFull: {
      frontend: ['React 18', 'Vite 5', 'Tailwind CSS 3', 'TanStack React Query v5', 'React Router DOM v6', 'React Hook Form', 'Axios', 'Context API (useReducer)', 'Lucide React'],
      backend: ['Node.js', 'Express.js', 'REST API', 'JSON Web Tokens (JWT)', 'Bcryptjs', 'Multer (In-Memory RAM)', 'Express Rate Limit', 'Compression (GZIP)', 'CORS'],
      database: ['PostgreSQL (Supabase Serverless)', 'PgBouncer Connection Pooler', 'Prisma ORM', 'Cloudinary CDN (WebP/AVIF)', 'LocalStorage Persistence'],
      infra: ['Vercel (Frontend SPA + Rewrites)', 'Render (Node.js Web Service)', 'Supabase Cloud', 'UptimeRobot (5-min Zero Cold-Start)', 'Custom Domain (newnorth.com.ar)']
    },
    capturesMeta: [
      {
        label: '01. Home & Storefront (Desktop + Mobile)',
        caption: 'Side-by-side responsive comparison (Desktop & Mobile) of New North’s main storefront, featuring the interactive E-Bike Hero, model selector, featured catalog, and community showcase.'
      },
      {
        label: '02. Catalog & Categories (Desktop + Mobile)',
        caption: 'Public catalog in Desktop and Mobile views with real-time multi-criteria filtering by category, bike subtype, official brand, and frame size synchronized directly in the URL.'
      },
      {
        label: '03. About Us, Story & FAQ (Desktop + Mobile)',
        caption: 'Brand identity, cycling community story, and interactive Frequently Asked Questions (FAQ) accordion adapted seamlessly across Desktop and Mobile screens.'
      }
    ],
    f1: 'Zero-Disk multimedia pipeline (Multer RAM stream -> Cloudinary dynamic WebP/AVIF CDN)',
    f2: 'TanStack React Query (Stale-While-Revalidate) + URLSearchParams reactive catalog filtering',
    f3: 'Stateless JWT + RBAC Admin Backoffice with express-rate-limit brute-force protection',
    f4: 'Conditional Prisma ORM projections + GZIP compression & Supabase PgBouncer pooling',
    f5: 'Automated financial pricing engine (cash discount / installments) & WhatsApp Checkout'
  },
  es: {
    subtitle: 'E-Commerce & Gestión de Catálogo para Ciclismo de Alta Gama',
    client: 'New North (Tienda oficial especializada en E-Bikes, Mountain Bikes, ciclismo urbano, indumentaria y accesorios en Argentina)',
    role: 'Full-Stack Developer — Diseño UI/UX, Arquitectura de Software, Desarrollo Frontend & Backend, Optimización de Performance y Despliegue en Producción',
    status: 'En Producción (Activo)',
    desc: 'Plataforma E-Commerce Full-Stack a medida con arquitectura desacoplada (SPA en React + API REST en Node.js/Express y PostgreSQL). Centraliza el catálogo con filtros inteligentes en tiempo real, automatiza el cálculo financiero de precios (descuento de contado vs. cuotas sin interés), digitaliza la captación de clientes mediante un formulario interactivo de Test Ride y canaliza el cierre de ventas a través de un motor de Checkout Directo por WhatsApp junto a un Backoffice protegido por roles.',
    problem: 'Antes de la plataforma, la exhibición del catálogo de bicicletas y equipamiento estaba fragmentada en redes sociales (Instagram/WhatsApp), lo que generaba cuellos de botella operativos: los asesores debían responder manualmente cientos de consultas repetitivas sobre disponibilidad de talles, colores, precios de contado vs. financiación en cuotas y coordinación de pruebas de manejo (Test Rides). Además, no existía una fuente única de verdad para el control de stock ni una vidriera digital rápida adaptada a dispositivos móviles.',
    solution: 'Desarrollé una plataforma E-Commerce Full-Stack a medida con arquitectura desacoplada (SPA en React + API REST en Node.js/Express y PostgreSQL). El sistema centraliza el catálogo con filtros inteligentes en tiempo real, automatiza el cálculo financiero de precios (descuento por pago de contado y desglose de cuotas sin interés), digitaliza la captación de clientes mediante un formulario interactivo de Test Ride y canaliza el cierre de ventas a través de un motor de Checkout Directo por WhatsApp que estructura el pedido completo con validación previa de stock. Incluye un Panel de Administración (Backoffice) protegido por roles para gestionar el inventario y subir galerías multimedia directamente a la nube.',
    impact: '100% del catálogo centralizado y autogestionable en tiempo real por el dueño sin depender de soporte técnico; reducción del ~80% en el peso de transferencia de imágenes mediante transformaciones dinámicas en CDN (WebP/AVIF on-the-fly) logrando carga instantánea en redes 3G/4G; 0 fricción en la conversión comercial hacia WhatsApp Business; y 0 latencia de arranque (Zero Cold-Start) con GZIP, proyecciones ligeras y monitoreo 24/7.',
    roles: [
      {
        badge: 'ADMIN',
        title: 'Módulo Admin (Backoffice & Gestión de Inventario)',
        items: [
          {
            head: 'Dashboard CRUD en Drawer Lateral',
            body: 'Creación, edición y eliminación de productos sin recargar la página mediante un panel deslizante (Slide-over Drawer).'
          },
          {
            head: 'Gestión Multimedia Multi-Imagen y Video',
            body: 'Subida drag-and-drop de imagen de portada, galería secundaria (hasta 5 imágenes adicionales) e integración de videos demostrativos (YouTube Embed).'
          },
          {
            head: 'Control de Destacados con Límite Inteligente & Semáforo de Stock',
            body: 'Sistema de posicionamiento en portada (Featured Products) que valida en tiempo real las posiciones ocupadas (1 a 8) para evitar colisiones visuales en la Home, sumado a indicadores cromáticos automáticos de stock (rojo sin stock, naranja crítico <= 3, verde saludable).'
          }
        ]
      },
      {
        badge: 'COMERCIAL',
        title: 'Módulo Comercial / Operador (Conversión & Captación de Leads)',
        items: [
          {
            head: 'Checkout Estructurado por WhatsApp',
            body: 'Compilación automática del carrito de compras (cantidades, nombres de modelos, subtotales y total general) en un enlace wa.me pre-formateado listo para cerrar la venta y coordinar el envío.'
          },
          {
            head: 'Wizard de Reserva de Test Ride (/test-ride)',
            body: 'Formulario dinámico con selectores tipo chip interactivos y validación estricta para que potenciales compradores agenden pruebas de manejo según su perfil y tipo de bicicleta buscada.'
          },
          {
            head: 'Consultas Directas Contextualizadas',
            body: 'Botón de WhatsApp en cada ficha de producto que inyecta automáticamente el nombre exacto del modelo consultado en el mensaje del asesor.'
          }
        ]
      },
      {
        badge: 'CLIENTE',
        title: 'Módulo Cliente (Catálogo Público & Experiencia de Compra)',
        items: [
          {
            head: 'Exploración y Filtrado Multicriterio',
            body: 'Búsqueda reactiva con debounce por texto libre (nombre, descripción, marca, color) combinada con filtros por Categoría (Bicicletas, Indumentaria, Accesorios, Componentes), Subtipo (Eléctricas, MTB, Ruta, Gravel, Urbanas), Marca oficial y Talle.'
          },
          {
            head: 'Ficha Técnica Interactiva y Medidor de Stock',
            body: 'Galería de imágenes con miniaturas, pestañas dinámicas (Descripción + Video, Tabla de Especificaciones Técnicas, Beneficios de compra) y medidor visual de stock disponible descontando las unidades ya reservadas en el carrito.'
          },
          {
            head: 'Desglose Financiero Automático y Prueba Social',
            body: 'Visualización clara del precio efectivo/transferencia (10% OFF), precio de lista tachado y cálculo exacto de cuotas sin interés (3, 6 y 12 cuotas), junto a Hero interactivo, reseñas de clientes, videos de la comunidad E-Bike y FAQ animado.'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'Pipeline Multimedia Zero-Disk & Optimización Dinámica en CDN (Cloudinary)',
        desc: 'En el backend, los archivos recibidos mediante multer se procesan exclusivamente en buffers de memoria RAM (multer.memoryStorage()) sin tocar el disco del servidor y se transmiten por stream directo a Cloudinary. En el frontend, implementé el interceptor optimizeCloudinaryUrl() que inyecta parámetros de transformación en tiempo de ejecución (c_limit,w_{width},f_auto,q_auto), entregando miniaturas de 100px–600px en formato WebP/AVIF según el navegador del usuario.'
      },
      {
        title: 'Autenticación Stateless JWT, RBAC & Seguridad en API',
        desc: 'Las rutas de mutación del catálogo (POST, PUT, PATCH, DELETE) están protegidas en Express mediante una doble capa de middlewares (authMiddleware + requireAdmin) que verifican la firma criptográfica del JWT y el rol codificado sin sobrecargar la base de datos en cada petición. El endpoint de login incorpora protección contra fuerza bruta con express-rate-limit (máx. 10 intentos cada 15 min por IP), mientras que el cliente Axios en el frontend gestiona la inyección del token Bearer y dispara un evento global auth-logout ante respuestas 401 Unauthorized.'
      },
      {
        title: 'Optimización de Consultas en Base de Datos & Compresión HTTP GZIP',
        desc: 'El controlador de productos utiliza proyecciones condicionales en Prisma ORM (select): cuando la petición proviene del catálogo público, excluye arreglos pesados (images, videoUrl) para minimizar el payload JSON, habilitándolos únicamente en la vista de detalle o cuando el panel administrativo solicita ?admin=true. Sumado al middleware compression (GZIP) en Express y al Connection Pooling (PgBouncer) en Supabase PostgreSQL, los tiempos de respuesta de la API se mantienen en pocos milisegundos.'
      },
      {
        title: 'Caché Inteligente (Stale-While-Revalidate) & URL como Única Fuente de Verdad',
        desc: 'Integré TanStack React Query configurando una estrategia stale-while-revalidate (staleTime: 0, gcTime: 10 min) que muestra el catálogo de forma instantánea desde la memoria caché mientras sincroniza cambios en segundo plano, invalidando automáticamente las queries tras cada alta, baja o modificación en el panel Admin. Además, todo el estado de filtros del catálogo reside en URLSearchParams (con debounce de 400ms en búsqueda textual), permitiendo compartir enlaces directos a búsquedas específicas.'
      },
      {
        title: 'Arquitectura Frontend Modular, Estado Global Persistente & Code Splitting',
        desc: 'Apliqué Code Splitting a nivel de rutas mediante React.lazy() y Suspense con un fallback personalizado (PageLoader), reduciendo drásticamente el bundle inicial de JavaScript. El estado del carrito se administra con useReducer dentro de CartContext, sincronizado en localStorage y acoplado a una validación estricta de inventario que impide agregar más unidades que el stock real disponible en base de datos.'
      }
    ],
    stackFull: {
      frontend: ['React 18', 'Vite 5', 'Tailwind CSS 3', 'TanStack React Query v5', 'React Router DOM v6', 'React Hook Form', 'Axios', 'Context API (useReducer)', 'Lucide React'],
      backend: ['Node.js', 'Express.js', 'REST API', 'JSON Web Tokens (JWT)', 'Bcryptjs', 'Multer (In-Memory RAM)', 'Express Rate Limit', 'Compression (GZIP)', 'CORS'],
      database: ['PostgreSQL (Supabase Serverless)', 'PgBouncer Connection Pooler', 'Prisma ORM', 'Cloudinary CDN (WebP/AVIF)', 'LocalStorage Persistence'],
      infra: ['Vercel (Frontend SPA + Rewrites)', 'Render (Node.js Web Service)', 'Supabase Cloud', 'UptimeRobot (Monitoreo 5 min)', 'Dominio Oficial (newnorth.com.ar)']
    },
    capturesMeta: [
      {
        label: '01. Inicio & Storefront (Escritorio + Mobile)',
        caption: 'Comparativa responsiva (Escritorio y Mobile) de la tienda principal de New North con Hero interactivo, selector de modelos en miniatura, productos destacados y comunidad.'
      },
      {
        label: '02. Catálogo & Categorías (Escritorio + Mobile)',
        caption: 'Catálogo público en versión Escritorio y Mobile con filtrado multicriterio en tiempo real por categoría, subtipo de bicicleta, marca oficial y talle sincronizado en la URL.'
      },
      {
        label: '03. Quiénes Somos, Historia & FAQ (Escritorio + Mobile)',
        caption: 'Sección institucional de historia de la marca y acordeón interactivo de Preguntas Frecuentes (FAQ) adaptado perfectamente a Escritorio y dispositivos móviles.'
      }
    ],
    f1: 'Pipeline multimedia Zero-Disk (Multer en RAM -> Cloudinary CDN con WebP/AVIF dinámico)',
    f2: 'TanStack React Query (Stale-While-Revalidate) + Filtros reactivos sincronizados en URLSearchParams',
    f3: 'Backoffice Admin con JWT Stateless, RBAC y protección anti fuerza bruta (express-rate-limit)',
    f4: 'Proyecciones condicionales en Prisma ORM + Compresión GZIP y PgBouncer en Supabase PostgreSQL',
    f5: 'Motor financiero automático (10% OFF contado / cuotas) + Checkout estructurado a WhatsApp Business'
  }
};

