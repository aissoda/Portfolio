const toggleBtn = document.getElementById("toggle-btn");
const openBtn = document.getElementById("open-btn");

function setCollapsed(collapsed) {
  document.body.classList.toggle("collapsed", collapsed);
  toggleBtn.setAttribute("aria-expanded", String(!collapsed));
}

toggleBtn.addEventListener("click", () => setCollapsed(true));
openBtn.addEventListener("click", () => setCollapsed(false));