const valueInput = document.getElementById("value");

let circularProgress = document.getElementById("progress-circle"),
    progressValue = document.getElementById("value");

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
        circularProgress.style.background = `conic-gradient(#0A67A3 ${progressStartValue * 3.6}deg, transparent 0deg)`;
        progressStartValue++;
    }, 50);
}

valueInput.addEventListener('keyup', () => {
    fillBar(valueInput.value);
})
 