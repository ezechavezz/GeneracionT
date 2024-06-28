let divNode = document.querySelector('.textito');

const funcion = (parameteros) => {
    //cuerpo de la funcion
}
//MAP Recibe funcion transformadora
//4 elementos
let numeros = [1,2,3,4,5];
let cuadradoNumeros = numeros.map( x => x*2);
// 2,4,6,8,10
console.log(cuadradoNumeros);

const boton = document.getElementById('boton');
boton.addEventListener('click', function() {
  alert('¡Hola!');
});

