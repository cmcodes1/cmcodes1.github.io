document.addEventListener("DOMContentLoaded", () => {
  // 1. Intersection Observer for Scroll Animations
  // This triggers the 'visible' class when elements scroll into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".scroll-reveal");
  revealElements.forEach((el) => observer.observe(el));

  // 2. Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // Offset for fixed header
          behavior: "smooth",
        });
      }
    });
  });

  // 3. Simple Mobile Menu Toggle (Optional if you want to expand)
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
      if (navLinks.style.display === "flex") {
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "60px";
        navLinks.style.right = "0";
        navLinks.style.background = "#0f172a";
        navLinks.style.width = "100%";
        navLinks.style.padding = "20px";
        navLinks.style.borderBottom = "1px solid #333";
      }
    });
  }
});
