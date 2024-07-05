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

// Almacenar datos
sessionStorage.setItem('nombre', 'Pedro');

// Recuperar datos
const nombre = sessionStorage.getItem('nombre');
console.log(nombre); // Salida: Pedro

// Eliminar datos
sessionStorage.removeItem('nombre');

// Limpiar todo el almacenamiento
sessionStorage.clear();

// Crear una solicitud XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.ejemplo.com/datos', true);

// Manejar la respuesta
xhr.onload = function() {
  if (xhr.status === 200) {
    // Parsear la respuesta JSON
    const datos = JSON.parse(xhr.responseText);
    console.log(datos);
  }
};

// Enviar la solicitud
xhr.send();

let fetchData = new Promise((resolve, reject) => {
  let success = true; // Simular éxito o fracaso

  setTimeout(() => {
      if (success) {
          resolve("Datos obtenidos correctamente.");
      } else {
          reject("Error al obtener los datos.");
      }
  }, 2000); // Simular operación asincrónica con setTimeout
});

fetchData
  .then((data) => {
      console.log(data); // Salida: "Datos obtenidos correctamente."
  })
  .catch((error) => {
      console.log(error); // Salida: "Error al obtener los datos."
  })
  .finally(() => {
      console.log("Operación de obtención de datos finalizada."); // Siempre se ejecuta.
  });


  






