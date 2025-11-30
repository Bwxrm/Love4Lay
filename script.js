const images = [
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
  "IMG_5704.PNG",
  "IMG_5917.JPG",
  "IMG_6034.PNG",
  "IMG_8515.png",
  "IMG_8717.PNG",
  "IMG_8902.png",
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

const gallery = document.getElementById("gallery");

if (gallery) {
  images.forEach(filename => {
    const img = document.createElement("img");
    img.src = "images/" + filename;
    img.loading = "lazy";
    img.alt = "Photo of Bryan & Laylah";
    gallery.appendChild(img);
  });
}
