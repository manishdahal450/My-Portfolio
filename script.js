const skillFills = document.querySelectorAll(".skill-fill");
let skillsAnimated = false;

window.addEventListener("scroll", () => {
  const aboutSection = document.querySelector("#about");
  const sectionPos = aboutSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (sectionPos < screenPos && !skillsAnimated) {
    skillFills.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    });
    skillsAnimated = true;
  }
});

const toggleBtn = document.querySelector(".toggle-btn");
const icon = toggleBtn.querySelector("i");

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
});
