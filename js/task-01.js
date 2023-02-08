const categoryEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryEl.length}`);

const tittleEl = document.querySelectorAll("h2");

tittleEl.forEach((el, i) => {
  console.log(`Category: ${el.textContent}`);
  console.log(`Elements: ${el.nextSibling.nextSibling.children.length}`);
});
