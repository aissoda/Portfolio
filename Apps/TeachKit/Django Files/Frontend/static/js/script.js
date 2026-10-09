// ---------- Sidebar (loaded from component/sidebar.html) ----------
async function loadSidebar() {
  const placeholder = document.getElementById("sidebar-comp");
  if (!placeholder) return;

  const response = await fetch("component/sidebar.html");
  placeholder.innerHTML = await response.text();
  initSidebar();
}

function initSidebar() {
  const toggleBtn = document.getElementById("toggle-btn");
  const openBtn = document.getElementById("open-btn");

  function setCollapsed(collapsed) {
    document.body.classList.toggle("collapsed", collapsed);
    toggleBtn.setAttribute("aria-expanded", String(!collapsed));
    localStorage.setItem("sidebarCollapsed", collapsed);
  }

  toggleBtn.addEventListener("click", () => setCollapsed(true));
  openBtn.addEventListener("click", () => setCollapsed(false));
  setCollapsed(localStorage.getItem("sidebarCollapsed") === "true");

  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    toggle.addEventListener("click", () => {
      const isOpen = dropdown.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

loadSidebar();

// ---------- Account avatar + dropdown (lives in the page itself) ----------
function setAvatar(el, fullName) {
  const name = (fullName || "").trim();
  el.textContent = name ? name[0].toUpperCase() : "?";

  const palette = ["#55efc4", "#74b9ff", "#ffeaa7", "#fab1a0", "#a29bfe", "#fd79a8"];
  let hash = 0;
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) % palette.length;
  el.style.background = palette[hash];
}

const accountIcon = document.getElementById("account-icon");
const accountWrapper = document.getElementById("account-wrapper");

if (accountIcon && accountWrapper) {
  setAvatar(accountIcon, accountIcon.dataset.name);

  const accountToggle = accountWrapper.querySelector(".icon-toggle");

  function setAccountMenu(open) {
    accountWrapper.classList.toggle("open", open);
    accountToggle.setAttribute("aria-expanded", String(open));
  }

  accountToggle.addEventListener("click", () => {
    setAccountMenu(!accountWrapper.classList.contains("open"));
  });

  document.addEventListener("click", (e) => {
    if (!accountWrapper.contains(e.target)) setAccountMenu(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setAccountMenu(false);
  });
}