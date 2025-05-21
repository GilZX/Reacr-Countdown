import React, { useState } from 'react';

export function Frase() {





  const frases = [
    {title: 'No te enlleves',description: 'BY Luisito'},
    {title:"La Tecnologia a Avanzado Mucho.",description:"by luisito"},
  ]
  const [random] = useState(() => Math.floor(Math.random() * frases.length));
  


  const estiloContenedor = {
    border: '2px solid rgb(25, 210, 118)',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    width: 'fit-content',
    margin: '10px auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const estiloTitulo = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333',
  };

  const estiloDescripcion = {
    fontSize: '14px',
    color: '#555',
  };



  return (
    <div style={estiloContenedor}>
      <div style={estiloTitulo}>{frases[random].title}</div>
      <div style={estiloDescripcion}>{frases[random].description}</div>
    </div>
  );
}
