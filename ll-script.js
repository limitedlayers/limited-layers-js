// 🌕 Mouse Cursor
document.addEventListener("DOMContentLoaded", function () {
  const dot = document.createElement("div");
  const aura = document.createElement("div");

  dot.classList.add("custom-cursor");
  aura.classList.add("cursor-aura");

  document.body.appendChild(aura);
  document.body.appendChild(dot);

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    aura.style.left = `${x}px`;
    aura.style.top = `${y}px`;
  });

  // 🧿 Hover-detectie op alles dat klikbaar is
  document.addEventListener("mouseover", (e) => {
    const target = e.target;
    if (
      target.closest(
        "a, button, [role='button'], [data-hover], .cursor-hover, .reveal-glow"
      )
    ) {
      aura.classList.add("hovered");
    }
  });

  document.addEventListener("mouseout", () => {
    aura.classList.remove("hovered");
  });
});

// 🌑 Reveal Glow Interactie
document.addEventListener("DOMContentLoaded", function () {
  const glow = document.querySelector(".reveal-glow");
  const mask = document.querySelector(".reveal-mask");

  if (!glow || !mask) return;

  const alreadyRevealed = localStorage.getItem("glowRevealed") === "true";

  if (alreadyRevealed) {
    // Mask direct openzetten
    mask.style.transition = "none";
    mask.style.clipPath = "circle(150% at 50% 50%)";
    mask.style.pointerEvents = "none";

    // Glow zichtbaar houden maar niet klikbaar
    glow.classList.add("inactive-glow");
    return;
  }

  // Eerste klik activeert animatie
  glow.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    mask.style.clipPath = `circle(0% at ${x}px ${y}px)`;
    void mask.offsetWidth;
    mask.style.clipPath = `circle(150% at ${x}px ${y}px)`;

    localStorage.setItem("glowRevealed", "true");

    setTimeout(() => {
      glow.classList.add("inactive-glow");
      glow.style.pointerEvents = "none";
    }, 1000);

    setTimeout(() => {
      mask.style.pointerEvents = "none";
    }, 1600);
  });
});

// 🕳️ Menu Overlay zonder cirkel
window.addEventListener("load", () => {
  const hamburger = document.querySelector(".hamburger-icon");
  const portal = document.getElementById("menuPortal");
  const closeBtn = document.querySelector(".close-portal");

  if (!hamburger || !portal || !closeBtn) return;

hamburger.addEventListener("click", () => {
  portal.classList.add("active");
  document.body.style.overflow = "hidden";
  document.body.classList.remove("cursor-hidden");
});

  closeBtn.addEventListener("click", () => {
    console.log("❌ Portal sluiten");
    portal.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// 🌐 Automatisch actieve menu-link markeren op basis van URL
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.replace(/\/$/, "");
  const menuLinks = document.querySelectorAll(".menu-link");

  menuLinks.forEach((link) => {
    const anchor = link.closest("a");
    if (!anchor) return;

    const href = anchor.getAttribute("href").replace(/\/$/, "");

    if (
      (href === "" && currentPath === "") ||
      (href === "/" && currentPath === "") || // root
      (href !== "/" && currentPath.startsWith(href))
    ) {
      link.classList.add("active");
    }
  });
});

// 🔍 Search Overlay Slide-Up (onder navbar stoppen)
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.querySelector(".search-icon");
  const searchOverlay = document.querySelector(".search-overlay");
  const closeSearch = document.querySelector(".close-search");

  if (!searchIcon || !searchOverlay) return;

  // 🧲 Klik op het vergrootglas opent overlay van onder naar boven
  searchIcon.addEventListener("click", () => {
    searchOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // ❌ Optioneel: klik op .close-search sluit de overlay
  if (closeSearch) {
    closeSearch.addEventListener("click", () => {
      searchOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
});
