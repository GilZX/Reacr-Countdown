
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

function App() {
  

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={mainLogo} className="logo react" alt="React logo" />
        </a>
        <PlayerSong/>
      </div>
    
      <div className="card">
        <h1>Sap CountDown  <Frase></Frase> </h1> 
        <Contador label="general" tipo="reversa" fecha="01/06/2025" />
        <Contador  label="incompetencia" tipo="progresivo" fecha="01/06/2025" />
        <Contador label="FACEGI" tipo="reversa" fecha="01/07/2025" />
        <Contador label="LABOCEGI" tipo="reversa" fecha="01/09/2025" />
        <Contador label="CEGI" tipo="reversa" fecha="01/11/2025" />
      </div>
      
     
    </>
  )
}

export default App
