import animationPlayState from "./src/js/animate.js";
import fillBar from "./src/js/circle.js";
import hideProgressBar from "./src/js/hide.js";

window.onload = () => {
  circularProgress.style.animationPlayState = !circularProgress.checked
    ? "paused"
    : "running";
};

const animateStateCheck = document.getElementById("animation-switch"),
  valueInput = document.getElementById("value"),
  hideStateCheck = document.getElementById("hide-switch");

let circularProgress = document.getElementById("progress-circle");

document.addEventListener("DOMContentLoaded", () => {
  animateStateCheck.addEventListener("change", () => {
    animationPlayState();
  });

  valueInput.addEventListener("keyup", () => {
    fillBar(valueInput.value);
  });

  hideStateCheck.addEventListener("change", () => {
    hideProgressBar();
  });
});
