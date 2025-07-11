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
  const hideWrapper = document.querySelector(".hidewrapper");

  const alreadyRevealed = localStorage.getItem("glowRevealed") === "true";

  if (!glow || !mask || !hideWrapper) return;

  if (alreadyRevealed) {
    // 1️⃣ Zorg dat glow en mask niet meer blokkeren
    glow.remove();
    mask.remove();
    hideWrapper.style.clipPath = "none"; // veiligheid
    return;
  }

  // 2️⃣ Eerste keer: klik activeert animatie
  glow.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    mask.style.clipPath = `circle(0% at ${x}px ${y}px)`;
    void mask.offsetWidth;
    mask.style.clipPath = `circle(150% at ${x}px ${y}px)`;

    localStorage.setItem("glowRevealed", "true");

    setTimeout(() => {
      glow.remove();
      mask.remove();
    }, 1500);
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
