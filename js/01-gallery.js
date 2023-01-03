import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryWrap = document.querySelector(".gallery");
const galleryMarkup = creatGalleryImage(galleryItems);
galleryWrap.insertAdjacentHTML("beforeend", galleryMarkup);

function creatGalleryImage(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`;
    })
    .join("");
  return markup;
}

galleryWrap.addEventListener("click", onGalleryWrapClick);
function onGalleryWrapClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) return;
  const source = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
}
