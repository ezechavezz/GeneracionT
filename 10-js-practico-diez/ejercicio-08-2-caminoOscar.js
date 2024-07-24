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

for (let nombre in actoresPrincipalesPorPeliculas){ //nombre va a tomar el valor de cada clave del objeto "actoresPrincipalesPorPeliculas"
    actoresPrincipales.push(actoresPrincipalesPorPeliculas[nombre]); //mandamos a "actoresPrincipales" el valor de "actoresPrincipalesPorPeliculas" en la pocision "nombre"
}
console.log(actoresPrincipales);