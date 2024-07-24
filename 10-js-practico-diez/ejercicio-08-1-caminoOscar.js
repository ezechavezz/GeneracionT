let greeting = "Hello and welcome"
greeting[1] //H
let words = greeting.split('')

let actoresVocales = []
let actoresPrincipales = ["Tom Hanks", "Jonnhy Deep", "Elizabeth Taylor", "Morgan Freeman", "Jennifer Aniston", "Meryl Streep", "Natalie Portman", "Ashton Kutcher", "Pablo echarri"]//pablo lo uso para verificar la primera letra con mayuscula o miniscula.

let peliculas = []
let actoresPrincipalesPorPeliculas = {
    "Titanic": "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy Leyenda": "Will Smith",
    "Bastardos Sin Gloria": "Brad Pitt",
}

let vocales = ['a','e','i','o','u','A','E','I','O','U']

for(let actor of actoresPrincipales){
    let nombres = actor.split(' '); //Dividimos los nombres completos de "actoresPrincipales" con el .split en dos
    let nombre = nombres[0]; //nombre => a nombres en la pocicion 1 (Nombres de los actores)
    let apellido = nombres[1] //apellido => a nombres en la pocicion 2 (apellidos de los actores)
    if(vocales.includes(nombre[0]) || vocales.includes(apellido[0])){
        actoresVocales.push(actor);//si la condicion se cumple, el .push manda el actor a "actoresVocales"
    } 
}
console.log(actoresVocales);