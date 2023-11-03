const inputElem = document.querySelector("#validation-input");
const maxLength = inputElem.dataset.length;
inputElem.addEventListener("blur", submitFunc);
function submitFunc() {
  if (inputElem.value.length === Number(maxLength)) {
    inputElem.classList.remove("invalid");
    return inputElem.classList.add("valid");
  }
  inputElem.classList.remove("valid");
  inputElem.classList.add("invalid");
}
