document.addEventListener("DOMContentLoaded", function () {
  // Example: Toggle navigation menu
  const menuButton = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  // Example: Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Example: Portfolio item filter (if you have categories)
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      portfolioItems.forEach((item) => {
        if (category === "all" || item.classList.contains(category)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
