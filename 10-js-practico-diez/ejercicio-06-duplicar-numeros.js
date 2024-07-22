let numeros = [2, 4, 5, 37, 0]// -> 4 8 10 74 0
let numeros_duplicados = {
} 
for(let i = 0; i < numeros.length; i++) {
    numeros_duplicados[`num${i + 1}`] = numeros[i] * 2; //"[`num${i + 1}`]" va a generara num1,num2,numEtc...
}

console.log(numeros_duplicados);