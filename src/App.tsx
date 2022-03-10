
import { useState } from 'react';
import './App.css'
import { ButtonContainer } from './ButtonCotainer';
import { Timer } from './TimerContainer';

function App() {
  const [currentTime, setCurrentTime] = useState<number[]>([0, 0, 0]);
  const [timerRunning, setRunning] = useState(false);
  const [currentBtnClass, setBtnClass] = useState("btn-nonclick");
  const [timer, setTimer] = useState(0);
  const [timestamp, addTimeStamp] = useState<string[]>([]);

  let min = currentTime[0];
  let seg = currentTime[1];
  let millis = currentTime[2];



  function captureTime() {
    console.log("timer capturando tempo")
    addTimeStamp([...timestamp, (min <= 9 ? "0" + min : min) + ":" + (seg <= 9 ? "0" + seg : seg) + ":" + (millis <= 9 ? "0" + millis : millis)]);
  }
  function resetTimer() {
    clearInterval(timer);
    setCurrentTime([0, 0, 0]);
    min = 0;
    seg = 0;
    millis = 0;

    if (timerRunning) {
      clearInterval(timer);
      setTimer(setInterval(timerRun, 100));
    }
  }
  function resetHistoric() {
    addTimeStamp([]);
  }
  function startTimer() {

    clearInterval(timer);
    setTimer(setInterval(timerRun, 100));
  }
  function stopTimer() {
    clearInterval(timer);
  }
  function timerRun() {
    millis++;

    if (millis > 9) {
      seg++;
      millis = 0;
    }
    if (seg > 59) {
      min++;
      seg = 0;
    }
    //(min <= 9 ? "0" + min : min) + ":" + (seg <= 9 ? "0" + seg : seg) + ":" + (millis <= 9 ? "0" + millis : millis)
    setCurrentTime([min, seg, millis]);
    console.log(currentTime);

  }

  function btnStartStopClick() {
    if (timerRunning) {
      setRunning(false);
      setBtnClass("btn-nonclick");
      stopTimer();
    } else {
      setRunning(true);
      setBtnClass("btn-clicked");
      startTimer();
    }
  }
  return (
    <div>
      <div id="header">
        <h1 id="title"> Ti.ago v2 </h1>
        <h2 id="subtitle"> Time ago </h2>
      </div>
      <Timer timeStamp={timestamp} currentTimeText={(min <= 9 ? "0" + min : min) + ":" + (seg <= 9 ? "0" + seg : seg) + ":" + (millis <= 9 ? "0" + millis : millis)} />

      <ButtonContainer btnAtributes={currentBtnClass} listOfFunctions={[btnStartStopClick, captureTime, resetTimer, resetHistoric]} />

    </div>
  );
}

export default App