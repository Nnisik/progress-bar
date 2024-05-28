export default function hideProgressBar() {
  if (document.getElementById("hide-switch").checked) {
    document.getElementById("progress-circle").style.visibility = "hidden";
  } else {
    document.getElementById("progress-circle").style.visibility = "visible";
  }
}
