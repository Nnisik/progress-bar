let circularProgress = document.getElementById("progress-circle"),
    progressValue = document.getElementById("value");

let progressStartValue = 0,
    progressEndValue = 50,
    speed = 75;

progressValue.textContent = progressEndValue;

let progress = setInterval(() => {
    progressStartValue++;

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
    circularProgress.style.background = `conic-gradient(teal ${progressStartValue * 3.6}deg, transparent 0deg)`;
}, speed);