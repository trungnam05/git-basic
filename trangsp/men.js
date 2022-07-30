const productList = document.getElementById("product-list");
let arr = [
  {
    id: 1,
    name: "Nike Air Force 1 '07",
    price: "2,649,000₫",
 
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png",
  },
  {
    id: 2,
    name: "Nike Dunk High Retro SE",
    price: "3,519,000₫",
 
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dee60c30-766a-4bda-a69d-48ac9f884a98/dunk-high-retro-se-shoes-tXRLdK.png",
  },
  {
    id: 3,
    name: "Nike Metcon 7 AMP",
    price: "4,109,000₫",
  
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8e9116c9-37c1-4e87-8992-cc2639697763/air-force-1-react-shoe-7gcHDc.png",
  },
  // {
  //   id: 4,
  //   name: "Hoodie Essentials ",
  //   price: "4.800.000 VND",
  //   discount: "50%",
  //   seller: "Dương Trung Nam",
  //   phone: "0101010101",
  //   image:
  //     "https://sneakerdaily.vn/wp-content/uploads/2021/04/ao-fear-of-god-essentials-knit-hoodie-black.jpg",
  // },
];
function renderProductList() {
  for (let product of arr) {
    productList.innerHTML += `
        <div class = "product-list">
          <div class="product-item">
            <img src="${product.image}"
            alt=""/>
            <h3><a href="">${product.name}</a></h3>
            <p><a href="">${product.price}</a></p>
            
                </div>
                </div>
                `;
  }
}
renderProductList();

// ----------------------------------------------------
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
