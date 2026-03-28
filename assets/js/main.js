function initHeaderScroll() {
  const mainHeader = document.getElementById("mainHeader");

  if (!mainHeader) return;

  window.addEventListener(
    "scroll",
    () => {
      mainHeader.classList.toggle("scrolled", window.scrollY > 50);
    },
    { passive: true },
  );
}

function initMobileMenu() {
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
}

function initActiveSectionLinks() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

function initRevealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  if (!elements.length) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  elements.forEach((element) => revealObserver.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initMobileMenu();
  initActiveSectionLinks();
  initRevealOnScroll();

  if (typeof initCountdown === "function") {
    initCountdown();
  }

  if (typeof initInscriptionForm === "function") {
    initInscriptionForm();
  }
});
