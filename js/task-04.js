const decrBtnElem = document.querySelector('[data-action="decrement"]');
const incrBtnElem = document.querySelector('[data-action="increment"]');
const valueElem = document.querySelector("#value");
let counterValue = 0;
function decrement() {
    counterValue -= 1;
    if (valueElem) {
        valueElem.textContent = counterValue.toString();
    }
}
function increment() {
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
