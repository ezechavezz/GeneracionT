document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los botones
    const buttons = document.querySelectorAll("button");
    
    // Añade un event listener a cada botón
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Selecciona la imagen dentro del botón
            const img = this.querySelector("img");
            // Alterna la clase 'oculto' en la imagen
            img.classList.toggle("oculto");
        });
    });
});