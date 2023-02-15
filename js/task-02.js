const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
let elements = [];
ingredients.forEach((ingredientItem) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredientItem;
  liEl.classList.add("item");
  elements.push(liEl);
});
ulEl.append(...elements);
