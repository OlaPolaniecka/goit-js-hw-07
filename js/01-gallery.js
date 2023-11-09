import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

let modal;
const closeLightBox = (event) => {
  if (event.key === "Escape") {
    modal.close();
    gallery.removeEventListener("keyup", closeLightBox);
  }
};

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    modal = basicLightbox.create(`<img src=${event.target.dataset.source}>
      `);
    modal.show();
    gallery.addEventListener("keyup", closeLightBox);
  }
});

for (let item of galleryItems) {
  let gallery__item = document.createElement("div");
  let gallery__link = document.createElement("a");
  let gallery__image = document.createElement("img");
  gallery__item.classList.add("gallery__item");
  gallery__link.classList.add("gallery__link");
  gallery__image.classList.add("gallery__image");
  gallery__link.setAttribute("href", item.original);
  gallery__image.setAttribute("src", item.preview);
  gallery__image.setAttribute("data-source", item.original);
  gallery__image.setAttribute("alt", item.description);
  gallery__link.append(gallery__image);
  gallery__item.append(gallery__link);
  gallery.append(gallery__item);
}
