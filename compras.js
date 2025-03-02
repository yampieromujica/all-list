// Elementos del DOM
const form = document.getElementById('form');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const productoList = document.getElementById('taskList');
const modalError = document.getElementById('modal__list');
const mensajeError = document.getElementById('mensajeError');
const btnError = document.getElementById('btnError');

// Cargar productos del local storage
let productos = JSON.parse(localStorage.getItem('productos')) || [];

// Función para renderizar tareas
function renderProductos() {
  productoList.innerHTML = '';
  productos.forEach((producto, index) => {
    const li = document.createElement('li');
    li.textContent = producto.text;
    if (producto.completed) {
      li.style.textDecoration = 'line-through';
      li.style.color = '#ff0000';
    };

    const check = document.createElement('span');

    check.onclick = () => toggleProducto(index);

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
    borrar.onclick = () => deleteProducto(index);
    //li.appendChild(borrar);
    li.setAttribute('class', 'li');

    li.appendChild(contenedorIco);

    productoList.prepend(li);
  });
}

// Función para agregar tarea
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const productoText = taskInput.value;
  if (productoText == '') {
    modalError.classList.add('modal__list--show');
    mensajeError.textContent = 'El campo no puede estar vacío, por favor agregue un producto y pulse agregar (+)';
  } else if (productoText) {
    productos.push({
      text: productoText, completed: false
    });
    taskInput.value = '';
    saveProductos();
    renderProductos();
  }
});

// Función para eliminar tarea
function deleteProducto(index) {
  productos.splice(index,
    1);
  saveProductos();
  renderProductos();
}

function toggleProducto(index) {
  productos[index].completed = !productos[index].completed;
  saveProductos();
  renderProductos();
}

// Función para guardar tareas en local storage
function saveProductos() {
  localStorage.setItem('productos',
    JSON.stringify(productos));
}

btnError.addEventListener('click', ()=> {
  modalError.classList.remove('modal__list--show');
});


// Inicializar la lista de tareas
renderProductos();