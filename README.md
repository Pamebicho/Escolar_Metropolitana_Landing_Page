## Copa Escolar Metropolitana — Landing Page

---

## Descripción

Copa Escolar Metropolitana es una landing page desarrollada como proyecto final del Módulo 2 (HTML, CSS, Bootstrap). Presenta toda la información del campeonato escolar de fútbol de la RM: formato del torneo, premios, galería, preguntas frecuentes, sponsors y un formulario de inscripción con validación en JavaScript.
Secciones incluidas
Sección Descripción
Hero Presentación con imagen de estadio, badges informativos y cuenta regresiva
Formato Fase de grupos, playoffs y minutos garantizados
Premios Medallas, copa y distinciones individuales
Galería Carrusel con fotos del campeonato
FAQ Acordeón con preguntas frecuentes
Sponsors Logos de marcas aliadas
Inscripción Formulario validado con feedback al usuario

---

![Copa Escolar Metropolitana](assets/images/estadio.jpeg)

> Landing page oficial del campeonato de fútbol escolar de la Región Metropolitana. Diseño responsive, cuenta regresiva en vivo, galería, formulario de inscripción y secciones de premios y sponsors.

---

## Tecnologías utilizadas

HTML5 semántico — Estructura y accesibilidad
CSS3 + Variables CSS — Estilos, animaciones y tema oscuro
Bootstrap 5.3.3 Grid, navbar, carrusel, acordeón, formulario
Bootstrap Icons 1.11.3 Iconografía
Google Fonts — Poppins — Tipografía principal
JavaScript Vanilla ES2022 Cuenta regresiva, scrollspy, validación de formulario

---

## Estructura del proyecto

```
Escolar_Metropolitana_Landing_Page/
├── index.html                      # Página principal
├── assets/
│   ├── css/
│   │   └── style.css               # Estilos personalizados
│   ├── js/
│   │   └── main.js                 # Lógica JS: countdown, scrollspy, formulario
│   └── images/
│       ├── estadio.jpeg            # Fondo hero
│       ├── jugador.png             # Imagen decorativa hero
│       ├── copa.jpg                # Premio copa
│       ├── medalla.webp            # Premio medalla
│       ├── guante.jpg              # Premio guante de oro
│       ├── galeria3.jpg            # Galería slide 3
│       ├── galeria5.jpg            # Galería slide 1
│       ├── galeria6.webp           # Galería slide 2
│       └── sponsors/
│           ├── adidas.svg
│           ├── banco-santander-logo.svg
│           └── redbullenergydrink.svg
└── README.md
```

---

## Instalación y uso

Este proyecto es 100% estático: no requiere Node.js, npm ni ningún servidor de build.

## Opción A — Abrir directamente

```bash
# 1. Clona el repositorio
git clone https://github.com/Pamebicho/TU_REPO.git

# 2. Entra a la carpeta
cd Escolar_Metropolitana_Landing_Page

# 3. Abre en tu navegador
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

## Opción B — Servidor local (recomendado)

Con VS Code + Live Server
Instala la extensión Live Server
Click derecho sobre `index.html` → Open with Live Server
Con Python

```bash
python -m http.server 3000
# Abre http://localhost:3000
```

Con Node.js

```bash
npx serve .
```

---

## Funcionalidades JavaScript

Cuenta regresiva Temporizador en vivo hacia la fecha de inicio del campeonato (28 nov 2025)
Scrollspy manual El nav-link activo cambia automáticamente según la sección visible en pantalla
Cierre de menú móvil El menú hamburguesa se cierra al hacer clic en cualquier enlace
Validación de formulario Validación nativa HTML5 + feedback visual de éxito y error

---

## Correcciones aplicadas

Bug HTML: la sección `#cuenta-regresiva` estaba anidada dentro de un `<div class="hero-badges">` — se movió fuera como elemento hermano correcto
Bug CSS: `.countdown-card` tenía `background-color`, `border-radius` y `padding` declarados dos veces — se unificó en una sola regla
Bug CSS: `.hero-content` tenía dos reglas duplicadas con valores distintos — se eliminó la primera (más débil)
Bug CSS: `.section-padding` tenía solo `2rem` de padding, insuficiente — corregido a `5rem`
Bug JS: el menú móvil no se cerraba al hacer clic en un enlace — se agregó listener con `bootstrap.Collapse`
Bug JS: el nav-link `active` nunca cambiaba al hacer scroll — se implementó scrollspy con `IntersectionObserver`
Mejora JS: el mensaje de éxito del formulario ahora desaparece automáticamente a los 6 segundos

---

Autora
Desarrollado con ❤️ por Pamela Gutiérrez
