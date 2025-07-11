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
    glow.remove(); // of: glow.style.display = "none";
    mask.classList.add("revealed"); // volledig geopend
    mask.style.pointerEvents = "none";
    return;
  }

  // Eerste klik opent animatie
  glow.addEventListener("click", function () {
    mask.classList.add("revealed");
    localStorage.setItem("glowRevealed", "true");

    // Glow verdwijnt na animatie
    setTimeout(() => {
      glow.style.opacity = "0";
      glow.style.pointerEvents = "none";
    }, 1000);

    // Zet mask na animatie open + niet blokkerend
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

  hamburger.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Zet muispositie als variabelen voor de clip-path
    portal.style.setProperty("--x", `${x}px`);
    portal.style.setProperty("--y", `${y}px`);

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
