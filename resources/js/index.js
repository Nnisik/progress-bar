window.onload = () => {
    fillBar(90);
    circularProgress.style.animationPlayState = !circularProgress.checked ? 'paused' : 'running';
}