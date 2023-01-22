const input = document.querySelector("input");
const log = document.getElementById("value");

document.addEventListener("input", updateText);
function updateText(e) {
    log.textContent = e.target.value;
}