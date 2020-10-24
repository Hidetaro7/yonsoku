
const figs = document.querySelector(".feature-image");
for(var i = 0; i< 100; i++) {
  const img = document.createElement("img");
  img.src = "/image/fig-sample.jpg";
  figs.appendChild(img)
}
