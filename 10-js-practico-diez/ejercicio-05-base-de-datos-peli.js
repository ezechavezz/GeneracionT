let peliculas = [
    {
        titulo: "Cars",
        rating: 4.5,
        loHasVisto: true
    },
    {
        titulo: "Iron Man",
        rating: 4.8,
        loHasVisto: true
    },
    {
        titulo: "Avengers",
        rating: 4.9,
        loHasVisto: true
    },
    {
        titulo: "The Godfather",
        rating: 4.7,
        loHasVisto: false
    }
];

for (let i = 0; i < peliculas.length; i++) {

    let titulo = peliculas[i].titulo;
    let rating = peliculas[i].rating;
    let loHasVisto = peliculas[i].loHasVisto ? "Si" : "No"; //operadot ternario

    console.log(`Película: ${titulo} - Rating: ${rating} - ¿La has visto?: ${loHasVisto}`);
}