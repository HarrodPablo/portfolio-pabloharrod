<div align="center">

# Ikigai Technology

**Tecnología con propósito para decisiones que importan**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

[**Ver Demo en Vivo**](#) | [**Ver Diseño (Figma)**](#)

</div>

---

## 📖 Descripción del Proyecto

**Ikigai II** es la evolución de la plataforma web corporativa para **Ikigai Technology**. Este proyecto consiste en una Single Page Application (SPA) moderna, diseñada para presentar los servicios de consultoría, análisis y desarrollo integral que ofrece la empresa. 

El sitio está estructurado para guiar al usuario a través de los valores fundamentales de la organización (Pasión, Misión, Vocación, Profesión) y detallar su oferta de valor de manera elegante y profesional.

---

## ✨ Características Principales

- **Diseño Premium y Sofisticado:** Interfaz de alto contraste, utilizando tipografías serif para acentos y un esquema de colores oscuros con detalles en dorado.
- **Navegación Fluida (SPA):** Implementación de rutas dinámicas sin recargas utilizando `react-router-dom`.
- **Componentes Reutilizables:** Arquitectura basada en componentes atómicos y modulares (Header, Footer, Botón de WhatsApp flotante).
- **Notificaciones Integradas:** Sistema de alertas y feedback visual utilizando `react-hot-toast`.
- **Totalmente Responsivo:** Adaptabilidad garantizada desde dispositivos móviles hasta pantallas ultra anchas gracias al uso de Tailwind CSS.

---

## 🎨 Arquitectura de UI y Decisiones de Diseño

El diseño de Ikigai Technology busca transmitir seriedad, lujo y profesionalismo.

### Paleta de Colores
La paleta se centra en tonos oscuros (Charcoal y Slate) que brindan un lienzo elegante para contrastar con acentos dorados (`muted-gold`) y blancos (`off-white`).

- 🌑 **Fondos Oscuros:** `#121417` (Charcoal) y `#1A1D21` (Deep Slate) para estructura y tarjetas.
- 🟡 **Acentos y Llamadas a la Acción:** `#C5A059` (Muted Gold).
- ⚪ **Texto Principal:** `#F4F4F4` (Off-white) para máxima legibilidad sobre fondos oscuros.

### Tipografía
Se combinan dos familias tipográficas para generar un contraste visual interesante entre modernidad y clasicismo:
- **Serif (`Playfair Display`):** Utilizada en encabezados (`h1`, `h2`) y textos destacados para aportar un tono clásico y elegante.
- **Sans-Serif (`Inter`):** Aplicada en párrafos, botones y UI general para garantizar limpieza y legibilidad.

### UI / UX
- **Modo Oscuro Nativo:** Integración nativa de temas oscuros apoyada en **DaisyUI**.
- **Imágenes de Alto Contraste:** Uso deliberado de filtros `grayscale` y `contrast` en imágenes mediante utilidades de Tailwind, logrando un estilo monocromático que resalta únicamente cuando el usuario interactúa (hover).

---

## 📸 Capturas de Pantalla

*(Reemplaza estos placeholders con imágenes reales del proyecto)*

| Inicio | Servicios | Contacto |
| :---: | :---: | :---: |
| <img src="https://via.placeholder.com/400x250.png?text=Home" alt="Home" /> | <img src="https://via.placeholder.com/400x250.png?text=Servicios" alt="Servicios" /> | <img src="https://via.placeholder.com/400x250.png?text=Contacto" alt="Contacto" /> |

---

## 🛠️ Tecnologías y Herramientas

### Frontend
- **[React 18](https://react.dev/):** Librería principal para la construcción de interfaces.
- **[Vite](https://vitejs.dev/):** Entorno de desarrollo ultrarrápido y empaquetador.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilidades CSS para un diseño ágil y consistente.
- **[DaisyUI](https://daisyui.com/):** Biblioteca de componentes para Tailwind.

### Librerías Adicionales
- **Ruteo:** `react-router-dom` v6
- **Iconografía:** `react-icons` & `lucide-react`
- **Formularios:** `react-hook-form`
- **Peticiones HTTP:** `axios`
- **Notificaciones:** `react-hot-toast`

---

## 🚀 Instalación y Ejecución Local

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/ikigai-ii.git
   cd ikigai-ii
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   La aplicación estará disponible típicamente en `http://localhost:5173`.

---

## 📁 Estructura del Proyecto

```text
src/
├── assets/          # Imágenes estáticas y recursos globales
├── components/      # Componentes UI reutilizables (Header, Footer, etc.)
├── pages/           # Vistas principales (Home, Services, Contact)
├── App.jsx          # Configuración de rutas y layout principal
├── main.jsx         # Punto de entrada de la aplicación React
└── index.css        # Estilos globales y directivas de Tailwind
```

---

<div align="center">
  Hecho con ☕ y ❤️ por [Tu Nombre/Empresa]
</div>
