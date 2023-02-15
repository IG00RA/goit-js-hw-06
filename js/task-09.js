function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanObj = document.querySelector(".color");
const buttonObj = document.querySelector(".change-color");
const bodyObj = document.querySelector("body");
function changeColorFunc() {
  bodyObj.style.backgroundColor = getRandomHexColor();
  spanObj.textContent = getRandomHexColor();
}
buttonObj.addEventListener("click", changeColorFunc);
