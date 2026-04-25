const INITIAL_TIME = 60;
let timeLeft = INITIAL_TIME;
let timerId = null;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');

function formatTime(seconds){
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2,'0')}`;
}
function updateTimerUI() {
    timerDisplay.textContent = formatTime(timeLeft);

    if (timeLeft < 15){
        timerDisplay.classList.add('warning');
    } else {
        timerDisplay.classList.remove('warning');
    }
}
function startTimerLogic() {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;

    if (!timerId) {
        timerId = setInterval(() => {
            timeLeft--;
            updateTimerUI();

            if (timeLeft <= 0) {
                clearInterval(timerId);
                timerId = null;
                setTimeout(() => {
                    alert("Take a short break!");
                resetTimer();
                },100);
            }
        }, 1000);
    }
}
startBtn.addEventListener('click', startTimerLogic);

pauseBtn.addEventListener('click', () => {
    if(timerId) {
        clearInterval(timerId);
        timerId = null;
        pauseBtn.textContent = "Resume";
    } else {
        pauseBtn.textContent = "Pause";
        startTimerLogic();
    }
});

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = INITIAL_TIME;
    updateTimerUI();

    startBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
    pauseBtn.textContent = "Pause";
}

stopBtn.addEventListener('click', resetTimer);

updateTimerUI();