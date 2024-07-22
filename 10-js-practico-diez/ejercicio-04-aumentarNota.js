let alumnos = [
{Estudiante: "Juan", nota: 6}, //-> 8
{Estudiante: "Mario", nota: 8}, //-> 10
{Estudiante: "Julia", nota: 10}, //-> 10
{Estudiante: "Sofia", nota: 2}, //-> 2
];

function sumarPuntos(alumnos){
    for (let i = 0; i <alumnos.length; i++){
        if(alumnos[i].nota > 5){
            alumnos[i].nota = Math.min(alumnos[i].nota + 2, 10)
        }
    }
}

sumarPuntos(alumnos);

console.log("Lista actualizada de las notas de los alumnos:");
console.log(alumnos);