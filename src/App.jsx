import { useRef, useState } from "react";
import useSound from "use-sound";
import "./assets/style.scss";
import bell from "./assets/bell.mp3";
import singleBell from "./assets/singleBell.mp3";
import settingsIcon from "./assets/settings.svg";
import Settings from "./assets/Settings";

function App() {
  const [playBell] = useSound(bell);
  const [singleBellSound] = useSound(singleBell);
  let [showSetting, setShowSettings] = useState(false);

      
  let [workInput, setWorkInput] = useState('25')
  let [chillInput, setChillInput] = useState('5')


  let [workTime, setWorkTime] = useState('25:00')
  let [chillTime, setChillTime] = useState('5:00')


  function settingsVisibility() {
    setShowSettings(!showSetting);
  }

  const chillGradient =
    "linear-gradient(90deg, #F78CA0 0%, #F9748F 20.31%, #FD868C 66.67%, #FE9A8B 100%)";
  const workGradient = "linear-gradient(180deg, #48C6EF 0%, #6F86D6 100%)";
  let [currentColor, setCurrentColor] = useState(workGradient);

  let [timer, setTimer] = useState(workTime);

  let isRun = useRef(true);
  let [available, setAvailable] = useState(false);

  let curTime = timer.split(":");
  curTime = curTime.map((el) => {
    return parseInt(el);
  });

  let switcher = useRef(true);

  function startTimer() {
    singleBellSound();
    setAvailable(true);
    isRun.current = true;
    const myInterval = setInterval(() => {
      if (isRun.current === true) {
        curTime[1] = curTime[1] - 1;
        if (curTime[1] < 0) {
          curTime[1] = 59;
          curTime[0] = curTime[0] - 1;
        }
        if (curTime[0] < 0) {
          clearInterval(myInterval);
          if (currentColor == workGradient) {
            setCurrentColor(chillGradient);
          } else {
            setCurrentColor(workGradient);
          }
          if (switcher.current === false) {
            setTimer(workTime);
          } else {
            setTimer(chillTime);
          }
          switcher.current
            ? (switcher.current = false)
            : (switcher.current = true);
          console.log(switcher.current);
          setAvailable(false);
          playBell();
          return true;
        }
        let newTime = curTime.join(":");
        setTimer(newTime);
      } else {
        clearInterval(myInterval);
      }
    }, 1);
  }

  function pauseTimer() {
    setAvailable(false);
    isRun.current = false;
    console.log("pause!");
  }

  return (
    <>
      <div className="container" style={{ background: currentColor }}>
        <div className="timer">
          <h1>{timer}</h1>
        </div>
        <div className="buttons">
          <button disabled={available} onClick={startTimer}>
            Start
          </button>
          <button onClick={pauseTimer}>Pause</button>
        </div>
        <div className="setting">
          <button className="settings-button" onClick={settingsVisibility}>
            <img src={settingsIcon} alt="settings" />
          </button>
        </div>
        {showSetting ? (
          <Settings settingsVisibility={settingsVisibility} workInput={workInput} setWorkInput={setWorkInput} chillInput={chillInput} setChillInput={setChillInput} setWorkTime={setWorkTime} setChillTime={setChillTime} setTimer={setTimer} pauseTimer={pauseTimer}></Settings>
        ) : (
          true
        )}
      </div>
    </>
  );
}

export default App;
