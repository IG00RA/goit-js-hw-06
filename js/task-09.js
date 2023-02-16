function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanElem = document.querySelector(".color");
const buttonElem = document.querySelector(".change-color");
const bodyElem = document.querySelector("body");
function changeColorFunc() {
  bodyElem.style.backgroundColor = getRandomHexColor();
  spanElem.textContent = getRandomHexColor();
}
buttonElem.addEventListener("click", changeColorFunc);
