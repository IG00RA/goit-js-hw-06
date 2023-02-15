const decrBtnObj = document.querySelector('[data-action="decrement"]');
const incrBtnObj = document.querySelector('[data-action="increment"]');
const valueObj = document.querySelector("#value");
let counterValue = 0;
function decrement() {
  counterValue -= 1;
  return (valueObj.textContent = counterValue);
}
function increment() {
  counterValue += 1;
  return (valueObj.textContent = counterValue);
}
decrBtnObj.addEventListener("click", decrement);
incrBtnObj.addEventListener("click", increment);
