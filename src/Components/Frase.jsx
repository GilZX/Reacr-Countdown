import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import coffe from '../assets/logo.jpg'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export function Frase() {


  const [frases, setFrases] = useState([]);
  const [count,setCount]=useState(0)

  function getRandomFrase(lim) {

    return Math.floor(Math.random() * (lim + 1))
  }

  const next = () => {
    setCount(prev => (prev + 1) % frases.length);
  };



  useEffect(() => {
    fetch('https://sapcountdownrestapi.onrender.com/frases')
      .then(res => res.json())
      .then(data => {
        setFrases(data);
      })
      .catch(err => {
        console.error("Error al cargar frases:", err);
      });

  }, []);

   const frase = frases[count];


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



  return (
    <div style={estiloContenedor}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'black' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={coffe} />
          </ListItemAvatar>
          <ListItemText
            primary={frases.length == 0 ? "Cargando frases..." : "BY --" + " " + frase.author}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: 'white', display: 'inline' }}
                >
                  {frases.length == 0 ? "..." : frase.description}
                </Typography>

              </React.Fragment>
            }
          />
          <IconButton onClick={()=>next()} color="error" sx={{ color: 'white', backgroundColor: '#f44336' }}
          >
            <DoubleArrowIcon />
          </IconButton>
        </ListItem>

      </List>
    </div>
  );


  /* <div style={estiloContenedor}>
     <div style={estiloTitulo}>{frases.length==0 ? "Cargando frases...": frase.author}</div>
     <div style={estiloDescripcion}>{frases.length==0 ? "Cargando frases... ":frase.description}</div>
   </div>
 );*/
}
