const inputElem = document.querySelector("#validation-input");
const maxLength = inputElem.dataset.length;
inputElem.addEventListener("blur", submitFunc);
function submitFunc() {
  if (inputElem.value.length > maxLength) {
    inputElem.classList.remove("valid");
    return inputElem.classList.add("invalid");
  }
  inputElem.classList.remove("invalid");
  inputElem.classList.add("valid");
}
