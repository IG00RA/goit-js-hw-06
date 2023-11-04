const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const ulElement = document.querySelector("#ingredients");
if (ulElement) {
    ingredients.forEach((ingredientItem) => {
        const liEl = document.createElement("li");
        liEl.textContent = ingredientItem;
        liEl.classList.add("item");
        ulElement.appendChild(liEl);
    });
}
