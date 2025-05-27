import React, { useState, useEffect } from "react"

const estiloWarning = {
  marginTop: "15px",
  fontSize: "10px",
  color: "#d32f2f",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
};

export function Contador({ tipo = "reversa", fecha, label, color_style="#333"   }) {
  const [activo, setActivo] = useState(true);
  const [tiempo, setTiempo] = useState({
    dias: "00",
    horas: "00",
    minutos: "00",
    segundos: "00",
  });



  useEffect(() => {

    const partes = fecha.split("/");
    const targetFecha = new Date(
      `${partes[2]}-${partes[1]}-${partes[0]}T00:00:00`
    );

    const actualizarTiempo = () => {
      const ahora = new Date();
      let diferencia;

      if (tipo === "reversa") {
        diferencia = targetFecha - ahora;


        if (diferencia <= 0) {
          clearInterval(intervalo);
          setActivo(false);
          setTiempo({
            dias: "00",
            horas: "00",
            minutos: "00",
            segundos: "00",
          });
          return;
        }
      } else {
        diferencia = ahora - targetFecha;
        if (diferencia < 0) diferencia = 0;
      }

      const segundosTotales = Math.floor(diferencia / 1000);
      const dias = Math.floor(segundosTotales / (3600 * 24));
      const horas = Math.floor((segundosTotales % (3600 * 24)) / 3600);
      const minutos = Math.floor((segundosTotales % 3600) / 60);
      const segundos = segundosTotales % 60;

      setTiempo({
        dias: dias.toString().padStart(2, "0"),
        horas: horas.toString().padStart(2, "0"),
        minutos: minutos.toString().padStart(2, "0"),
        segundos: segundos.toString().padStart(2, "0"),
      });
    };

    const intervalo = setInterval(actualizarTiempo, 1000);
    actualizarTiempo();

    return () => clearInterval(intervalo);
  }, [fecha, tipo]);

  return (

    <div style={
      {
        border: "2px solid #1976d2", // Azul Material UI
        padding: "20px",
        borderRadius: "8px",
        fontFamily: "monospace",
        fontSize: "24px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        minWidth: "300px",
        marginBottom: "8px",
      textShadow: `0 0 8px ${color_style}`,
      color:`${color_style}`
    }}>

      <strong>{label}</strong>
      <h2>

        {tiempo.dias}:{tiempo.horas}:{tiempo.minutos}:{tiempo.segundos}
      </h2>
      <div style={estiloWarning}>
        ⚠️ <span>Fecha objetivo: {fecha}</span>
      </div>
    </div>

  )

}