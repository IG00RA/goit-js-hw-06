const inputObj = document.querySelector("#name-input");
const spanObj = document.querySelector("#name-output");

inputObj.addEventListener("input", inputFunc);
inputObj.addEventListener("blur", () => {
  if (spanObj.textContent === "") {
    spanObj.textContent = "Anonymous";
  }
});

function inputFunc(event) {
  spanObj.textContent = event.currentTarget.value;
}
