// ==============================
// Full list of your 53 images
// ==============================

const galleryImages = [
  "IMG_1268.PNG",
  "IMG_1121.HEIC",
  "IMG_0819.HEIC",
  "IMG_0589.HEIC",
  "IMG_0588.HEIC",
  "IMG_0428.PNG",
  "IMG_0556.HEIC",
  "IMG_0828.HEIC",
  "IMG_0678.PNG",
  "IMG_1115.HEIC",
  "IMG_1119.HEIC",
  "IMG_1118.HEIC",

  "IMG_1286.HEIC",
  "IMG_5359.jpg",
  "IMG_6049.JPG",
  "IMG_5974.JPG",
  "IMG_5967.JPG",
  "IMG_5980.JPG",
  "IMG_5981.JPG",
  "IMG_5972.JPG",
  "IMG_6031.JPG",
  "IMG_5985.JPG",
  "IMG_5988.JPG",
  "IMG_6026.JPG",
  "IMG_5977.JPG",
  "IMG_5987.JPG",
  "IMG_5973.JPG",
  "IMG_5983.JPG",
  "IMG_5976.JPG",

  "image1.jpeg",
  "image0.jpeg",
  "image2.jpeg",
  "image3.jpeg",
  "image4.jpeg",
  "image5.jpeg",
  "image6.jpeg",
  "image7.jpeg",
  "image8.jpeg",
  "image9.jpeg",
  "IMG_0264.jpeg",
  "IMG_0355.jpeg",
  "IMG_0231.PNG",

  "IMG_8926.JPG",
  "lp_image.HEIC",
  "IMG_9350.PNG",
  "IMG_8557.HEIC",
  "IMG_9136.PNG",
  "IMG_8943.HEIC",
  "lp_image 5.HEIC",
  "lp_image 6.heic",
  "IMG_8718.HEIC",
  "lp_image 4.HEIC",
  "IMG_9012.PNG",
  "IMG_9167.PNG",
  "lp_image 3.HEIC",
  "IMG_9206.PNG"
];

// =====================================
// Build the gallery grid
// =====================================

function buildGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  galleryImages.forEach((file) => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = "images/" + file; // <--- Correct path
    img.alt = "Our moment";

    item.appendChild(img);
    grid.appendChild(item);

    item.addEventListener("click", () => openLightbox(img.src));
  });
}

// ============================
// Lightbox
// ============================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCloseBtn = document.getElementById("lightbox-close");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
}

lightboxCloseBtn.addEventListener("click", closeLightbox);

document.querySelector(".lightbox-backdrop").addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// ============================
// Init
// ============================

document.addEventListener("DOMContentLoaded", buildGallery);
