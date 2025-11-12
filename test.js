// ==================== HAMBURGER MENIU ====================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");

  event.stopPropagation();
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  }
});
// ==================== Smooth scroll ====================
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(a.getAttribute("href"))
      ?.scrollIntoView({ behavior: "smooth" });
  });
});
// ==================== Form ====================
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Ačiū! Tavo žinutė išsiųsta");
  e.target.reset();
});
// ==================== AUTOMATIŠKAI PAŽYMI AKTYVŲ MENIU PUNKTĄ (scroll + click) ====================
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  function changeActiveLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  // Paleidžiam iškart
  changeActiveLink();

  // Scroll’as
  window.addEventListener("scroll", changeActiveLink);

  // Paspaudimas (kad iškart pasikeistų)
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
