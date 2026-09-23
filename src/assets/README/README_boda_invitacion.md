# Boda · Julieta & Julio — Invitación web

Web de invitación de boda de una sola página (scroll continuo con anclas), responsive
mobile-first y con soporte bilingüe (Español / Inglés). Todo el contenido editable vive en 
[`data/content.js`](data/content.js) (Español) y [`data/content_en.js`](data/content_en.js) (Inglés).

## Stack

- **Next.js 14** (App Router) — un solo proyecto, sin backend separado.
- **Tailwind CSS** con paleta custom (`bloque`, `fondo`, `texto`, `textoCalido`).
- **Framer Motion** para animaciones y transiciones fluidas.
- **react-hook-form + zod** para el RSVP.
- **Prisma + PostgreSQL (Neon)** para persistir confirmaciones.
- **Google Sheets API** para registrar los invitados (back-office).
- **Nodemailer + Gmail SMTP** (App Password) para los emails al invitado.
- Deploy 100% **Vercel**.

### UI y Experiencia de Usuario

- **Animaciones fluidas**: Integración con `framer-motion` para darle vida a la experiencia visual.
- **Formulario Interactivo**: El RSVP ahora incluye una barra de progreso animada al confirmar asistencia.
- **Diseño Pulido (Responsive & Bilingüe)**: Ajustes en los layouts (eliminando solapamientos) y refinamiento en las traducciones para un soporte fluido entre Inglés y Español.


## Estructura

```
/app
  /api/rsvp/route.js   route handler (Node runtime): valida, upsert, 2 emails
  layout.jsx           fuentes (Playfair / Cormorant / Jost) + noindex
  page.jsx             ensambla las 11 secciones
  globals.css
/components             un componente por sección + Franjas / ColumnaFranjas / Nav
/context                LanguageContext.jsx (gestión de estado de idioma)
/data                   content.js (ES) y content_en.js (EN) - ÚNICA fuente de contenido
/lib/prisma.js          singleton de PrismaClient (serverless-safe)
/prisma/schema.prisma
tailwind.config.js
.env.example
```

## Desarrollo local

```bash
npm install
cp .env.example .env      # completá las variables
npx prisma generate
npx prisma migrate dev --name init   # crea la tabla en tu DB
npm run dev                # http://localhost:3000
```

> El `postinstall` corre `prisma generate` automáticamente.

## Variables de entorno (`.env`)

| Variable | Descripción |
| --- | --- |
| `DATABASE_URL` | Connection string de Neon **con `-pooler`** (`&pgbouncer=true`). |
| `GMAIL_USER` | Cuenta de Gmail con 2-Step Verification. |
| `GMAIL_APP_PASSWORD` | App Password de `myaccount.google.com/apppasswords`. |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Email de la Service Account creada en Google Cloud. |
| `GOOGLE_PRIVATE_KEY` | Clave privada del JSON de la Service Account (con saltos de línea literales `\n`). |
| `GOOGLE_SPREADSHEET_ID` | ID de la URL del documento de Google Sheets (donde se añaden los datos). |

## Deploy en Vercel

1. **Neon**: crear proyecto Postgres (free tier) y copiar la connection string **con `-pooler`**.
2. **Gmail**: activar 2-Step Verification → generar App Password → usarlo como `GMAIL_APP_PASSWORD`.
3. **Google Sheets**: crear un proyecto en Google Cloud, habilitar Google Sheets API, crear una Service Account, crearle una clave JSON, y **compartir el Spreadsheet** (como editor) con el email de la Service Account.
4. **Vercel**: importar el repo (preset Next.js), cargar las 6 env vars.
5. **Build command** (override en Vercel): 
   ```
   prisma generate && prisma migrate deploy && next build
   ```
   Alternativa: correr `npx prisma migrate deploy` una vez a mano contra Neon antes del primer deploy.

## Notas

- `noindex, nofollow` en el `<head>` — web privada.
- Los datos bancarios NO están en el HTML inicial: se revelan con un botón (`useState`).
- Honeypot `_gotcha` en el RSVP para bots simples.
- Si falla el envío de email pero el guardado en DB fue OK, la API igual responde 200.
- Las imágenes usan URLs de Unsplash de ejemplo — reemplazalas en `content.js`.
