// targets what you mouseover
let myBtn = document.querySelector("#home-icons");

myBtn.addEventListener("mouseover", function() {
  // targets what changes when you click
  document.querySelector("a i.fas.fa-cog").style.color = "#dc3545";
  document.querySelector("a i.fas.fa-cloud").style.color = "#007bff";
  document.querySelector("a i.fas.fa-cart-plus").style.color = "#28a745";
});


myBtn.addEventListener("mouseout", function() {
  let iconsOut = document.querySelectorAll('#home-icons i');
  iconsOut[0].style.color = "#343a40";
  iconsOut[1].style.color = "#343a40";
  iconsOut[2].style.color = "#343a40";
});

// Photo Gallery background color changer
const galleryBg = document.getElementById('gallery');
galleryBg.addEventListener('mousemove', colorChanger)

function colorChanger(colorEvent) {
  galleryBg.style.backgroundColor = `rgb(${colorEvent.offsetX}, ${colorEvent.offsetY}, 200)`;
}
