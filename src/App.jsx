
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import mainLogo from './assets/logo-2.png'
import './App.css'
import { CountDown } from './Components/CountDown'
import { CountDownV2 } from './Components/CountDownV2'
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
        <h1>Sap CountDown</h1>
        <CountDownV2/>
        <Frase></Frase>
      </div>
      
     
    </>
  )
}

export default App
