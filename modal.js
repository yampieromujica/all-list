function init() {
const btnAjustes = document.getElementById('boton__ajustes');
const modalAjustes = document.getElementById('modal__ajustes');
const cerrarModal = document.getElementById('cerrar__modal');
const formAjustes = document.querySelector('.form__ajustes');


btnAjustes.addEventListener('click', ()=>{
  modalAjustes.classList.add('modal__ajustes--show');
});

cerrarModal.addEventListener('click', ()=> {
 modalAjustes.classList.remove('modal__ajustes--show');
  
});

}


window.onload = init();