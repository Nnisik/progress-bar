const hideStateCheck = document.getElementById("hide-switch");

hideStateCheck.addEventListener('change', () => {
    if (hideStateCheck.checked) {
        circularProgress.style.display = "none";
    } else {
        circularProgress.style.display = "block";
    }
});