"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        event.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });

  // Animate elements on scroll
  function animateOnScroll() {
    document.querySelectorAll(".animate-on-scroll").forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on page load

  // Navbar background change on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("bg-white", "shadow");
    } else {
      navbar.classList.remove("bg-white", "shadow");
    }
  });

  // Mobile menu toggle
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });

  // Close mobile menu on click outside
  document.addEventListener("click", function (event) {
    if (
      !navbarToggler.contains(event.target) &&
      !navbarCollapse.contains(event.target) &&
      navbarCollapse.classList.contains("show")
    ) {
      navbarCollapse.classList.remove("show");
    }
  });
});
