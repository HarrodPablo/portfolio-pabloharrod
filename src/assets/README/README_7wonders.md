# 🏛️ 7 Wonders Score (App Nativa & PWA)

Una aplicación móvil y web progresiva (PWA/SPA) diseñada con estética premium para gestionar, registrar y analizar partidas y torneos del clásico juego de mesa **7 Wonders** (incluyendo sus expansiones). 

Construida originalmente para la web con React, Tailwind CSS y Framer Motion, y exportada a **Android de forma nativa utilizando Capacitor**, aprovechando el hardware del dispositivo (como la cámara) y almacenamiento local offline-first.

---

## ✨ Características Principales

*   **👥 Gestión de Jugadores (Perfiles Completos)**
    *   Registro de jugadores con fotos personalizadas **tomadas en tiempo real con la cámara del dispositivo** o subidas de la galería.
    *   Tarjetas de perfil detalladas con estadísticas históricas.
    *   Cálculo automático de la **Maravilla Favorita** y la **Categoría Más Fuerte** basado en el rendimiento histórico real.

*   **🎲 Partidas Regulares y Torneos**
    *   **Partidas Rápidas:** Configuración de mesa seleccionando jugadores y maravillas (Lados A/B/O).
    *   **Torneos (Modo Liga):** Configuración de múltiples partidas bajo un mismo evento. Los jugadores acumulan puntaje global, y el ganador recibe puntos de liga extra (Bonus) configurables.

*   **🔢 Carga de Puntuación Inteligente**
    *   Interfaz fluida para la carga de puntos por categoría: *Militar, Monedas, Maravilla, Civil, Ciencia, Comercial, Gremios*.
    *   Soporte dinámico para expansiones: *Líderes, Ciudades, Deudas, Armada, Islas, Edificios*.
    *   Cálculo en tiempo real del puntaje total con indicadores visuales de progreso.

*   **🏆 Podio y Resultados**
    *   Podio animado en 3D para el 1º, 2º y 3º puesto al finalizar la partida.
    *   Desempates automáticos según las reglas de 7 Wonders (mayor cantidad de monedas).
    *   Animaciones de confeti y efectos visuales de celebración.

*   **📚 Historial Detallado**
    *   Registro inmutable de todas las partidas y torneos jugados.
    *   Filtro híbrido donde conviven partidas regulares y torneos.
    *   Pantalla dedicada de "Detalle de Torneo" con tabla de posiciones global y acceso al desglose de cada mesa jugada.

---

## 🛠️ Stack Tecnológico

El proyecto está desarrollado con tecnologías modernas orientadas a un alto rendimiento tanto en web como en dispositivos móviles:

*   **Core Frontend:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Mobile Bridging (Nativo):** [Capacitor](https://capacitorjs.com/) (Permite el uso de API nativas como Android Camera).
*   **Estilos y UI:** [Tailwind CSS](https://tailwindcss.com/) (diseño responsivo, glassmorphism, dark mode nativo).
*   **Animaciones:** [Framer Motion](https://www.framer.com/motion/) (transiciones de página, layouts dinámicos, micro-interacciones).
*   **Estado Global:** [Zustand](https://zustand-demo.pmnd.rs/) (con `persist` en IndexedDB para funcionamiento offline sin pérdida de datos).
*   **Enrutamiento:** [React Router v6](https://reactrouter.com/)

---

## 🚀 Instalación y Uso (Web y Android)

La aplicación no requiere backend (funciona 100% offline gracias a IndexedDB y el empaquetado nativo).

### Para Desarrollo Web
1. **Clonar el repositorio e instalar dependencias:**
   ```bash
   git clone <tu-repositorio>
   cd 7Wonders
   npm install
   ```

2. **Ejecutar en entorno de desarrollo:**
   ```bash
   npm run dev
   ```
   > La app estará disponible en `http://localhost:5173`.

### Para Compilar en Android (APK)
Gracias a Capacitor, el proyecto está listo para ser compilado utilizando **Android Studio** (Koala, Quail o versiones recientes).

1. **Construir los assets web y sincronizar con Android:**
   Abre una terminal en la raíz del proyecto y ejecuta:
   ```bash
   npm run build
   npx cap sync android
   ```
2. **Abrir el proyecto en Android Studio:**
   Ejecuta el siguiente comando para lanzar Android Studio automáticamente:
   ```bash
   npx cap open android
   ```
   *(Alternativamente, abre Android Studio manualmente y selecciona "Open", navegando hasta la carpeta `7Wonders/android`).*

3. **Sincronización Inicial (Gradle):**
   - Una vez abierto, espera unos minutos mientras Android Studio descarga las dependencias y sincroniza Gradle (verás una barra de progreso en la esquina inferior derecha).
   - Si te solicita actualizar el Plugin de Gradle o la versión de Android, acepta las sugerencias recomendadas por defecto.

4. **Generar el APK para tu dispositivo:**
   - En la barra de menú superior, dirígete a: **`Build`** > **`Build Bundle(s) / APK(s)`** > **`Build APK(s)`**.
   - El proceso de compilación comenzará. Cuando termine (suele demorar un minuto), aparecerá una notificación flotante verde en la esquina inferior derecha.
   - Haz clic en **`Locate`** (o "Localizar") en esa notificación.
   - Se abrirá una ventana del explorador mostrando tu archivo `app-debug.apk`. ¡Ese es tu instalador! Cópialo a tu celular e instálalo.

*(Nota: Para subir la app a la Google Play Store, deberás usar `Build > Generate Signed Bundle / APK...` y firmarla con tu Keystore).*

---

## 🎨 Principios de Diseño
La interfaz ha sido construida siguiendo estrictos lineamientos de estética moderna:
- Uso de variables de color curadas (paleta `parchment` para modo claro y `zinc` para modo oscuro).
- **Glassmorphism:** Uso de `backdrop-blur` y fondos semitransparentes para aportar profundidad.
- Ausencia de "salto" de contenido mediante el uso de transiciones fluidas de `Framer Motion`.

---

> Creado para los amantes de 7 Wonders que buscan llevar sus noches de juegos de mesa al siguiente nivel. 🌟