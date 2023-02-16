function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputElem = document.querySelector("input[type='number']");
const createElem = document.querySelector("button[data-create]");
const destroyElem = document.querySelector("button[data-destroy]");
const divElem = document.querySelector("#boxes");
let amount = 0;
function inputFunction() {
  amount = inputElem.value;
}
function createBoxes(amount) {
  destroyFunction();
  const boxes = [];
  let minSize = 30;
  for (let i = 0; i < amount; i += 1) {
    minSize += 10;
    const divEl = document.createElement("div");
    divEl.style.width = `${minSize}px`;
    divEl.style.height = `${minSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxes.push(divEl);
    divElem.append(...boxes);
  }
}
createElem.addEventListener("click", createFunction);
inputElem.addEventListener("input", inputFunction);
destroyElem.addEventListener("click", destroyFunction);

function createFunction() {
  createBoxes(amount);
}
function destroyFunction() {
  divElem.innerHTML = "";
}
