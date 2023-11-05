const inputElem = document.querySelector(
  "input[type='number']"
) as HTMLInputElement | null;
const createElem = document.querySelector(
  "button[data-create]"
) as HTMLButtonElement | null;
const destroyElem = document.querySelector(
  "button[data-destroy]"
) as HTMLButtonElement | null;
const divElem = document.querySelector("#boxes") as HTMLDivElement | null;

createElem?.addEventListener("click", createBoxes);
inputElem?.addEventListener("input", createBoxes);
destroyElem?.addEventListener("click", destroyBoxes);

function createBoxes(): void {
  const amount = Number(inputElem?.value);
  destroyBoxes();

  if (divElem) {
    const boxes: HTMLDivElement[] = [];
    let minSize = 30;

    for (let i = 0; i < amount; i += 1) {
      minSize += 10;
      const divEl = document.createElement("div");
      divEl.style.width = `${minSize}px`;
      divEl.style.height = `${minSize}px`;
      divEl.style.backgroundColor = getRandomHexColor();
      boxes.push(divEl);
    }

    divElem.append(...boxes);
  }
}

function destroyBoxes() {
  if (divElem) {
    divElem.innerHTML = "";
  }
}

function getRandomHexColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
