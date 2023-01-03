import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
const galleryMarkup = createItemsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>
      </div>
     
    `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionType: "alt",
});
