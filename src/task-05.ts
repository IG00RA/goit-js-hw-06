const inputEl: HTMLElement | null = document.querySelector("#name-input");
const spanEl: HTMLElement | null = document.querySelector("#name-output");

if (inputEl) {
  inputEl.addEventListener("input", inputFunc);
}

function inputFunc(event: InputEvent): void {
  if (spanEl && event.currentTarget instanceof HTMLInputElement) {
    spanEl.textContent = event.currentTarget.value;
    if (spanEl.textContent === "") {
      spanEl.textContent = "Anonymous";
    }
  }
}
