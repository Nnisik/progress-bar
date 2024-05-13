const animateStateCheck = document.getElementById("animation-switch"),
    hideStateCheck = document.getElementById("hide-switch");

let circularProgress = document.getElementById("progress-circle"),
    progressValue = document.getElementById("value");

let progressStartValue = 0,
    progressEndValue,
    speed = 75;

window.onload = () => {
    progressEndValue = 90;
    let progress = setInterval(() => {
        progressStartValue++;
    
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
        circularProgress.style.background = `conic-gradient(teal ${progressStartValue * 3.6}deg, transparent 0deg)`;
    }, speed);
}

animateStateCheck.addEventListener('change', function() {
    if (this.checked) {
        // Animation is turned off
        console.log("Animation is turned off.");
        // Remove animation related properties
        circularProgress.style.transition = "none";
        circularProgress.setAttribute("class", "circular-progress");
    } else {
        // Animation is turned on
        console.log("Animation is turned on.");
        // Add animation related properties
        circularProgress.style.transition = `all ${speed}ms linear`;
        circularProgress.removeAttribute("class", "circular-progress");
    }
});

