const inputObj = document.querySelector("#validation-input");
const inputLength = inputObj.attributes[2].value;
inputObj.addEventListener("blur", submitFunc);
function submitFunc() {
  if (inputObj.value.length > inputLength) {
    return inputObj.classList.add("invalid");
  }
  inputObj.classList.add("valid");
}
