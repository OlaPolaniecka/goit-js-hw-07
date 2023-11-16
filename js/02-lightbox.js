import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

for (let item of galleryItems) {
  let gallery__element = document.createElement("li");
  let gallery__link = document.createElement("a");
  let gallery__image = document.createElement("img");
  gallery__element.classList.add("gallery__element");
  gallery__link.classList.add("gallery__item");
  gallery__image.classList.add("gallery__image");
  gallery__link.setAttribute("href", item.original);
  gallery__image.setAttribute("src", item.preview);
  gallery__image.setAttribute("data-source", item.original);
  gallery__image.setAttribute("alt", item.description);
  gallery__link.append(gallery__image);
  gallery__element.append(gallery__link);
  gallery.append(gallery__element);
}

lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
