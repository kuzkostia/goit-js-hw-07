import { galleryItems } from "./gallery-items.js";

//! Change code below this line

const galleryContainer = document.querySelector(".gallery");
const images = createImageGallery(galleryItems);

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return (
        `<div class="gallery__item">
          <a class="gallery__link" href=${original}>
            <img
              class="gallery__image"
              src=${preview}
              data-source=${original}
              alt=${description}
            />
          </a>
        </div>`
      );
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", images);
galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
});
