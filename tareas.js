// Elementos del DOM
const form = document.getElementById('form');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const modalError = document.getElementById('modal__list');
const mensajeError = document.getElementById('mensajeError');
const btnError = document.getElementById('btnError');

// Cargar tareas del local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para renderizar tareas
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.style.textDecoration = 'line-through';
             li.style.color = '#ff0000';
        };
        
       const check = document.createElement('span');
       
        check.onclick = () => toggleTask(index);
        
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
        borrar.onclick = () => deleteTask(index);
        //li.appendChild(borrar);
         li.setAttribute('class', 'li');
         
         li.appendChild(contenedorIco);
         
        taskList.prepend(li);
    });
}

// Función para agregar tarea
form.addEventListener('submit', (e) => {
  e.preventDefault();
    const taskText = taskInput.value;
    if (taskText == '') {
      modalError.classList.add('modal__list--show');
      mensajeError.textContent = 'El campo no puede estar vacío, por favor agregue una tarea y pulse agregar (+)';
      } else if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
});

// Función para eliminar tarea
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Función para guardar tareas en local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

btnError.addEventListener('click', ()=>{
  modalError.classList.remove('modal__list--show');
});


// Inicializar la lista de tareas
renderTasks();
