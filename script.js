window.onload = function() {
  let tens = 0;
  let seconds = 0;
  let minutes = 0;
  let laps = [];

  let appendTens = document.querySelector("#tens");
  let appendSeconds = document.querySelector("#seconds");
  let appendMinutes = document.querySelector("#minutes");
  let appendLaps = document.querySelector("#laps");
  
  let startBtn = document.querySelector('#start');
  let stopBtn = document.querySelector('#stop');
  let resetBtn = document.querySelector('#reset');
  let lapBtn = document.querySelector('#lap');
  let Interval;

  const startTimer = () => {
    tens++;

    if (tens < 10) {
      appendTens.innerHTML = `0${tens}`;
    } else {
      appendTens.innerHTML = tens;
    }

    if (tens === 10) {
      tens = 0;
      seconds++;
      appendTens.innerHTML = '00';
      if (seconds < 10) {
        appendSeconds.innerHTML = `0${seconds}`;
      } else {
        appendSeconds.innerHTML = seconds;
      }
    }

    if (seconds === 60) {
      seconds = 0;
      minutes++;
      appendSeconds.innerHTML = '00';
      if (minutes < 10) {
        appendMinutes.innerHTML = `0${minutes}`;
      } else {
        appendMinutes.innerHTML = minutes;
      }
    }
  };

  startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 100);
  };

  stopBtn.onclick = () => {
    clearInterval(Interval);
  };

  resetBtn.onclick = () => {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    laps = [];
    appendTens.innerHTML = '00';
    appendSeconds.innerHTML = '00';
    appendMinutes.innerHTML = '00';
    appendLaps.innerHTML = '';
  };

  lapBtn.onclick = () => {
    const lapTime = `${appendMinutes.innerHTML}:${appendSeconds.innerHTML}.${appendTens.innerHTML}`;
    laps.push(lapTime);
    displayLaps();
  };

  const displayLaps = () => {
    appendLaps.innerHTML = '';
    laps.forEach((lap, index) => {
      const lapItem = document.createElement('div');
      lapItem.innerText = `Lap ${index + 1}: ${lap}`;
      appendLaps.appendChild(lapItem);
    });
  };
};
