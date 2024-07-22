let personas = [
    { nombre: 'Lana', edad: '28'},
    { nombre: 'Jorge', edad: '25'},
    { nombre: 'Jose', edad: '30'},
    { nombre: 'Lucas', edad: '20'},
];

let personasMas27 = personas.filter(persona => persona.edad > 27);
console.log(personasMas27);
