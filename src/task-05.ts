const inputElem: HTMLElement | null = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", inputFunc);

function inputFunc(event) {
  spanElem.textContent = event.currentTarget.value;
  if (spanElem.textContent === "") {
    spanElem.textContent = "Anonymous";
  }
}
