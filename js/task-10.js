function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputObj = document.querySelector("input[type='number']");
const createObj = document.querySelector("button[data-create]");
const destroyObj = document.querySelector("button[data-destroy]");
const divObj = document.querySelector("#boxes");
let amount = 1;
function inputFunction() {
  amount = inputObj.value;
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
    divObj.append(...boxes);
  }
}
createObj.addEventListener("click", createFunction);
inputObj.addEventListener("input", inputFunction);
destroyObj.addEventListener("click", destroyFunction);

function createFunction() {
  createBoxes(amount);
}
function destroyFunction() {
  divObj.innerHTML = "";
}
