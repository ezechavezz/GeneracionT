// function triplicador(num1) {
//     return num1 * 3;  // Devuelve el valor multiplicado por 3
// };

// let num1 = prompt("Ingrese un numero para calcular el triple del mismo:");
// num1 = Number(num1);  // Convierte la cadena de texto a número

// if(!isNaN(num1)){
//     let resultado = triplicador (num1);
//     alert("El triple de "+num1 + " es: "+ resultado+ ".");
// }   else{
//     alert("Ingrese un numero porfavor.")
// }

// function multiplicador(num1, num2){
//     return num1 * num2
// }

// let num1 = prompt("Ingrese un numero");
// num1 = Number(num1);
// let num2 = prompt("Ingrese otro numero");
// num2 = Number(num2);

// let resultado = multiplicador(num1,num2);
// alert("El resultado de "+num1 + " por " + num2 +" es: " + resultado);

// function division(num1, num2){
//     return num1 / num2;
// };
// let num1 = prompt("Ingrese el dividiendo");
// num1 = Number(num1);
// let num2 = prompt("Ingrese otro numero");
// num2 = Number(num2);

// let resultado = division(num1,num2)
// alert("El resultado de "+num1 + " divido " + num2 +" es: " + resultado);

function resto(num1, num2){
    return num1 % num2;
};

let num1 = prompt("Ingrese el dividiendo");
num1 = Number(num1);
let num2 = prompt("Ingrese otro numero");
num2 = Number(num2);

let resultado = resto(num1,num2)
alert("El resultado del resto de "+num1 + " sobre " + num2 +" es: " + resultado);