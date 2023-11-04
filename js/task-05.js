const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
if (inputEl) {
    inputEl.addEventListener("input", inputFunc);
}
function inputFunc(event) {
    if (spanEl && event.currentTarget instanceof HTMLInputElement) {
        spanEl.textContent = event.currentTarget.value;
        if (spanEl.textContent === "") {
            spanEl.textContent = "Anonymous";
        }
    }
}
