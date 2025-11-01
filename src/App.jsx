import { useState, useEffect } from 'react'
import './App.css'

import Button from './components/button'

function App() {

  const [cycle, setCycle] = useState('pomodoro');

  return (
    <>

    <div className='container'>

      <div class="timer">

        <div>

          <h1>Pomodoro 2025.2</h1>

          <Button onClick={() => {setCycle('pomodoro')}} isLink isActive={cycle == 'pomodoro'} label="Pomodoro" />
          <Button onClick={() => {setCycle('curta')}} isLink isActive={cycle == 'curta'} label="Pausa curta" />
          <Button onClick={() => {setCycle('longo')}} isLink isActive={cycle == 'longo'} label="Pausa Longa"/>

        </div>

        <div class="counter">
          <div id="clock">00:00</div>
          <div class="cicle">#1 Pomodoro</div>
        </div>

        <div>
          <button id="iniciar" class="btn-link btn-large btn-active">Iniciar</button>
          <button id="pausar" class="btn-link btn-large btn-active hidden">Parar</button>
          <button id="finalizar" class="btn-link">Finalizar</button>
        </div>
        
      </div>

    </div>

    </>
  )
}

export default App
