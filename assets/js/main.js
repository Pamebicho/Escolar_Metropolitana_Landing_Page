// ─────────────────────────────────────────────
// Copa Escolar Metropolitana — main.js v2
// ─────────────────────────────────────────────

// ── 1. NAVBAR STICKY CON EFECTO SCROLL ──
const mainHeader = document.getElementById("mainHeader");
window.addEventListener(
  "scroll",
  () => {
    mainHeader.classList.toggle("scrolled", window.scrollY > 50);
  },
  { passive: true },
);

// ── 2. CERRAR MENÚ MÓVIL AL HACER CLICK ──
const navbarCollapse = document.getElementById("mainNavbar");
document
  .querySelectorAll("#mainNavbar .nav-link, #mainNavbar .btn-accent")
  .forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse?.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
      }
    });
  });

// ── 3. SCROLLSPY — nav-link activo según sección visible ──
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
).observe
  ? sections.forEach((s) =>
      new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting)
              navLinks.forEach((l) =>
                l.classList.toggle(
                  "active",
                  l.getAttribute("href") === `#${e.target.id}`,
                ),
              );
          });
        },
        { rootMargin: "-40% 0px -55% 0px" },
      ).observe(s),
    )
  : null;

// ── 4. SCROLL REVEAL ──
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

// ── 5. FORMULARIO ──
const form = document.getElementById("inscriptionForm");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      formMessage.textContent = "Por favor revisa los campos marcados en rojo.";
      formMessage.className = "mt-2 small text-danger";
      return;
    }
    form.classList.remove("was-validated");
    form.reset();
    formMessage.textContent =
      "¡Gracias! Recibimos los datos de tu colegio. Te contactaremos por correo en máximo 48 horas hábiles.";
    formMessage.className = "mt-2 small text-success";
    setTimeout(() => {
      formMessage.textContent = "";
      formMessage.className = "";
    }, 6000);
  });
}

// ── 6. CUENTA REGRESIVA ──
const championshipStart = new Date("2025-11-28T09:00:00-03:00").getTime();
const cdDays = document.getElementById("cd-days");
const cdHours = document.getElementById("cd-hours");
const cdMinutes = document.getElementById("cd-minutes");
const cdSeconds = document.getElementById("cd-seconds");
const cdMessage = document.getElementById("cd-message");

if (cdDays) {
  const pad = (n) => String(n).padStart(2, "0");
  const tick = () => {
    const diff = championshipStart - Date.now();
    if (diff <= 0) {
      [cdDays, cdHours, cdMinutes, cdSeconds].forEach(
        (el) => (el.textContent = "00"),
      );
      if (cdMessage) cdMessage.textContent = "¡El campeonato ha comenzado!";
      clearInterval(timer);
      return;
    }
    const s = Math.floor(diff / 1000);
    cdDays.textContent = pad(Math.floor(s / 86400));
    cdHours.textContent = pad(Math.floor((s % 86400) / 3600));
    cdMinutes.textContent = pad(Math.floor((s % 3600) / 60));
    cdSeconds.textContent = pad(s % 60);
  };
  const timer = setInterval(tick, 1000);
  tick();
}
