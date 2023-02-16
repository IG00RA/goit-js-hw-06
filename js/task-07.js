const inputElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");
inputElem.addEventListener("input", fontChenge);
function fontChenge() {
  textElem.style.fontSize = `${inputElem.value}px`;
}
