function init() {
  const navMenu = document.getElementById('navMenu');
const navBtn = document.getElementById('navBtn');


navBtn.addEventListener('click', ()=>{
  navMenu.classList.toggle('nav__menu--show');
});


 // Evento click con condicional para los menú de navegación principal

  window.addEventListener('click', (e) => {
    if (navMenu.classList.contains('nav__menu--show') && e.target != navMenu &&
      e.target != navBtn) {
      navMenu.classList.toggle('nav__menu--show');
    }
  });

}

window.onload = init();