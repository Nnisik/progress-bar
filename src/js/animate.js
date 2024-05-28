const animateStateCheck = document.getElementById("animation-switch");

animateStateCheck.addEventListener('change', () => {
    if (animateStateCheck.checked) {
        circularProgress.style.animationPlayState = 'running';
    }
    else {
        circularProgress.style.animationPlayState = 'paused';
    }
});