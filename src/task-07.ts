const rangeElem: HTMLInputElement | null =
  document.querySelector("#font-size-control");
const textElem: HTMLSpanElement | null = document.querySelector("#text");
if (rangeElem) {
  rangeElem.addEventListener("input", fontChange);
}

function fontChange(): void {
  if (textElem && rangeElem) {
    textElem.style.fontSize = `${rangeElem.value}px`;
  }
}
