export const radiologyProject = {
  en: {
    subtitle: 'Web PACS & DICOM Medical Portal',
    client: 'Diagnóstico López Imaging Center (Clínica del Pilar — Live Production)',
    role: 'Full-Stack Developer & Cloud Architect — Discovery, UI/UX Design, PACS/DICOM Architecture, Backend, Frontend, Security & VPS/Cloud Infrastructure',
    status: 'In Production (Active)',
    desc: 'Full-Stack medical PACS platform integrated directly with Orthanc PACS server and Agfa DR100E digital radiology equipment. Automates DICOM study ingestion, patient profile matching by National ID (DNI), remote medical reporting with digital signatures, and instant high-definition X-ray viewing via embedded Stone Web Viewer plus downloadable A4 PDF reports.',
    problem: 'Prior to this system, delivering radiographic studies relied on expensive physical X-ray films, CDs, or untracked manual dispatches. This caused diagnostic delays, high operational supply costs, and friction for both reporting radiologists and patients who had to travel in person to pick up their results.',
    solution: 'I engineered a Full-Stack medical platform integrated directly with the Orthanc PACS server and Agfa DR100E digital radiology equipment. The system automates DICOM study imports, automatically links or creates the patient profile by National ID (DNI), enables doctors to write and digitally sign diagnostic reports from anywhere, and gives patients instant access to high-definition radiographs (via an embedded Stone Web Viewer) alongside downloadable A4 PDF reports.',
    impact: '100% elimination of physical delivery supplies (films/CDs), zero latency between X-ray capture and cloud availability, concurrent multi-role support (ADMIN, DOCTOR, PATIENT), and complete security isolation through a custom PACS Reverse Proxy.',
    roles: [
      {
        badge: 'ADMIN',
        title: 'Administration & PACS Sync Module',
        items: [
          {
            head: 'Direct PACS Import (Agfa / Orthanc)',
            body: 'Real-time synchronized panel with the Orthanc server that detects newly captured studies awaiting assignment, parses DICOM metadata (PatientName, PatientID, StudyDate, StudyDescription, Series), and imports them in one click—automatically creating the patient if needed and assigning the specialist physician.'
          },
          {
            head: 'Unified Management Dashboard',
            body: 'Master dashboard featuring optimized SQL pagination, debounced search, live metrics (total patients, studies with/without report), and instant status filters.'
          },
          {
            head: 'Complete User & Study CRUD + 16-bit Agfa Converter',
            body: 'Full creation, editing, and management of patients, doctors, and administrators, including optional manual image uploads with automatic conversion of Agfa 16-bit raw files into lightweight WebP images.'
          }
        ]
      },
      {
        badge: 'DOCTOR',
        title: 'Radiologist & Clinical Reporting Module',
        items: [
          {
            head: 'Clinical Worklist Tray',
            body: 'Smart filtering of assigned studies and pending diagnostic reports (onlyWithoutReports, onlyMyStudies) for rapid clinical triage.'
          },
          {
            head: 'Embedded Stone Web DICOM Viewer',
            body: 'Multi-slice and multi-series diagnostic inspection featuring Window/Level (Brightness/Contrast W/L) adjustments, zoom, pan, negative inversion, and clinical measurements.'
          },
          {
            head: 'Diagnostic Reporting & Digital Signature',
            body: 'Creation and editing of radiological reports linked directly to the study, with one-click transactional email notifications dispatched to the patient via Resend.'
          }
        ]
      },
      {
        badge: 'PATIENT',
        title: 'Patient Self-Service Portal',
        items: [
          {
            head: 'Instant National ID (DNI) Access',
            body: 'Fast, frictionless login using their document number to consult their complete radiological history from any smartphone or desktop.'
          },
          {
            head: 'Interactive High-Resolution X-Ray Viewing',
            body: 'Secure access to their own DICOM images at full diagnostic resolution without installing any external software.'
          },
          {
            head: 'Official A4 Medical Report PDF Download',
            body: 'Dynamic A4 document generation featuring protocol number, clinical metadata, detailed findings, and the specialist doctor’s digitized signature—ready to print or share with their primary physician.'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'PACS Integration, DICOMweb & Agfa Binary Conversion',
        desc: 'The backend communicates with the Orthanc PACS server using the expanded API (/studies?expand=true) to eliminate the N+1 request problem when listing studies. It also features a custom binary parser (parseAgfaHeader + Uint16Array + sharp) capable of reading 15/16-bit raw buffers from Agfa modalities, computing optimal windowing (min/max normalization), and transforming them into lightweight WebP previews.'
      },
      {
        title: 'PACS Reverse Proxy with Dynamic Rewriting & Security Gatekeeper',
        desc: 'To never expose the Orthanc server or its HTTP Basic credentials to the client, I designed a custom Express reverse proxy (/api/orthanc/pacs/*). It intercepts the Stone Web Viewer HTML, rewrites resource paths on the fly, and injects session tokens. It streams DICOM binaries and application/dicom+json buffers while the patientCanAccessOrthancPath gatekeeper verifies in PostgreSQL that the patient owns the requested StudyInstanceUID (0020000D), series, or instance.'
      },
      {
        title: 'Hybrid Authentication & Role-Based Access Control (RBAC)',
        desc: 'Layered security using JWT and Bcrypt password hashing. Because medical viewers inside <iframe> and <img> tags perform internal WADO-RS and WebAssembly sub-resource requests without Authorization headers, I implemented the orthancProxyAuth middleware to validate credentials hybridly via Bearer Header, Query Token (?token=), Referer inspection, and secure httpOnly (sameSite: strict) cookies.'
      },
      {
        title: 'Serverless Database, Native SQL Pagination & In-Memory Cache',
        desc: 'Relational modeling in Neon Serverless PostgreSQL with Prisma ORM using composite indices ([patientId, date], [doctorId, date], [status, date], [orthancId]). For the unified listing (/api/unified), I combined Prisma with raw SQL queries (prisma.$queryRaw with LEFT JOIN and COALESCE(MAX(s.date), u.createdAt) DESC) to sort thousands of patients by their latest study date in milliseconds, backed by a TTL in-memory cache.'
      },
      {
        title: 'Responsive UI/UX, Selective Compression & A4 Report Generator',
        desc: 'Frontend built with React 19, Vite 8, and Tailwind CSS implementing dual adaptive layouts (high-density tables on Desktop and touch cards on Mobile). The server applies selective GZIP compression (skipping pre-compressed binaries to save CPU), while the client includes a custom A4 medical report engine with digitized signatures.'
      }
    ],
    stackFull: {
      frontend: ['React 19', 'Vite 8', 'Tailwind CSS', 'React Router DOM v7', 'Context API + useReducer', 'Axios', 'Cornerstone.js / DICOM Parser', 'Stone Web Viewer', 'React Toastify'],
      backend: ['Node.js (ES Modules)', 'Express 5', 'REST API', 'JWT & httpOnly Cookies', 'Bcrypt.js', 'Multer', 'Sharp (16-bit Processing)', 'Selective GZIP', 'Resend SDK'],
      database: ['PostgreSQL (Neon Serverless)', 'Prisma ORM + Raw SQL', 'Orthanc PACS Server', 'DICOMweb / WADO-RS', 'WebP File System Storage', 'In-Memory TTL Cache'],
      infra: ['Vercel (Frontend CI/CD)', 'Linux Ubuntu VPS (Backend & PACS)', 'Docker', 'PM2 Process Manager', 'NGINX Reverse Proxy + SSL/TLS', 'Custom Domain (diagnosticolopez.com)']
    },
    capturesMeta: [
      {
        label: '01. Admin — Study Management (Desktop + Mobile)',
        caption: 'Desktop and Mobile view of the Master Administrator Dashboard featuring real-time radiographic study management, patient search, status metrics, and PACS synchronization.'
      },
      {
        label: '02. Doctor — Studies & Report Entry (Desktop + Mobile)',
        caption: 'Specialist Radiologist worklist on Desktop alongside the Mobile interface showing how doctors write, edit, and digitally sign diagnostic reports on the go.'
      },
      {
        label: '03. Stone Web DICOM Viewer (Desktop + Mobile)',
        caption: 'Embedded diagnostic DICOM viewer across Desktop and Mobile displaying high-resolution X-rays, multi-series navigation, Window/Level (W/L) contrast tools, and zoom.'
      },
      {
        label: '04. Patient Self-Service Portal (Desktop)',
        caption: 'Frictionless patient portal accessed via National ID (DNI) to consult available radiological studies and diagnostic results.'
      },
      {
        label: '05. Patient Profile & History (Desktop + Mobile)',
        caption: 'Desktop and Mobile patient profile showcasing their complete chronological radiological history with one-tap access to images and signed reports.'
      },
      {
        label: '06. Official A4 Medical Report PDF',
        caption: 'Dynamically generated A4 PDF medical report featuring clinic letterhead, protocol number, clinical findings, and the specialist doctor’s digitized signature.'
      }
    ],
    f1: 'Embedded Stone Web Viewer for multi-series DICOM diagnostic inspection (W/L, Zoom, Pan)',
    f2: 'Custom Express Reverse Proxy (/api/orthanc/pacs/*) with StudyInstanceUID ownership gatekeeper',
    f3: '16-bit Agfa Raw binary parser (Uint16Array + Sharp) with automatic windowing to WebP',
    f4: 'Hybrid RBAC Auth (ADMIN, DOCTOR, PATIENT) via JWT, Query Tokens & strict httpOnly cookies',
    f5: 'Neon PostgreSQL + Prisma $queryRaw pagination & dynamic A4 PDF report generator with Resend'
  },
  es: {
    subtitle: 'Portal Médico Web PACS & DICOM',
    client: 'Centro de Diagnóstico por Imágenes "Diagnóstico López" (Clínica del Pilar — Sistema en producción real)',
    role: 'Full-Stack Developer & Cloud Architect — Relevamiento, Diseño UI/UX, Arquitectura PACS/DICOM, Backend, Frontend, Seguridad e Infraestructura en VPS/Cloud',
    status: 'En Producción (Activo)',
    desc: 'Plataforma médica Full-Stack integrada directamente con el servidor Orthanc PACS y equipamiento radiológico digital (Agfa DR100E). Automatiza la importación de estudios DICOM, vincula o crea automáticamente el perfil del paciente por DNI, permite a los médicos redactar informes con firma digital desde cualquier lugar y brinda a los pacientes acceso instantáneo a sus radiografías en alta definición (vía Stone Web Viewer embebido) y a su informe descargable en PDF A4.',
    problem: 'Antes del sistema, la entrega de estudios radiográficos dependía de placas físicas costosas, CDs o envíos manuales sin trazabilidad, lo que generaba demoras en la entrega de diagnósticos, altos costos operativos de insumos y fricción tanto para los médicos informantes como para los pacientes que debían trasladarse presencialmente a retirar resultados.',
    solution: 'Desarrollé una plataforma médica Full-Stack integrada directamente con el servidor Orthanc PACS y el equipamiento radiológico digital (Agfa DR100E). El sistema automatiza la importación de estudios DICOM, vincula o crea automáticamente el perfil del paciente por DNI, permite a los médicos redactar informes con firma digital desde cualquier lugar y brinda a los pacientes acceso instantáneo a sus radiografías en alta definición (vía visor médico Stone Web Viewer embebido) y a su informe descargable en PDF.',
    impact: 'Reducción del 100% en insumos físicos de entrega, 0 latencia entre la captura del equipo de rayos y la disponibilidad en la nube, soporte concurrente para 3 roles (ADMIN, DOCTOR, PATIENT), y aislamiento total de seguridad mediante un Proxy Inverso PACS propio.',
    roles: [
      {
        badge: 'ADMIN',
        title: 'Módulo Administrador & Sincronización PACS',
        items: [
          {
            head: 'Importación Directa desde PACS (Agfa / Orthanc)',
            body: 'Panel sincronizado en tiempo real con el servidor Orthanc que detecta estudios nuevos pendientes de asignación, parsea metadatos DICOM (PatientName, PatientID, StudyDate, StudyDescription, Series) y permite importarlos en un clic (creando al paciente automáticamente si no existe y asignando al médico especialista).'
          },
          {
            head: 'Vista Unificada de Gestión',
            body: 'Tablero maestro con paginación SQL optimizada, búsqueda con debounce, métricas en vivo (total de pacientes, estudios con/sin informe) y filtros rápidos.'
          },
          {
            head: 'ABM Completo de Usuarios y Conversión 16-bit Agfa',
            body: 'Creación, edición y baja de pacientes, médicos y administradores, con carga manual opcional de imágenes y conversión automática de formatos crudos Agfa (16-bit raw) a WebP.'
          }
        ]
      },
      {
        badge: 'DOCTOR',
        title: 'Módulo Médico / Especialista Informante',
        items: [
          {
            head: 'Bandeja de Trabajo Clínica',
            body: 'Filtrado inteligente de estudios asignados y estudios pendientes de informe (onlyWithoutReports, onlyMyStudies) para agilizar el diagnóstico diario.'
          },
          {
            head: 'Visor DICOM Profesional Embebido',
            body: 'Inspección diagnóstica multicorte y multiserie con ajuste de ventana/nivel (Brillo/Contraste W/L), zoom, paneo, inversión de negativo y mediciones a través de Stone Web Viewer.'
          },
          {
            head: 'Redacción y Firma Digital de Informes',
            body: 'Creación y edición de informes radiológicos vinculados al estudio, con disparo de notificaciones por correo electrónico al paciente en un clic vía Resend.'
          }
        ]
      },
      {
        badge: 'PATIENT',
        title: 'Módulo Paciente (Portal de Autogestión)',
        items: [
          {
            head: 'Autogestión Rápida por DNI',
            body: 'Ingreso directo con su número de documento para consultar todo su historial radiológico desde el celular o la computadora.'
          },
          {
            head: 'Visualización Interactiva de Radiografías',
            body: 'Acceso seguro a sus propias imágenes DICOM en máxima resolución diagnóstica sin necesidad de instalar software adicional.'
          },
          {
            head: 'Descarga de Informe Médico en PDF A4',
            body: 'Generación dinámica en formato hoja A4 oficial con número de protocolo, datos clínicos, hallazgos detallados y firma digitalizada del médico especialista, listo para imprimir o compartir con su médico de cabecera.'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'Integración PACS, DICOMweb & Conversión Binaria Agfa',
        desc: 'El backend se comunica con el servidor Orthanc PACS consumiendo la API expandida (/studies?expand=true) para eliminar el problema de N+1 requests al listar estudios. Incluye además un parser binario a medida (parseAgfaHeader + Uint16Array + sharp) capaz de leer buffers crudos de 15/16 bits de equipos Agfa, calcular el windowing óptimo (normalización min/max) y transformarlos en imágenes WebP ligeras.'
      },
      {
        title: 'Proxy Inverso PACS con Reescritura Dinámica y Gatekeeper de Seguridad',
        desc: 'Para no exponer jamás el servidor Orthanc ni sus credenciales HTTP Basic en el cliente, diseñé un proxy inverso en Express (/api/orthanc/pacs/*). Este proxy intercepta el HTML del Stone Web Viewer, reescribe al vuelo todas las rutas de recursos e inyecta tokens de sesión; además, transmite por streaming binarios DICOM y buffers application/dicom+json mientras el guardián patientCanAccessOrthancPath verifica en PostgreSQL que el paciente sea el titular real del StudyInstanceUID (0020000D), serie o instancia solicitada.'
      },
      {
        title: 'Autenticación Híbrida & Control de Acceso Basado en Roles (RBAC)',
        desc: 'Seguridad estructurada en capas mediante JWT y contraseñas encriptadas con Bcrypt. Debido a que los visores médicos en <iframe> y las etiquetas <img> realizan peticiones internas de sub-recursos WADO-RS y WebAssembly sin cabeceras Authorization, implementé el middleware orthancProxyAuth que valida credenciales de forma híbrida mediante Bearer Header, Query Token (?token=), inspección de Referer y cookies seguras httpOnly (sameSite: strict).'
      },
      {
        title: 'Base de Datos Serverless, Paginación SQL Nativa & Caché en Memoria',
        desc: 'Modelado relacional en Neon PostgreSQL con Prisma ORM, utilizando índices compuestos estratégicos ([patientId, date], [doctorId, date], [status, date], [orthancId]). En el listado unificado (/api/unified), combiné Prisma con consultas SQL crudas (prisma.$queryRaw con LEFT JOIN y COALESCE(MAX(s.date), u.createdAt) DESC) para ordenar miles de pacientes según la fecha de su último estudio en milisegundos, complementado con una capa de caché en memoria con TTL.'
      },
      {
        title: 'UI/UX Responsiva, Compresión Selectiva & Generador Documental A4',
        desc: 'Frontend construido en React 19 y Vite estilizado con Tailwind CSS, implementando diseño adaptativo dual (tablas de alta densidad en Desktop y tarjetas táctiles en Mobile), búsquedas con debounce y notificaciones interactivas. En el servidor se aplica compresión GZIP selectiva (omitiendo binarios ya comprimidos para ahorrar CPU), mientras que en el cliente se implementó un motor de generación de informes radiológicos A4 con firma digital.'
      }
    ],
    stackFull: {
      frontend: ['React 19', 'Vite 8', 'Tailwind CSS', 'React Router DOM v7', 'Context API + useReducer', 'Axios', 'Cornerstone.js / DICOM Parser', 'Stone Web Viewer', 'React Toastify'],
      backend: ['Node.js (ES Modules)', 'Express 5', 'REST API', 'JWT & httpOnly Cookies', 'Bcrypt.js', 'Multer', 'Sharp (Procesamiento 16-bit)', 'Compresión GZIP Selectiva', 'Resend SDK'],
      database: ['PostgreSQL (Neon Serverless)', 'Prisma ORM + Raw SQL', 'Orthanc PACS Server', 'DICOMweb / WADO-RS', 'File System Storage (WebP)', 'Caché en Memoria con TTL'],
      infra: ['Vercel (Frontend SPA CI/CD)', 'VPS Linux Ubuntu (Backend & PACS)', 'Docker', 'PM2 Process Manager', 'NGINX Reverse Proxy + SSL/TLS', 'Dominio Propio (diagnosticolopez.com)']
    },
    capturesMeta: [
      {
        label: '01. Admin — Gestión de Estudios (Desktop + Mobile)',
        caption: 'Vista Escritorio y Mobile del Tablero Administrador para gestionar radiografías en tiempo real, buscar pacientes, auditar métricas y sincronizar con PACS.'
      },
      {
        label: '02. Médico — Estudios y Carga de Informe (Desktop + Mobile)',
        caption: 'Bandeja clínica del médico en Escritorio junto a la versión Mobile donde se visualiza el formulario de carga y firma digital del informe radiológico.'
      },
      {
        label: '03. Visor DICOM Stone Web Viewer (Desktop + Mobile)',
        caption: 'Visor diagnóstico DICOM embebido en versión Escritorio y Mobile mostrando radiografías en alta definición, ajuste de ventana/nivel (W/L), zoom y series.'
      },
      {
        label: '04. Portal de Autogestión Paciente (Desktop)',
        caption: 'Portal limpio de autogestión donde el paciente ingresa con su DNI para consultar sus estudios radiográficos disponibles.'
      },
      {
        label: '05. Perfil e Historial Paciente (Desktop + Mobile)',
        caption: 'Vista Escritorio y Mobile del perfil e historial cronológico del paciente con acceso directo a cada radiografía y su informe médico firmado.'
      },
      {
        label: '06. Informe Médico Oficial en PDF A4',
        caption: 'Informe radiológico oficial generado dinámicamente en hoja A4 con membrete clínico, número de protocolo, hallazgos y firma digitalizada del médico.'
      }
    ],
    f1: 'Visor médico Stone Web Viewer embebido para inspección diagnóstica DICOM multiserie (W/L, Zoom)',
    f2: 'Proxy Inverso PACS en Express (/api/orthanc/pacs/*) con validación de titularidad de StudyInstanceUID',
    f3: 'Parser binario Agfa de 16-bit (Uint16Array + Sharp) con windowing automático a WebP',
    f4: 'Autenticación híbrida RBAC (ADMIN, DOCTOR, PATIENT) vía JWT, Query Tokens y cookies httpOnly',
    f5: 'Paginación SQL nativa en Neon PostgreSQL + Generador de informes médicos A4 en PDF y alertas vía Resend'
  }
};

