const toggleBtn = document.getElementById("toggle-btn");
const openBtn = document.getElementById("open-btn");
const dropdown = document.getElementById("workspace-dropdown");
const dropdownToggle = dropdown.querySelector(".dropdown-toggle");

function setCollapsed(collapsed) {
  document.body.classList.toggle("collapsed", collapsed);
  toggleBtn.setAttribute("aria-expanded", String(!collapsed));
}

toggleBtn.addEventListener("click", () => setCollapsed(true));
openBtn.addEventListener("click", () => setCollapsed(false));
dropdownToggle.addEventListener("click", () => {
  const isOpen = dropdown.classList.toggle("open");
  dropdownToggle.setAttribute("aria-expanded", String(isOpen));
});