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

  glow.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    mask.style.clipPath = `circle(0% at ${x}px ${y}px)`;
    void mask.offsetWidth;
    mask.style.clipPath = `circle(150% at ${x}px ${y}px)`;
  });
});

// 🕳️ Menu Overlay met Portaal Cirkel
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-icon");
  const portal = document.getElementById("menuPortal");
  const closeBtn = document.querySelector(".close-portal");

  if (!hamburger || !portal || !closeBtn) return;

  hamburger.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const circle = document.createElement("div");
    circle.classList.add("portal-circle");
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.transform = "translate(-50%, -50%)";
    circle.style.width = "0px";
    circle.style.height = "0px";

    document.body.appendChild(circle);
    void circle.offsetWidth; // force reflow

    circle.style.width = "3000px";
    circle.style.height = "3000px";

    setTimeout(() => {
      portal.classList.add("active");
      portal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }, 600);

    setTimeout(() => {
      circle.remove();
    }, 1200);
  });

  closeBtn.addEventListener("click", () => {
    portal.classList.remove("active");
    portal.style.display = "none";
    document.body.style.overflow = "";
  });
});