import React, { useState, useEffect } from 'react';

const ContadorAutomatico = () => {
  // Declarar el estado del contador
  const [contador, setContador] = useState(0);

  // Configurar el efecto para incrementar el contador cada segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(contador => contador + 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar

  // Renderizar el contador
  return (
    <div>
      <h1>Contador Automático: {contador}</h1>
    </div>
  );
};

export default ContadorAutomatico;