// All your YouTube links converted into EMBED URLs:
const videoLinks = [
    "https://www.youtube.com/embed/8IJyap1K6CI",
    "https://www.youtube.com/embed/mM5M_PsNO1U",
    "https://www.youtube.com/embed/24dU_zweEmI",
    "https://www.youtube.com/embed/7dFxUMwLjEg",
    "https://www.youtube.com/embed/UC19vfuhew4",
    "https://www.youtube.com/embed/vUgJgNphpJE",
    "https://www.youtube.com/embed/4HGPJuZNIeM",
    "https://www.youtube.com/embed/YYNtUAnX5A8",
    "https://www.youtube.com/embed/LGVQ8j-_WqU",
    "https://www.youtube.com/embed/OG7sxjA216E",
    "https://www.youtube.com/embed/Xvyb-luLGCk",
    "https://www.youtube.com/embed/BAwJc9tXdqY",
    "https://www.youtube.com/embed/5nt5xw4qrhI",
    "https://www.youtube.com/embed/DeN4pEcU5A8",
    "https://www.youtube.com/embed/8i9GtHhMph4",
    "https://www.youtube.com/embed/bSnZkiOO4Zo",
    "https://www.youtube.com/embed/MrPKVmUUBeI",
    "https://www.youtube.com/embed/C51rqB_wYkI",
    "https://www.youtube.com/embed/UmqZsP56r6I",
    "https://www.youtube.com/embed/EjQAzV9Outo",
    "https://www.youtube.com/embed/c7XkczxiVyI",
    "https://www.youtube.com/embed/QwUI4TjmK3g",
    "https://www.youtube.com/embed/5tgqEDCqoCg",
    "https://www.youtube.com/embed/G1xyuVe1EXs",
    "https://www.youtube.com/embed/kLkAdlyXHgU",
    "https://www.youtube.com/embed/K7-Hyd3hgik",
    "https://www.youtube.com/embed/7Pe-ITnNNxA",
    "https://www.youtube.com/embed/dGcFrRl1WZc",
    "https://www.youtube.com/embed/C_5K7Neg38Y",
    "https://www.youtube.com/embed/6APAmWEUMw0",
    "https://www.youtube.com/embed/s7RqOJeiprg"
];

// Grid container
const videoGrid = document.getElementById("videoGrid");

// Create clickable thumbnails
videoLinks.forEach(link => {
    const vid = document.createElement("div");
    vid.className = "video-thumb";

    vid.innerHTML = `
        <div class="video-thumb-inner">
            <iframe src="${link}" allowfullscreen></iframe>
        </div>
    `;

    vid.addEventListener("click", () => openVideo(link));
    videoGrid.appendChild(vid);
});

// Modal viewer
const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeBtn = document.getElementById("closeVideo");

function openVideo(link) {
    videoFrame.src = link;
    modal.classList.remove("hidden");
}

function closeVideo() {
    videoFrame.src = "";
    modal.classList.add("hidden");
}

closeBtn.addEventListener("click", closeVideo);
modal.querySelector(".video-modal-bg").addEventListener("click", closeVideo);
