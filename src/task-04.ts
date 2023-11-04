const decrBtnElem: HTMLElement | null = document.querySelector(
  '[data-action="decrement"]'
);
const incrBtnElem: HTMLElement | null = document.querySelector(
  '[data-action="increment"]'
);
const valueElem: HTMLElement | null = document.querySelector("#value");
let counterValue: number = 0;
function decrement(): void {
  counterValue -= 1;
  if (valueElem) {
    valueElem.textContent = counterValue.toString();
  }
}
function increment(): void {
  counterValue += 1;
  if (valueElem) {
    valueElem.textContent = counterValue.toString();
  }
}
if (decrBtnElem) {
  decrBtnElem.addEventListener("click", decrement);
}
if (incrBtnElem) {
  incrBtnElem.addEventListener("click", increment);
}
