const productList = document.getElementById("product-list");
let arr = [
  {
    id: 1,
    name: "Nike Air Max 90",
    price: "2189000",
    discount: " 30 ",

    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/779ed33d-2b5b-4ef8-a0ef-4ead046e7b1f/air-max-90-slide-bPJh33.png",
  },
  {
    id: 2,
    name: "Pg 6 EP",
    price: "3239000",
    discount: " 25 ",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48c3fb8-4f0d-4a58-83db-6eb8acf7739d/pg-6-ep-basketball-shoes-9KkDtr.png",
  },
  {
    id: 3,
    name: "Nike Air Trainer 1 SP",
    price: "3519000",
    discount: " 20 ",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c2ac17a4-3d7d-4074-bc13-7b0f95f3bd00/air-trainer-1-sp-shoes-6QJXK2.png",
  },
  // {
  //   id: 4,
  //   name: "Hoodie Essentials ",
  //   price: "4800000",
  //   discount: " 50 ",

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
            
            <p class="price">${new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format((product.price * (100 - product.discount)) / 100)}   
      
              <del>  ${new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.price)} </del> </p>
            
            <div class="sale">
                 <p>-${product.discount}%</p>

         </div>
       
                </div>
                </div>
                `;
  }
}
renderProductList();

// ----------------------------------------------------
// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
var modal = document.getElementById("id02");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
