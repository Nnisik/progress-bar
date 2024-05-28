export default function hideProgressBar() {
  if (document.getElementById("hide-switch").checked) {
    document.getElementById("progress-circle").style.display = "none";
  } else {
    document.getElementById("progress-circle").style.display = "block";
  }
}
