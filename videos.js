const videoFiles = [
  "vid01.mp4",
  "vid02.mp4",
  "vid03.mp4",
  "vid04.mp4",
  "vid05.mp4",
  "vid06.mp4",
  "vid07.mp4",
  "vid08.mp4",
  "vid09.mp4",
  "vid10.mp4",
  "vid11.mp4",
  "vid12.mp4",
  "vid13.mp4",
  "vid14.mp4",
  "vid15.mp4",
  "vid16.mp4",
  "vid17.mp4",
  "vid18.mp4",
  "vid19.mp4",
  "vid20.mp4",
  "vid21.mp4",
  "vid22.mp4"
];

const videoGrid = document.getElementById("videoGrid");

videoFiles.forEach(file => {
    const container = document.createElement("div");
    container.className = "video-box";

    container.innerHTML = `
        <video controls preload="metadata">
            <source src="videos/${file}" type="video/mp4">
            Your browser does not support video playback.
        </video>
    `;

    videoGrid.appendChild(container);
});
