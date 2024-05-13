const animateStateCheck = document.getElementById("animation-switch"),
    hideStateCheck = document.getElementById("hide-switch");

// FIXME: creates infinate amout of error instead of rotating circle bar
function animateCircleBar() {
    let rotateValue = 0;

    setInterval(()=>{
        rotateValue++;
        circularProgress.style.transform = `rotate(${rotateValue}deg)`;
        console.log(rotateValue);

        if(!animateStateCheck.checked) {
            clearInterval(rotating);
        }
    }, 10);
}

function hideCircleBar() {
    if (hideStateCheck.checked) {
        circularProgress.style.display = "none";
    }
    else {
        circularProgress.style.display = "block";
    }
}

let circularProgress = document.getElementById("progress-circle"),
    progressValue = document.getElementById("value");

let progressStartValue = 0,
    progressEndValue = document.getElementById("value").value,
    speed = 75;

// progressValue.textContent = progressEndValue;

let progress = setInterval(() => {
    progressStartValue++;

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
    circularProgress.style.background = `conic-gradient(teal ${progressStartValue * 3.6}deg, transparent 0deg)`;
}, speed);