
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