import { galleryItems } from "./gallery-items.js";

//! Change code below this line

const galleryContainer = document.querySelector(".gallery");
const images = createImageGallery(galleryItems);

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}" style= "box-shadow: none;" style="border-radius: 4px;">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</div>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", images);

const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});