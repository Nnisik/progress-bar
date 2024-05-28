export default function animateProgressBar() {
    if (animateStateCheck.checked) {
        circularProgress.style.animationPlayState = 'running';
    }
    else {
        circularProgress.style.animationPlayState = 'paused';
    }
}