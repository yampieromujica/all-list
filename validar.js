document.addEventListener("DOMContentLoaded", function () {
  const formUsuario = document.getElementById("formUsuario");

  formUsuario.addEventListener('submit',
    function (e) {

      e.preventDefault();
      // Validar Nombre (solo letras y espacios)

      const nombre = document.getElementById('nombre').value;


      if (nombre.trim() === '') {
        alert("Por favor, introduce un nombre válido (solo letras y espacios).");
        return false;
      }

      // Validar Apellido (solo letras y espacios)

      const apellido = document.getElementById('apellido').value;

      if (apellido.trim() === '') {
        alert("Por favor, introduce un apellido válido (solo letras y espacios).");
        return false;
      }

      // Validar WhatsApp (debe empezar con + y tener entre 8 y 15 dígitos)
      const whatsapp = document.getElementById('whatsapp').value;

      if (whatsapp === '') {
        alert("Por favor, introduce un número de WhatsApp válido (ej: +5491123456789).");
        return false;
      } else if (whatsapp.includes('+')) {
        alert("Por favor, introduce un número de WhatsApp válido (ej: +5491123456789)".);
        return false;
      }

      // Validar Comentario (no debe estar vacío)

      const comentario = document.getElementById('comentario').value;
      if (comentario.trim() === "") {
        alert("Por favor, introduce un comentario.");
        return false;
      }

      // Si todo es válido, el formulario se envía


      nombre.reset();
      apellido.reset();
      whatsapp.reset();
      comentario.reset();
      return true;

      formUsuario.submit();
    });
    
    });