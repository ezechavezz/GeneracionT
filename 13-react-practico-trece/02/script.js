import React, { useState } from 'react';

const CalculadoraDeCuadrados = () => {
    const [numero, setNumero] = useState('');
    const [cuadrado, setCuadrado] = useState(null);

    const manejarCambio = (e) => {
        const valor = e.target.value;
        setNumero(valor);
        if (!isNaN(valor) && valor !== '') {
            setCuadrado(Math.pow(Number(valor), 2));
        } else {
            setCuadrado(null);
        }
    };

    return (
        <div>
            <h1>Calculadora de Cuadrados</h1>
            <input
                type="text"
                value={numero}
                onChange={manejarCambio}
                placeholder="Ingresa un número"
            />
            {cuadrado !== null && (
                <p>El cuadrado de {numero} es: {cuadrado}</p>
            )}
        </div>
    );
};
export default CalculadoraDeCuadrados;