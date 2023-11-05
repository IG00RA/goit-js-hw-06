function randomHexColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanElem: HTMLSpanElement | null = document.querySelector(".color");
const buttonElem: HTMLButtonElement | null =
  document.querySelector(".change-color");
const bodyElem: HTMLBodyElement | null = document.querySelector("body");
function changeColorFunc(): void {
  const color: string = randomHexColor();
  if (bodyElem) {
    bodyElem.style.backgroundColor = color;
  }
  if (spanElem) {
    spanElem.textContent = color;
  }
}
buttonElem?.addEventListener("click", changeColorFunc);
