const inputElem = document.querySelector("input[type='number']");
const createElem = document.querySelector("button[data-create]");
const destroyElem = document.querySelector("button[data-destroy]");
const divElem = document.querySelector("#boxes");
createElem === null || createElem === void 0 ? void 0 : createElem.addEventListener("click", createBoxes);
inputElem === null || inputElem === void 0 ? void 0 : inputElem.addEventListener("input", createBoxes);
destroyElem === null || destroyElem === void 0 ? void 0 : destroyElem.addEventListener("click", destroyBoxes);
function createBoxes() {
    const amount = Number(inputElem === null || inputElem === void 0 ? void 0 : inputElem.value);
    destroyBoxes();
    if (divElem) {
        const boxes = [];
        let minSize = 30;
        for (let i = 0; i < amount; i += 1) {
            minSize += 10;
            const divEl = document.createElement("div");
            divEl.style.width = `${minSize}px`;
            divEl.style.height = `${minSize}px`;
            divEl.style.backgroundColor = getRandomHexColor();
            boxes.push(divEl);
        }
        divElem.append(...boxes);
    }
}
function destroyBoxes() {
    if (divElem) {
        divElem.innerHTML = "";
    }
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
