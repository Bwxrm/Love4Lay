// === 1. List of images for the gallery ===
// Put all your converted image file names here.
// These files must live in the "images" folder in your repo.
// Example: images/image1.jpg, images/image2.jpg, etc.

const galleryImages = [
  // Replace these with your real file names, for example:
  // "image1.jpg",
  // "image2.jpg",
  // "hallway_us.png",
  // "game_day.jpg",
];

// === 2. Build gallery grid ===
function buildGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid || !galleryImages.length) return;

  galleryImages.forEach((file) => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = "images/" + file;
    img.alt = "Our moment together";

    item.appendChild(img);
    grid.appendChild(item);

    item.addEventListener("click", () => openLightbox(img.src));
  });
}

// === 3. Lightbox logic ===
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCloseBtn = document.getElementById("lightbox-close");

function openLightbox(src) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.add("hidden");
}

// Close with button
if (lightboxCloseBtn) {
  lightboxCloseBtn.addEventListener("click", closeLightbox);
}

// Close when clicking outside content
if (lightbox) {
  const backdrop = lightbox.querySelector(".lightbox-backdrop");
  if (backdrop) {
    backdrop.addEventListener("click", closeLightbox);
  }
}

// Close with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

// === 4. Init when page loads ===
document.addEventListener("DOMContentLoaded", () => {
  buildGallery();
});
