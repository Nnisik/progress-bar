export default function fillBar(progressEndValue) {
    //   console.log("filling bar");
    let progressStartValue = 0;
    let progress = setInterval(() => {
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
        document.getElementById("value").addEventListener('keyup', () => {
            clearInterval(progress);
        })
        document.getElementById("progress-circle").style.background = `conic-gradient(#0A67A3 ${progressStartValue * 3.6}deg, transparent 0deg)`;
        progressStartValue++;
    }, 50);
}
 