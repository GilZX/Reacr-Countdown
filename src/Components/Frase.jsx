import React, { useState,useEffect } from 'react';

export function Frase() {


  const [frases, setFrases] = useState([]);

  const [random,setRandom] = useState(0);


  useEffect(() => {
    fetch('https://sapcountdownrestapi.onrender.com/frases')
      .then(res => res.json())
      .then(data => {
        setFrases(data);
        setRandom(Math.floor(Math.random() * data.length));
      })
      .catch(err => {
        console.error("Error al cargar frases:", err);
      });

  }, []);


  const estiloContenedor = {
    border: '2px solid rgb(25, 210, 118)',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    width: 'fit-content',
    margin: '10px auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    gridTemplateColumns: "repeat(3, 1fr)", // 3 columnas
    gap: "16px", // espacio entre columnas y filas
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

  const frase = frases[random];

  return (
    <div style={estiloContenedor}>
      <div style={estiloTitulo}>{frases.length==0 ? "Cargando frases...": frase.author}</div>
      <div style={estiloDescripcion}>{frases.length==0 ? "Cargando frases... ":frase.description}</div>
    </div>
  );
}
