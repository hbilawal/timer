let timer;
let totalSeconds = 0;
let isPaused = false;

function updateDisplay() {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  document.getElementById('time').textContent =
    `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
  if (!timer) {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    totalSeconds = minutes * 60 + seconds;
  }

  if (totalSeconds <= 0) return;

  isPaused = false;

  timer = setInterval(() => {
    if (!isPaused) {
      if (totalSeconds <= 0) {
        clearInterval(timer);
        timer = null;
        alert("Time's up!");
      } else {
        totalSeconds--;
        updateDisplay();
      }
    }
  }, 1000);

  updateDisplay();
}

function pauseTimer() {
  isPaused = true;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  totalSeconds = 0;
  document.getElementById('time').textContent = '00:00';
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
}
