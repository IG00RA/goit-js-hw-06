const categoryEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryEl.length}`);
if (categoryEl.length > 0) {
    categoryEl.forEach((el) => {
        const h2 = el.querySelector("h2");
        if (h2) {
            console.log(`Category: ${h2.textContent}`);
        }
        console.log(`Elements: ${el.querySelectorAll("li").length}`);
    });
}
else {
    console.log("No categories found.");
}
