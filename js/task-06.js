const inputObj = document.querySelector("#validation-input");
const maxLength = inputObj.attributes[2].value;
inputObj.addEventListener("blur", submitFunc);
function submitFunc() {
  if (inputObj.value.length > maxLength) {
    inputObj.classList.remove("valid");
    return inputObj.classList.add("invalid");
  }
  inputObj.classList.remove("invalid");
  inputObj.classList.add("valid");
}
