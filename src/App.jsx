import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import mainLogo from './assets/logo-2.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
        <a href="https://react.dev" target="_blank">
          <img src={mainLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sap CountDown</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count HH:MM:SS 
        </button>
        <p>
          ....Comming soon
        </p>
      </div>
     
    </>
  )
}

export default App
