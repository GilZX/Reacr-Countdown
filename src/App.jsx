
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import mainLogo from './assets/logo-2.png'
import './App.css'
import { CountDown } from './Components/CountDown'
import { CountDownV2 } from './Components/CountDownV2'

function App() {
  

  return (
    <>
      <div>
       
        <a href="https://react.dev" target="_blank">
          <img src={mainLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sap CountDown</h1>
      <div className="card">
        <CountDownV2/>
        <p>
          ....Comming soon
        </p>
      </div>
     
    </>
  )
}

export default App
