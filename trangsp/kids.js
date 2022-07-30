const productList = document.getElementById("product-list");
let arr = [
  {
    id: 1,
    name: "Jordan 'Why Not?'  Zer0.5",
    price: "2,649,000₫",
 
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0bdbed51-aca9-479f-8625-f1cafa595798/jordan-why-not-zer04-basketball-shoes-GNMwp9.png",
  },
  {
    id: 2,
    name: "Nike Air Max SE",
    price: "3,829,000₫",
 
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7561f9a8-af9f-46f4-9818-1d3095fd2d75/air-max-2021-se-shoes-ncvjbx.png",
  },
  {
    id: 3,
    name: "Giannis Immortality",
    price: "1,109,000₫",
  
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b573507d-4f1b-4b87-b58a-d29c0bb4562d/freak-3-older-basketball-shoe-JNm8LM.png",
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

