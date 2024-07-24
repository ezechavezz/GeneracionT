let personas = [
    {nombre: "Alba", edad: 15},
    {nombre: "Estrella", edad: 30},
    {nombre: "Belen", edad: 20},
    {nombre: "Santiago", edad: 4},
    {nombre: "Katherin", edad: 55},
    {nombre: "Carlos", edad: 40},
    {nombre: "Laura", edad: 22},
    {nombre: "Diego", edad: 27},
    {nombre: "Marta", edad: 33},
    {nombre: "Fernando", edad: 50},
    {nombre: "Julia", edad: 29},
    {nombre: "Pedro", edad: 38},
    {nombre: "Ana", edad: 26},
    {nombre: "Ricardo", edad: 45},
    {nombre: "Isabel", edad: 32},
    {nombre: "Luis", edad: 19},
    {nombre: "Gabriela", edad: 41},
    {nombre: "Martín", edad: 23},
    {nombre: "Valeria", edad: 28},
    {nombre: "Alejandro", edad: 37},
    {nombre: "Carmen", edad: 25},
    {nombre: "Javier", edad: 31},
    {nombre: "Raquel", edad: 24},
    {nombre: "Tomás", edad: 48},
    {nombre: "Silvia", edad: 21},
    {nombre: "Manuel", edad: 60},
    {nombre: "Elena", edad: 34},
    {nombre: "Antonio", edad: 42},
    {nombre: "Claudia", edad: 39},
    {nombre: "Victor", edad: 52},
    {nombre: "Nerea", edad: 18},
    {nombre: "Ramiro", edad: 47},
    {nombre: "Sofia", edad: 16},
    {nombre: "Ezequiel", edad: 37}
];

personas.sort((a,b) => a.edad - b.edad); //la funcion .sort te orderna en el lugar un array o objeto comparando a y b; dando 3 resultados: + si a > b; - si b > a; y null si a = b, no cambian de lugar entre si

personas.forEach((persona, index) => { //personas.forEach recorre cada objeto en el array.La función forEach toma una función de callback que recibe dos argumentos: el objeto actual (persona) y su índice en el array (index).Dentro de la función de callback, se agrega una nueva propiedad posicion al objeto persona y se le asigna el valor de index, que representa la posición actual del objeto en el array ordenado.
    persona.position = index; //al crear la var position, decimos que es igual al index o valor de ubicacion en el array ordenado
});

console.log(personas);