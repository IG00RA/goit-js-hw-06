function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanElem = document.querySelector(".color");
const buttonElem = document.querySelector(".change-color");
const bodyElem = document.querySelector("body");
function changeColorFunc() {
  const color = getRandomHexColor();
  bodyElem.style.backgroundColor = color;
  spanElem.textContent = color;
}
buttonElem.addEventListener("click", changeColorFunc);
