function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanElem = document.querySelector(".color");
const buttonElem = document.querySelector(".change-color");
const bodyElem = document.querySelector("body");
function changeColorFunc() {
    const color = randomHexColor();
    if (bodyElem) {
        bodyElem.style.backgroundColor = color;
    }
    if (spanElem) {
        spanElem.textContent = color;
    }
}
buttonElem === null || buttonElem === void 0 ? void 0 : buttonElem.addEventListener("click", changeColorFunc);
