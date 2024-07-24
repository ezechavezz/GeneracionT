let ecommerce = [                                                   //lista de la tienda
    { nombre: "Samsung TV", precio: 6000, articulos: 10 },
    { nombre: "DELL Notebook", precio: 4000, articulos: 30 },
    { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
    { nombre: "Monitor Philips", precio: 10000, articulos: 20 },
    { nombre: "Teclado Logitech", precio: 3000, articulos: 5 },
    { nombre: "Cámara Canon", precio: 8000, articulos: 8 },
    { nombre: "Tablet Apple", precio: 5000, articulos: 12 },
    { nombre: "Smartwatch Garmin", precio: 2500, articulos: 25 },
    { nombre: "Router TP-Link", precio: 2000, articulos: 18 },
    { nombre: "Disco Duro Externo", precio: 3500, articulos: 7 },
    { nombre: "Altavoces Bose", precio: 4500, articulos: 10 },
    { nombre: "Impresora HP", precio: 2200, articulos: 14 }
];
function calcularTotales(ecommerce) {
    const totales = {};
    ecommerce.forEach(producto => { //Se utiliza el metodo forEach para iterar sobre cada elemento (objeto) del arreglo ecommerce. "producto" representa cada objeto del arreglo en cada iteracion.
        const { nombre, precio, articulos } = producto;
        const valorTotal = precio * articulos;
        if (totales[nombre]) {
            totales[nombre] += valorTotal;
        } else {
            totales[nombre] = valorTotal;
        }
    });
    // Convertir el objeto totales a un arreglo de objetos
    // Object.keys(totales) devuelve un arreglo con las claves del objeto totales (los nombres de los productos)
    // map se usa para transformar ese arreglo de claves en un nuevo arreglo de objetos
    const resultado = Object.keys(totales).map(nombre => ({
        nombre: nombre,
        valorTotal: totales[nombre]
    }));

    return resultado;
}

console.log(calcularTotales(ecommerce));