// ==============================
// Photo gallery images
// ==============================

const galleryImages = [
  "76155643202__FECF9379-58DA-4F6E-9456-EA89A7C4DCD6.JPG",
  "DC824ACF-9AD4-4A10-B6BD-D222AFCBE8BB.JPG",
  "IMG_0083.png",
  "IMG_0149.png",
  "IMG_0185.png",
  "IMG_0193.png",
  "IMG_0231.PNG",
  "IMG_0320.PNG",
  "IMG_0428.PNG",
  "IMG_0473.png",
  "IMG_0556.png",
  "IMG_0588.png",
  "IMG_0589.png",
  "IMG_0678.PNG",
  "IMG_0819.png",
  "IMG_0828.png",
  "IMG_1025.png",
  "IMG_1115.png",
  "IMG_1118.png",
  "IMG_1119.png",
  "IMG_1121.png",
  "IMG_1268.PNG",
  "IMG_1278.png",
  "IMG_1286.png",
  "IMG_1289.png",
  "IMG_1329.png",
  "IMG_1330.png",
  "IMG_3733.JPG",
  "IMG_5359 2.jpg",
  "IMG_5359.jpg",
  "IMG_5383.JPG",
  "IMG_5576.JPG",
  "IMG_5750 2.JPG",
  "IMG_5750.JPG",
  "IMG_5972.JPG",
  "IMG_5973.JPG",
  "IMG_5974.JPG",
  "IMG_5976.JPG",
  "IMG_5977.JPG",
  "IMG_5980.JPG",
  "IMG_5981.JPG",
  "IMG_5983.JPG",
  "IMG_5985.JPG",
  "IMG_5987.JPG",
  "IMG_5988.JPG",
  "IMG_6026.JPG",
  "IMG_6031.JPG",
  "IMG_6049.JPG",
  "IMG_8718.png",
  "IMG_8909.png",
  "IMG_8922.jpg",
  "IMG_8926.JPG",
  "IMG_8943.png",
  "IMG_9012.PNG",
  "IMG_9136.PNG",
  "IMG_9167.PNG",
  "IMG_9206.PNG",
  "IMG_9350.PNG",
  "lp_image 2.png",
  "lp_image 3.png",
  "lp_image 4.png",
  "lp_image 5.png",
  "lp_image 6.png",
  "lp_image.png"
];

function buildGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  galleryImages.forEach((file) => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = "images/" + file;
    img.alt = "Our moment";

    item.appendChild(img);
    grid.appendChild(item);

    item.addEventListener("click", () => openLightbox(img.src));
  });
}

// Lightbox for photos

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCloseBtn = document.getElementById("lightbox-close");
const backdrop = lightbox ? lightbox.querySelector(".lightbox-backdrop") : null;

function openLightbox(src) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.add("hidden");
}

if (lightboxCloseBtn) {
  lightboxCloseBtn.addEventListener("click", closeLightbox);
}

if (backdrop) {
  backdrop.addEventListener("click", closeLightbox);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

// Initialize only on gallery page
document.addEventListener("DOMContentLoaded", buildGallery);
