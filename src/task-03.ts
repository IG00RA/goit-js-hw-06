const images: {
  url: string;
  alt: string;
}[] = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulEl: HTMLElement | null = document.querySelector(".gallery");
const imgEl: string = images
  .map(
    (image) =>
      `<li><img src="${image.url}" alt="${image.alt}" width="350px" height="250px"/></li>`
  )
  .join("");
if (ulEl) {
  ulEl.style.display = "flex";
  ulEl.style.backgroundColor = "coral";
  ulEl.style.gap = "30px";
  ulEl.insertAdjacentHTML("beforeend", imgEl);
}