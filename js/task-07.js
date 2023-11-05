const rangeElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");
if (rangeElem) {
    rangeElem.addEventListener("input", fontChange);
}
function fontChange() {
    if (textElem && rangeElem) {
        textElem.style.fontSize = `${rangeElem.value}px`;
    }
}
