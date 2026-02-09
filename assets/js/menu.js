document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const artikelBtn = document.getElementById("artikelBtn");
  const artikelMenu = document.getElementById("artikelMenu");
  const artikelMobileBtn = document.getElementById("artikelMobileBtn");
  const artikelMobileMenu = document.getElementById("artikelMobileMenu");
  const arrowMobile = document.getElementById("arrowMobile");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  if (artikelBtn && artikelMenu) {
    artikelBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (artikelMenu.classList.contains("max-h-0")) {
        artikelMenu.style.maxHeight = artikelMenu.scrollHeight + "px";
        artikelMenu.classList.remove("max-h-0", "opacity-0");
        artikelMenu.classList.add("opacity-100");
      } else {
        artikelMenu.style.maxHeight = "0";
        artikelMenu.classList.add("max-h-0", "opacity-0");
        artikelMenu.classList.remove("opacity-100");
      }
    });
  }

  if (artikelMobileBtn && artikelMobileMenu) {
    artikelMobileBtn.addEventListener("click", () => {
      if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
      }

      if (artikelMobileMenu.classList.contains("max-h-0")) {
        artikelMobileMenu.style.maxHeight =
          artikelMobileMenu.scrollHeight + "px";
        artikelMobileMenu.classList.remove("max-h-0", "opacity-0");
        artikelMobileMenu.classList.add("opacity-100");
      } else {
        artikelMobileMenu.style.maxHeight = "0";
        artikelMobileMenu.classList.add("max-h-0", "opacity-0");
        artikelMobileMenu.classList.remove("opacity-100");
      }

      if (arrowMobile) {
        arrowMobile.classList.toggle("rotate-180");
        arrowMobile.classList.toggle("transform");
      }
    });
  }

  document.addEventListener("click", (e) => {
    if (
      artikelMenu &&
      !artikelBtn.contains(e.target) &&
      !artikelMenu.contains(e.target)
    ) {
      artikelMenu.style.maxHeight = "0";
      artikelMenu.classList.add("max-h-0", "opacity-0");
      artikelMenu.classList.remove("opacity-100");
    }
  });
});
