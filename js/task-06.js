const inputObj = document.querySelector("#validation-input");
const maxLength = inputObj.dataset.length;
inputObj.addEventListener("blur", submitFunc);
function submitFunc() {
  if (inputObj.value.length > maxLength) {
    inputObj.classList.remove("valid");
    return inputObj.classList.add("invalid");
  }
  inputObj.classList.remove("invalid");
  inputObj.classList.add("valid");
}
