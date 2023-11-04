const ingredients: string[] = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement: HTMLElement | null = document.querySelector("#ingredients");
if (ulElement) {
  ingredients.forEach((ingredientItem: string) => {
    const liEl: HTMLElement = document.createElement("li");
    liEl.textContent = ingredientItem;
    liEl.classList.add("item");
    ulElement.appendChild(liEl);
  });
}
