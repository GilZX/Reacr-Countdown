
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import mainLogo from './assets/logo-2.png'
import './App.css'
import { Contador } from './Components/Contador'
import { Frase } from './Components/Frase'
import writerLogo from './assets/writer.png'
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import { PlayerSong } from './Components/PlayerSong'
import Grid from '@mui/material/Grid';

function App() {


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={mainLogo} className="logo react" alt="React logo" />
        </a>
        <PlayerSong />
      </div>
      <div className="card">
        <h1>Sap CountDown  <Frase></Frase> </h1>
      </div>

      <div className="card">


      </div>

      <Grid container spacing={2}>
        <Grid size={12}>
          <Contador label="GENERAL" tipo="reversa" fecha="01/06/2025" color_style='#1976d2' />
        </Grid>
        <Grid size={6}>
          <Contador label="IMCONPETENCIA" tipo="progresivo" fecha="01/06/2025" color_style='red' />
        </Grid>
        <Grid size={6}>
          <Contador label="FACEGI" tipo="reversa" fecha="01/07/2025" color_style='#808000' />
        </Grid>
        <Grid size={6}>
          <Contador label="LABOCEGI" tipo="reversa" fecha="01/09/2025" color_style='#9370DB' />
        </Grid>
        <Grid size={6}>
          <Contador label="CEGI" tipo="reversa" fecha="01/11/2025" />
        </Grid>
        <Grid size={12}>
          <Contador label="DBA" tipo="PROGRESIVO" fecha="02/06/2025"  color_style='#808000'/>
        </Grid>
      </Grid>


    </>
  )
}

export default App
