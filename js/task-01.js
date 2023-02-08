const ulEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${ulEl.length}`);

const tittleEl = document.querySelectorAll("h2").value;

console.log(tittleEl);

tittleEl.forEach((el, i) => {
  return console.log(`Індекс ${i}, значення ${el}`);
});
