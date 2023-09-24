import { useState } from "react";

const Settings = ({settingsVisibility, workInput, setWorkInput, chillInput, setChillInput,setWorkTime,setChillTime,setTimer,pauseTimer}) => {

    
  function settingsWorkTime() {
    setWorkTime(`${workInput}:00`)
    setChillTime(`${chillInput}:00`)
    setTimer(`${workInput}:00`)
    settingsVisibility()
    pauseTimer()
  }

  function workInputHandler(event) {
    setWorkInput(event.target.value)
    if(workInput<=0) {
        setWorkInput(1)
    }
  }

  function chillInputHandler(event) {
    setChillInput(event.target.value)
    if(chillInput<=0) {
        setChillInput(1)
    }
  }

  return (
    <div className="settings">
      <div className="settings-body">
        <h1>Work</h1>
        <input type="number" onChange={workInputHandler} value={workInput}/>
        <h1>Chill</h1>
        <input type="number" onChange={chillInputHandler} value={chillInput}/>
        <div className="buttons">
          <button onClick={settingsVisibility}>Close</button>
          <button onClick={settingsWorkTime}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
