const inputObj = document.querySelector("#font-size-control");
const textObj = document.querySelector("#text");
inputObj.addEventListener("input", fontChenge);
function fontChenge() {
  textObj.style.fontSize = `${inputObj.value}px`;
}
