<div align="center">

# 🚀 Pablo Harrod — Portfolio

### **Full-Stack Software Engineer & Creative Developer**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<p align="center">
  A state-of-the-art developer portfolio combining modern design aesthetics, interactive 3D WebGL physics, and high-performance engineering.
</p>

[**Explore Live Demo »**](https://pablo-portfolio.vercel.app)

</div>

---

## 🌟 Overview

This portfolio showcases my work, technical skills, and engineering journey as a **Full-Stack Developer**. Built from the ground up prioritizing visual excellence, accessibility, fluid responsive behavior, and cutting-edge web technologies.

---

## ✨ Key Features

- **🪪 Interactive 3D Lanyard Badge**:
  - Custom WebGL simulation powered by **Three.js**.
  - Physics-based cloth and cord simulation (Verlet integration) with gravity, wind breeze, and realistic inertia.
  - Fully interactive: drag, swing, flick, or click to flip the ID badge with realistic glossy reflections and specular glints.
  - Adaptive touch & pointer gestures that don't block vertical mobile scrolling.
- **🌐 Dual-Language Support (EN / ES)**:
  - Instant localization switching between English and Spanish with zero page reload.
  - Centralized translation dictionary and React Context state.
- **🌓 Dynamic Dark & Light Themes**:
  - Immersive dark mode with ambient gradient glows, glassmorphism, and micro-interactions.
  - Seamless light theme toggle with specialized canvas color preservation for 3D elements.
- **💻 Featured Projects Showcase**:
  - Curated collection of full-stack, frontend, and CRM platforms with live links and repository references.
  - Filterable by tags, responsive layout, and interactive preview cards.
- **📬 Interactive Contact Hub**:
  - Functional contact form integrated with **EmailJS** for instant delivery directly to inbox.
  - Direct connection buttons for LinkedIn, GitHub, and WhatsApp.
- **📄 Downloadable Multilingual CV**:
  - Direct download links for both English and Spanish versions of my Curriculum Vitae.
- **📈 Analytics & Observability**:
  - Production monitoring with **Vercel Web Analytics** for privacy-focused real-time visitor metrics.

---

## 🛠️ Tech Stack

| Category | Technologies & Tools |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism |
| **3D & Physics** | [Three.js](https://threejs.org/) (WebGL, custom shaders, verlet simulation) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/), React Parallax Tilt |
| **Icons & UI** | [Lucide React](https://lucide.dev/), Simple Icons |
| **Services & Infrastructure**| [EmailJS](https://www.emailjs.com/), [Cloudinary](https://cloudinary.com/), [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```text
pablo-portfolio/
├── public/                 # Static assets, SVG icons, and favicon
├── src/
│   ├── assets/             # Brand graphics and PDF CV files (EN / ES)
│   ├── components/
│   │   ├── About.jsx       # Professional journey & technical skills
│   │   ├── Contact.jsx     # EmailJS contact form & social channels
│   │   ├── Hero.jsx        # Landing hero with headline & 3D badge
│   │   ├── Lanyard.jsx     # 3D interactive physics-based badge (Three.js)
│   │   ├── Navbar.jsx      # Navigation bar with theme & language toggle
│   │   ├── Projects.jsx    # Portfolio projects grid
│   │   └── Services.jsx    # Engineering services offered
│   ├── context/
│   │   └── LanguageContext.jsx # Global localization state
│   ├── locales/
│   │   └── translations.js # Bilingual strings dictionary (EN / ES)
│   ├── App.jsx             # Main application layout
│   ├── index.css           # Global tokens, glassmorphism & theme styles
│   └── main.jsx            # Entry point
├── .env.example            # Environment variables template
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm` / `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HarrodPablo/porfolio.git
   cd porfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory (based on `.env.example`):
   ```bash
   cp .env.example .env
   ```
   Add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173` to see the live app.

---

## 📦 Build & Deployment

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📬 Contact & Socials

Let's build something impactful together! Feel free to reach out:

- **GitHub**: [@HarrodPablo](https://github.com/HarrodPablo)
- **LinkedIn**: [Pablo Harrod](https://linkedin.com)
- **Email**: Contact through the portfolio contact form

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <b>Pablo Harrod</b></sub>
</div>
