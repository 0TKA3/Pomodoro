import { useState } from "react";

const Settings = ({settingsVisibility}) => {
    
     let [workInput, setWorkInput] = useState('')
     let [chillInput, setChillInput] = useState('')

    
  function settingsWorkTime() {
    console.log('hi!')
    settingsVisibility()
  }

  function workInputHandler(event) {
    setWorkInput(event.target.value)
    if(workInput<=0) {
        setWorkInput(0)
    }
  }

  function chillInputHandler(event) {
    setChillInput(event.target.value)
    if(chillInput<=0) {
        setChillInput(0)
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
