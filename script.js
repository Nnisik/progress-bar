const valueInput = document.getElementById("value"),
    animateStateCheck = document.getElementById("animation-switch"),
    hideStateCheck = document.getElementById("hide-switch");

let circularProgress = document.getElementById("progress-circle"),
    progressValue = document.getElementById("value");

let progressStartValue = 0,
    progressEndValue,
    speed = 50;

function fillBar(progressEndValue) {
    //   console.log("filling bar");
    let progressStartValue = 0;
    let progress = setInterval(() => {
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
        valueInput.addEventListener('keyup', () => {
            clearInterval(progress);
        })
        circularProgress.style.background = `conic-gradient(teal ${progressStartValue * 3.6}deg, transparent 0deg)`;
        progressStartValue++;
    }, speed);
}

window.onload = () => {
    fillBar(30);
    
    circularProgress.style.animationPlayState = circularProgress.checked ? 'paused' : 'running';
}

valueInput.addEventListener('keyup', () => {
    fillBar(valueInput.value);
})

// FIXME: doesn't start animation
animateStateCheck.addEventListener('change', () => {
    if (animateStateCheck.checked) {
        circularProgress.style.animationPlayState = 'running';
    }
    else {
        circularProgress.style.animationPlayState = 'paused';
    }
});

// FIXME: doesn't hide circle
hideStateCheck.addEventListener('change', () => {
    if (hideStateCheck.checked) {
        circularProgress.style.display = "none";
    } else {
        circularProgress.style.display = "block";
    }
});
