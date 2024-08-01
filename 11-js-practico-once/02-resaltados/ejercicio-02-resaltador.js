const paragraphs = document.querySelectorAll('p'); // selecciona todos los parrafos y los guarda en una variable

for (let i = 0; i < paragraphs.length; i++) {//recorremos todos los parrafos
    paragraphs[i].addEventListener('click', function() {
        this.classList.toggle('resaltado');
    });
}
