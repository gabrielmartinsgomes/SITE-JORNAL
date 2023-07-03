
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
  }

btnMobile.addEventListener('click', toggleMenu);

const btnBusca = document.getElementById('btn-busca');

function toggleBusca() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('ativo');
  }

btnBusca.addEventListener('click', toggleBusca)

const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
