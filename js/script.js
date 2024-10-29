function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark mode

const modeToggle = document.getElementById("modeToggle");
const body = document.body;
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  modeToggle.checked = true;
}

modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
  }
});
