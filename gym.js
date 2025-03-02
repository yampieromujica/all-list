const formRutina = document.getElementById('form__rutinas');
const rutinaInput = document.getElementById('rutinaInput');
const addRutinaButton = document.getElementById('addRutinaButton');
const rutinaList = document.getElementById('rutinaList');
const modalError = document.getElementById('modal__list');
const mensajeError = document.getElementById('mensajeError');
const btnError = document.getElementById('btnError');

// Cargar tareas del local storage
let rutinas = JSON.parse(localStorage.getItem('rutinas')) || [];

// Función para renderizar tareas
function renderRutinas() {
    rutinaList.innerHTML = '';
    rutinas.forEach((rutina, index) => {
        const li = document.createElement('li');
        li.textContent = rutina.text;
        if (rutina.completed) {
            li.style.textDecoration = 'line-through';
             li.style.color = '#ff0000';
        };
        
       const check = document.createElement('span');
       
        check.onclick = () => toggleRutina(index);
        
        // Crear elementos para eliminar y editar
        
         const contenedorIco = document.createElement('span');

    const borrar = document.createElement('span');

    
    
    
     // agregar el elemento borrar y el elemento check al contenedorIco

    contenedorIco.appendChild(borrar);
    contenedorIco.appendChild(check);
    
    // Agregar atributos a los elementos
    
    contenedorIco.setAttribute('class', 'contenedorIco');
    borrar.setAttribute('class', 'icofont-bin');
    check.setAttribute('class', 'icofont-verification-check');
        
        
       // const deleteButton = document.createElement('button');
        //deleteButton.textContent = 'Eliminar';
        borrar.onclick = () => deleteRutina(index);
        //li.appendChild(borrar);
         li.setAttribute('class', 'li');
         
         li.appendChild(contenedorIco);
         
        rutinaList.prepend(li);
    });
}

// Función para agregar tarea
formRutina.addEventListener('submit', (e) => {
  e.preventDefault();
    const rutinaText = rutinaInput.value;
    if (rutinaText == '') {
      modalError.classList.add('modal__list--show');
      mensajeError.textContent = 'El campo no puede estar vacío, por favor agregue una rutina y pulse agregar (+)';
      } else if (rutinaText) {
        rutinas.push({ text: rutinaText, completed: false });
        rutinaInput.value = '';
        saveRutinas();
        renderRutinas();
    }
});

// Función para eliminar tarea
function deleteRutina(index) {
    rutinas.splice(index, 1);
    saveRutinas();
    renderRutinas();
}

function toggleRutina(index) {
    rutinas[index].completed = !rutinas[index].completed;
    saveRutinas();
    renderRutinas();
}

// Función para guardar tareas en local storage
function saveRutinas() {
    localStorage.setItem('rutinas', JSON.stringify(rutinas));
}

btnError.addEventListener('click', ()=>{
  modalError.classList.remove('modal__list--show');
});


// Inicializar la lista de tareas
renderRutinas();
