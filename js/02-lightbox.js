import simpleLightbox from "simplelightbox";
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
    modal = new simpleLightbox(".gallery .gallery__item", {
      captionsData: "alt",
      captionDelay: 250,
    });
    modal.open();
    gallery.addEventListener("keyup", closeLightBox);
  }
});

for (let item of galleryItems) {
  let gallery__item = document.createElement("a");
  let gallery__image = document.createElement("img");
  gallery__item.classList.add("gallery__item");
  gallery__image.classList.add("gallery__image");
  gallery__item.setAttribute("href", item.original);
  gallery__image.setAttribute("src", item.preview);
  gallery__image.setAttribute("data-source", item.original);
  gallery__image.setAttribute("alt", item.description);
  gallery__item.append(gallery__image);
  gallery.append(gallery__item);
}
