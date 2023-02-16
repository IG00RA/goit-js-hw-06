const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", inputFunc);
inputElem.addEventListener("blur", () => {
  if (spanElem.textContent === "") {
    spanElem.textContent = "Anonymous";
  }
});

function inputFunc(event) {
  spanElem.textContent = event.currentTarget.value;
}
