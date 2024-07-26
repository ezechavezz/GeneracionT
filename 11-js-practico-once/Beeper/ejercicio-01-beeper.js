// Selecciona el botón
const button = document.querySelector('button');

// Define la función callback
function seEjecutaEnEvento() {
    // Selecciona el body y agrega un párrafo al final
    document.body.insertAdjacentHTML('beforeend', '<p>BEEP</p>');
    // Cambia el color de fondo del body
    document.body.classList.toggle('color');
}

// Agrega el eventListener al botón
button.addEventListener('click', seEjecutaEnEvento);
