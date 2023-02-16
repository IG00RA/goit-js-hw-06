const decrBtnElem = document.querySelector('[data-action="decrement"]');
const incrBtnElem = document.querySelector('[data-action="increment"]');
const valueElem = document.querySelector("#value");
let counterValue = 0;
function decrement() {
  counterValue -= 1;
  return (valueElem.textContent = counterValue);
}
function increment() {
  counterValue += 1;
  return (valueElem.textContent = counterValue);
}
decrBtnElem.addEventListener("click", decrement);
incrBtnElem.addEventListener("click", increment);
