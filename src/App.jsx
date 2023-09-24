import { useState } from 'react'
import './assets/style.scss'

function App() {

  const workGradient = 'linear-gradient(90deg, #F78CA0 0%, #F9748F 20.31%, #FD868C 66.67%, #FE9A8B 100%)'
  const chillGradient = 'linear-gradient(180deg, #48C6EF 0%, #6F86D6 100%)'



 let [timer, setTimer] = useState('25:00')
 

  let isRun = true
  let [available,setAvailable] = useState(false)

  let curTime = timer.split(':')
  curTime = curTime.map((el)=>{
    return parseInt(el)
  })

  function startTimer() {
    setAvailable(true)
    const myInterval = setInterval(()=>{
      if(isRun) {
        curTime[1] = curTime[1]-1
        if(curTime[1]<0) {
          curTime[1] = 59
          curTime[0] = curTime[0] - 1
        }
        if(curTime[0]<0) {
          setTimer('0:0')
          clearInterval(myInterval)
          return true
        }
        let newTime = curTime.join(':')
        console.log(newTime)
        setTimer(newTime)
      }
    },1)
  }


  return (
    <>
      <div className="container" style={{background: workGradient}}>
        <div className="timer">
          <h1>{timer}</h1>
        </div>
        <div className="buttons">
          <button disabled={available} onClick={startTimer}>Start</button>
        </div>
      </div>
    </>
  )
}

export default App
