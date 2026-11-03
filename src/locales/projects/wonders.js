export const wondersProject = {
  en: {
    subtitle: 'Native Android APK & Offline-First PWA for Board Game Scoring, Leagues & Analytics',
    client: 'Modern Board Game Community (7 Wonders 2nd Edition & all 4 official expansions: Leaders, Cities, Armada & Edifice)',
    role: 'Mobile & Frontend Architect — UI/UX Design, Offline-First Architecture, Combinatorial Scoring Algorithms, Native Android APK Packaging & PWA',
    status: 'In Production / Open Source (Installable PWA & Native Android APK)',
    desc: 'Hybrid platform (PWA + Native Android App via Capacitor 8) with a 100% Offline-First architecture that guides end-of-game scoring step-by-step across up to 13 categories, automates optimal Science wildcard combinations via combinatorial brute-force, and resolves ties according to official rules. Includes a Multi-Match League Tournament Engine, player profiles with native camera avatars, and automated historical analytics.',
    problem: 'At the end of a 7 Wonders match (especially when combining expansions like Leaders, Cities, Armada, and Edifice), manual paper scoring takes 10 to 15 minutes, is prone to arithmetic errors, and makes computing the optimal combination of scientific wildcards extremely complex. Furthermore, physical score sheets get lost, preventing players from tracking historical win rates, records, or multi-round league tournaments among friends.',
    solution: 'I developed a hybrid platform (PWA + Native Android App with Capacitor 8) built on a 100% Offline-First architecture that guides scoring step-by-step by category, automates maximum Science score calculation via combinatorial optimization, and resolves ties per official rules. It incorporates a Tournament Engine (League Mode) with championship point accumulation, player profiles with avatars captured via the phone’s native camera, and automated historical analytics.',
    impact: '85% reduction in end-of-game scoring time (from ~12 minutes to under 90 seconds), zero calculation errors on scientific wildcard matrices, simultaneous support for up to 7 players with all 4 official expansions, and unlimited local persistence with zero internet dependency or server costs.',
    roles: [
      {
        badge: 'PLAYERS & STATS',
        title: 'Player Management & Biometric/Historical Analytics (/players)',
        items: [
          {
            head: 'Native Camera Avatar Capture (@capacitor/camera)',
            body: 'Profile creation and management with real-time photo capture using device hardware, built-in cropping, Base64 encoding, or gallery selection.'
          },
          {
            head: 'Heuristic Historical Career Engine',
            body: 'Real-time calculation across the entire match history to automatically determine each player’s Favorite Wonder (weighted by win rate and usage tie-breaker), Strongest Category (Military, Science, Civil, Guilds, etc.), and All-Time High Score with date.'
          },
          {
            head: 'Olympic Medal Table & League Trophies',
            body: 'Visual showcase of 1st, 2nd, and 3rd place finishes, tournament championship trophies, and accumulated League points.'
          }
        ]
      },
      {
        badge: 'SETUP & LEAGUES',
        title: 'Table Setup & Multi-Match Tournament Engine (/setup)',
        items: [
          {
            head: 'Quick Match Mode & 14 Wonders Draft',
            body: 'Supports 3 to 7 players, dynamic activation of official expansions (Leaders, Cities, Armada, Edifice), and manual or automated random non-repeating assignment of all 14 Wonders on Day (A) or Night (B) sides with board previews.'
          },
          {
            head: 'League Tournament Mode (N Consecutive Rounds)',
            body: 'Configures multi-game championships locking the competitor roster, automatically transitioning between tables, and awarding both positional league points (N - position) and champion bonus points.'
          }
        ]
      },
      {
        badge: 'SCIENCE ENGINE',
        title: 'Assisted Scoring Wizard & Combinatorial Calculator (/score)',
        items: [
          {
            head: 'Dynamic 7-to-13 Category Step Wizard',
            body: 'Adapts scoring steps automatically based on active expansions, including automatic Treasury coin conversion (floor(coins / 3)) and negative value support for Military and Debt (Cities).'
          },
          {
            head: 'Interactive Science Matrix & Official Tie-Breaker Podium',
            body: 'Interactive matrix for Science symbols (Gears, Compasses, Tablets, and Wildcards) paired with automated podium ordering using official Treasury coin tie-breakers.'
          }
        ]
      },
      {
        badge: 'LEADERBOARD',
        title: 'Immutable Match History & Global Leaderboard (/history, /leaderboard)',
        items: [
          {
            head: 'Chronological Match & Tournament Audit Logs',
            body: 'Distinguishes between Regular Matches (/history/:id with full category-by-category comparison matrix) and Official Tournaments (/history/tournament/:id with general league standings and individual table breakdowns).'
          },
          {
            head: 'Multi-Criteria Global Leaderboard',
            body: 'Instant search bar and dynamic ranking filters by League Points, Total Wins, or Single-Match High Score.'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'Combinatorial Science Optimization Algorithm (scienceCalculator.js)',
        desc: 'In 7 Wonders, each set of 3 distinct symbols awards 7 pts and each set of identical symbols awards n² pts. When a player holds wildcards (Leaders, Guilds, or Wonders like Babylon), choosing which symbol each wildcard represents is non-trivial. I implemented a combinatorial optimization algorithm that evaluates all possible partitions (w_g + w_c + w_t = W) in real time O(W²) and mathematically guarantees the maximum possible score on every tap.'
      },
      {
        title: '100% Offline-First Architecture with IndexedDB (idbStorage.js + Zustand Persist)',
        desc: 'Because each player stores a cropped Base64 avatar alongside dozens of matches and tournaments, the classic synchronous 5 MB localStorage limit was insufficient and blocking. I designed an asynchronous storage adapter on top of IndexedDB (idb-keyval) connected to Zustand’s persist middleware—achieving hundreds of megabytes of non-blocking storage and applying partialize on the active session to prevent duplicate images in RAM.'
      },
      {
        title: 'Native Hybrid Bridge with Capacitor 8 (@capacitor/core & @capacitor/camera)',
        desc: 'The React codebase packages natively into an Android APK via Capacitor 8, accessing real phone hardware APIs (native camera, system image cropper, and gallery permissions) without sacrificing web iteration speed or installability on iOS/Desktop as an offline PWA via Service Workers (vite-plugin-pwa + Workbox).'
      },
      {
        title: 'Decoupled 5-Store State Machine Architecture (src/store/)',
        desc: 'Separated application domain logic into 5 independent Zustand stores (players, game, tournament, history, and theme). This allows a single match (game.store) to run standalone or be injected inside an active championship lifecycle (tournament.store), synchronizing accumulated player statistics (players.store) and immutable history (history.store) in a single atomic transaction when a table finishes.'
      },
      {
        title: 'Greco-Roman Thematic UI/UX, Glassmorphism & Spring Micro-Interactions',
        desc: 'Mobile-first design featuring a cinematic background video, Greek fret ornamental borders (grecas), dynamic CSS masks for profile laurels (mask-image), native support for Day Mode (Parchment) and Night Mode (Obsidian Zinc), and Framer Motion spring transitions that eliminate layout shift across screens.'
      }
    ],
    stackFull: {
      frontend: ['React 19', 'Vite 8', 'React Router DOM v7', 'Tailwind CSS v4', 'Zustand v5', 'Framer Motion v13', 'Lucide React', 'clsx & tailwind-merge'],
      backend: ['Capacitor 8 (@capacitor/core, @capacitor/android)', '@capacitor/camera & @capacitor/assets', 'Android SDK / Gradle (Native APK Build)', 'Combinatorial Math Engine (O(W²))'],
      database: ['IndexedDB (idb-keyval Async Adapter)', 'Zustand Persist Middleware', 'Workbox Service Worker Cache API', '100% Client-Side Serverless Persistence'],
      infra: ['Oxlint (Rust High-Performance Linter)', 'Vite PWA Plugin (Manifest & Offline SW)', 'GitHub & Vercel (Web PWA)', 'Android Studio (Native APK Distribution)']
    },
    capturesMeta: [
      {
        label: '01. Cinematic Home & Game Modes',
        caption: 'Main landing view featuring a Greco-Roman aesthetic, background video, Day/Night mode toggle, and quick access to Quick Match, League Tournament, Players, and Leaderboard.'
      },
      {
        label: '02. Player Creation & Native Camera',
        caption: 'Player profile registration modal with native device camera integration (@capacitor/camera), photo cropping, and persistent roster management.'
      },
      {
        label: '03. New Match Setup & Wonders Draft',
        caption: 'Match configuration wizard for selecting active players, official expansions (Leaders, Cities, Armada, Edifice), and automated Day (A) / Night (B) Wonder assignment.'
      },
      {
        label: '04. Standings, Podium & Leaderboard',
        caption: 'Final match standings, Olympic medal podium, historical career statistics, and multi-criteria Global Leaderboard.'
      }
    ],
    f1: 'Combinatorial O(W²) Science wildcard optimizer guaranteeing the mathematically maximum score in real time',
    f2: '100% Offline-First async persistence (IndexedDB idb-keyval + 5 decoupled Zustand v5 stores)',
    f3: 'Native Android APK via Capacitor 8 (@capacitor/camera hardware bridge) + Installable offline PWA',
    f4: 'Full support for 3–7 players, all 14 Wonders (Day A / Night B), 4 official expansions & Multi-Round League Mode',
    f5: 'Greco-Roman UI/UX built with React 19, Tailwind CSS v4, Framer Motion v13 & Day/Night themes'
  },
  es: {
    subtitle: 'App Nativa (Android APK) & PWA de Puntuación, Ligas y Estadísticas',
    client: 'Comunidad de jugadores de juegos de mesa modernos (Board Games / 7 Wonders 2da Edición y sus 4 expansiones oficiales)',
    role: 'Mobile & Frontend Architect — Diseño UI/UX, Arquitectura Offline-First, Algoritmos de Puntuación, Empaquetado Nativo (Android APK) y PWA',
    status: 'En Producción / Open Source (PWA instalable y APK nativo para Android)',
    desc: 'Plataforma híbrida (PWA + App Nativa Android con Capacitor 8) con arquitectura 100% Offline-First que guía el recuento paso a paso por categoría, automatiza mediante fuerza bruta combinatoria el cálculo máximo de Ciencia y resuelve empates según el reglamento oficial. Incorpora un motor de Torneos (Modo Liga) con acumulación de puntos de campeonato, perfiles con avatares capturados con la cámara nativa del celular y analítica histórica automática por jugador.',
    problem: 'Al finalizar una partida de 7 Wonders (especialmente al combinar expansiones como Leaders, Cities, Armada y Edifice), el recuento manual en planillas de papel toma entre 10 y 15 minutos, es propenso a errores aritméticos y vuelve sumamente complejo calcular la combinación óptima de comodines científicos. Además, las planillas físicas se pierden, impidiendo llevar un registro histórico de victorias, récords o torneos tipo liga entre amigos.',
    solution: 'Desarrollé una plataforma híbrida (PWA + App Nativa Android con Capacitor 8) con arquitectura 100% Offline-First que guía el recuento paso a paso por categoría, automatiza mediante fuerza bruta combinatoria el cálculo máximo de Ciencia y resuelve empates según el reglamento oficial. Incorpora un motor de Torneos (Modo Liga) con acumulación de puntos de campeonato, perfiles con avatares capturados con la cámara nativa del celular y analítica histórica automática por jugador.',
    impact: 'Reducción del tiempo de cierre de partida en un 85% (de ~12 minutos a menos de 90 segundos), 0 errores de cálculo en matrices científicas con comodines, soporte para hasta 7 jugadores en simultáneo con las 4 expansiones oficiales y persistencia local ilimitada sin requerir conexión a internet ni costos de servidor.',
    roles: [
      {
        badge: 'JUGADORES & STATS',
        title: 'Módulo de Gestión de Jugadores y Analítica Biométrica/Histórica (/players)',
        items: [
          {
            head: 'Captura Fotográfica Nativa (@capacitor/camera)',
            body: 'Alta y baja de perfiles con captura fotográfica en tiempo real utilizando el hardware del dispositivo con recorte integrado y codificación Base64, o selección desde galería.'
          },
          {
            head: 'Cálculo Heurístico de Carrera en Tiempo Real',
            body: 'Analiza todo el historial para determinar automáticamente la Maravilla Favorita (priorizando tasa de victorias y desempate por uso), la Categoría Más Fuerte (Militar, Ciencia, Civil, Gremios, etc.) y el Récord Histórico de Puntos con fecha.'
          },
          {
            head: 'Medallero Olímpico y Trofeos de Liga',
            body: 'Visualización de medallero (1º, 2º y 3º puesto), trofeos de torneos ganados y puntos acumulados de Liga.'
          }
        ]
      },
      {
        badge: 'MESAS & TORNEOS',
        title: 'Módulo de Configuración de Mesas y Motor de Torneos (/setup)',
        items: [
          {
            head: 'Modo Partida Rápida & Sorteo de 14 Maravillas',
            body: 'Selección de 3 a 7 jugadores, activación dinámica de expansiones (Leaders, Cities, Armada, Edifice) y asignación manual o aleatoria sin repetición de las 14 Maravillas en sus caras Día (A) o Noche (B) con previsualización gráfica.'
          },
          {
            head: 'Modo Torneo (Liga Multi-Partida)',
            body: 'Configuración de campeonatos de N rondas consecutivas. El sistema bloquea la nómina de competidores, transiciona automáticamente entre mesas y adjudica puntos de liga por posición (N - posición) más bonificaciones al campeón.'
          }
        ]
      },
      {
        badge: 'MOTOR CIENCIA',
        title: 'Módulo de Carga Asistida y Calculadora Científica (/score)',
        items: [
          {
            head: 'Wizard Dinámico de 7 a 13 Categorías',
            body: 'Adaptado automáticamente según las expansiones activas en la mesa, con conversión automática de monedas del Tesoro (floor(monedas / 3)) y soporte de valores negativos en Militar y Deuda (Cities).'
          },
          {
            head: 'Matriz Científica Interactiva & Podio Oficial',
            body: 'Matriz para símbolos de Ciencia (Engranajes, Compases, Tablillas y Comodines) y ordenamiento automático con desempate reglamentario por monedas en el tesoro.'
          }
        ]
      },
      {
        badge: 'RANKING & HISTORIAL',
        title: 'Módulo de Historial Inmutable y Ranking Global (/history, /leaderboard)',
        items: [
          {
            head: 'Registro Cronológico de Partidas y Torneos',
            body: 'Distingue visualmente entre Partidas Regulares (/history/:id con tabla comparativa categoría por categoría) y Torneos Oficiales (/history/tournament/:id con tabla general de la liga y desglose por mesa).'
          },
          {
            head: 'Leaderboard Global Multicriterio',
            body: 'Barra de búsqueda instantánea y filtros dinámicos por Puntos de Liga, Victorias Totales o Récord de Puntos en una Partida.'
          }
        ]
      }
    ],
    archPoints: [
      {
        title: 'Algoritmo Combinatorio de Optimización Científica (scienceCalculator.js)',
        desc: 'En 7 Wonders, cada trío de símbolos distintos otorga 7 pts y cada grupo de símbolos iguales otorga n² pts. Cuando un jugador posee comodines (líderes, gremios o maravillas como Babilonia), elegir qué símbolo representa cada comodín no es trivial. Implementé un algoritmo de optimización combinatoria que evalúa todas las particiones posibles (w_g + w_c + w_t = W) en tiempo real O(W²) y garantiza matemáticamente el puntaje máximo posible en cada toque.'
      },
      {
        title: 'Arquitectura 100% Offline-First con IndexedDB (idbStorage.js + Zustand Persist)',
        desc: 'Dado que cada jugador almacena su fotografía recortada en formato Base64 junto con decenas de partidas y torneos, el límite clásico de 5 MB de localStorage resultaba insuficiente y bloqueante (síncrono). Diseñé un adaptador de almacenamiento asíncrono sobre IndexedDB (idb-keyval) conectado al middleware persist de Zustand, logrando capacidad de cientos de megabytes sin bloquear el UI Thread y aplicando partialize en la sesión activa.'
      },
      {
        title: 'Puente Híbrido Nativo con Capacitor 8 (@capacitor/core & @capacitor/camera)',
        desc: 'El código base en React se empaqueta de forma nativa para Android mediante Capacitor 8, accediendo a APIs de hardware reales del teléfono (cámara nativa, recorte de imagen del sistema y permisos de galería) sin sacrificar la velocidad de iteración web ni la capacidad de instalarse en iOS/Desktop como PWA mediante Service Workers (vite-plugin-pwa + Workbox).'
      },
      {
        title: 'Máquina de Estados Multi-Store Desacoplada (src/store/)',
        desc: 'Separé el dominio de la aplicación en 5 stores independientes de Zustand (players, game, tournament, history y theme). Esto permite que una partida individual (game.store) pueda ejecutarse de forma aislada o inyectarse dentro del ciclo de vida de un campeonato activo (tournament.store), sincronizando las estadísticas acumuladas de cada jugador (players.store) y el registro histórico (history.store) en una única transacción al finalizar la mesa.'
      },
      {
        title: 'UI/UX Temática Grecorromana, Glassmorphism y Micro-interacciones',
        desc: 'Diseño mobile-first ambientado con video de fondo cinematográfico, bordes ornamentales griegos (grecas), máscaras CSS dinámicas para laureles de perfil (mask-image), soporte nativo para Modo Día (Parchment) y Modo Noche (Obsidian Zinc), y transiciones tipo spring con Framer Motion que eliminan el layout shift entre pantallas.'
      }
    ],
    stackFull: {
      frontend: ['React 19', 'Vite 8', 'React Router DOM v7', 'Tailwind CSS v4', 'Zustand v5 (State Management)', 'Framer Motion v13', 'Lucide React', 'clsx & tailwind-merge'],
      backend: ['Capacitor 8 (@capacitor/core, @capacitor/android)', '@capacitor/camera & @capacitor/assets', 'Android SDK / Gradle (Compilación APK)', 'Motor Matemático Combinatorio O(W²)'],
      database: ['IndexedDB (vía idb-keyval)', 'Zustand Persist Middleware', 'Cache API (Workbox Service Worker)', 'Persistencia Serverless 100% Client-Side'],
      infra: ['Oxlint (Linter en Rust)', 'Vite PWA Plugin (Manifest & Auto-update SW)', 'GitHub & Vercel (Web PWA)', 'Android Studio (Distribución APK)']
    },
    capturesMeta: [
      {
        label: '01. Inicio Cinematográfico & Modos',
        caption: 'Pantalla principal con estética grecorromana, video de fondo, cambio de tema Día/Noche y acceso rápido a Nueva Partida, Modo Liga, Jugadores y Clasificación.'
      },
      {
        label: '02. Crear Jugador & Cámara Nativa',
        caption: 'Módulo de creación de perfil de jugador con captura fotográfica mediante cámara nativa del teléfono (@capacitor/camera), recorte integrado y gestión de competidores.'
      },
      {
        label: '03. Nueva Partida & Maravillas',
        caption: 'Asistente de configuración de mesa para elegir jugadores, activar expansiones oficiales (Leaders, Cities, Armada, Edifice) y sortear Maravillas en cara Día (A) o Noche (B).'
      },
      {
        label: '04. Clasificación, Podio & Ranking',
        caption: 'Tabla de clasificación general, podio olímpico de medallas, estadísticas históricas de carrera y Leaderboard global multicriterio.'
      }
    ],
    f1: 'Algoritmo combinatorio O(W²) para optimización automática de comodines de Ciencia en tiempo real',
    f2: 'Persistencia asíncrona 100% Offline-First sobre IndexedDB (idb-keyval) + 5 stores desacoplados en Zustand v5',
    f3: 'Empaquetado nativo Android APK con Capacitor 8 (@capacitor/camera) + PWA instalable con Workbox',
    f4: 'Soporte de 3 a 7 jugadores, las 14 Maravillas (Día A / Noche B), 4 expansiones oficiales y Modo Torneo/Liga',
    f5: 'UI/UX Grecorromana con React 19, Tailwind CSS v4, Framer Motion v13 y temas Día (Parchment) / Noche (Obsidian)'
  }
};

