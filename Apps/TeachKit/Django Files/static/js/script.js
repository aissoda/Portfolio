
async function loadSidebar() {
  const response = await fetch("component/sidebar.html");
  document.getElementById("sidebar-comp").innerHTML = await response.text();
  initSidebar();
}

function initSidebar() {
  const toggleBtn = document.getElementById("toggle-btn");
  const openBtn = document.getElementById("open-btn");

  function setCollapsed(collapsed) {
    document.body.classList.toggle("collapsed", collapsed);
    toggleBtn.setAttribute("aria-expanded", String(!collapsed));
    localStorage.setItem("sidebarCollapsed", collapsed); // remember across pages
  }

  toggleBtn.addEventListener("click", () => setCollapsed(true));
  openBtn.addEventListener("click", () => setCollapsed(false));

  // restore the last state when a new page loads
  setCollapsed(localStorage.getItem("sidebarCollapsed") === "true");

  // dropdowns
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    toggle.addEventListener("click", () => {
      const isOpen = dropdown.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

loadSidebar();

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
