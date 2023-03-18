let imgCount = 1;
let img = document.getElementById("slider-img");

setInterval(() => {
  if (imgCount > 8) {
    imgCount = 1;
  }
  img.src = `images/pic-${imgCount}.jpg`;
  console.log(imgCount);
  imgCount++;
}, 1000);
