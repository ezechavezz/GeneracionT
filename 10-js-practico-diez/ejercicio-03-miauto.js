let miAuto = {};

miAuto.marca = 'Toyota';
miAuto.año = 1978;
miAuto.nuevo = false;

let propertyKey = 'modelo';
miAuto[propertyKey] = 'Supra';

let anotherPropertyKey = 'precio';
miAuto[anotherPropertyKey] = 30000;

let nextProperty = 'color';
miAuto[nextProperty] = 'Azul';

for (let key in miAuto) {
    console.log(`${key}: ${miAuto[key]}`);
}

console.log(miAuto[propertyKey]); //Supra
console.log(miAuto["modelo"]); //Supra
console.log(miAuto[nextProperty]); //Azul
console.log(miAuto["color"]); //Azul