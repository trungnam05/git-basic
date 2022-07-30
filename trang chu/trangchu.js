var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const Sanpham = document.getElementById("Sanpham");
let arr = [
  {
    link: "../trangchitiet/chitiet1.html",
    name: "Nike Air Huarache",
    info: "Men's Shoes ",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3306d0ec-5d7c-4d2e-9d09-543f41e478b0/air-huarache-shoes-fg69qQ.png",
  },
  {
    link: "../trangchitiet/chitiet2.html",
    name: "Jordan Why Not .5 PF",
    info: "Men's Basketball Shoes ",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ef3ae1e-7206-4a5b-bbe0-434c5bad97aa/jordan-why-not-5-pf-basketball-shoes-r2JwFc.png",
  },
  {
    link: "../trangchitiet/chitiet3.html",
    name: "Nike Mercurial Superfly ",
    info: "Firm-Ground Football Boot ",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cbd7c504-8f22-4458-b493-d79f15d1b316/mercurial-superfly-8-elite-fg-football-boots-K5G1RM.png",
  },
  {
    link: "../trangchitiet/chitiet4.html",
    name: "Air Jordan 1 Retro High OG",
    info: "Shoes ",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/36d75096-a70c-4f59-8419-5ae2885c02d0/air-jordan-1-retro-high-og-shoes-a7Zzxm.png",
  },
];

function renderSanpham() {
  for (let product of arr) {
    Sanpham.innerHTML += `
      <div class="Sanpham" >
      <div class="name">
          <h1>${product.name}</h1>
          <p>${product.info}</p>
          <a href="${product.link}">BUY NOW  </a>
      </div>
      <div class="photo"> 
           <img src="${product.image}" alt="">
      </div>
        </div>
                  `;
  }
}
renderSanpham();
// ----------------------------------------------------
// Get the modal

var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// ---------------------
var modal = document.getElementById("id02");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
