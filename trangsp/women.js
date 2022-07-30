const productList = document.getElementById("product-list");
let arr = [
  {
    id: 1,
    name: "Nike Air Max 95",
    price: "5,589,000₫",

    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/66884f23-8ee5-4df2-b9f7-fb7a3dd185c3/air-max-95-shoes-TJH2bZ.png",
  },
  {
    id: 2,
    name: "Nike Air Force 1",
    price: "3,519,000₫",

    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/580431d1-f50c-463e-b015-338ae08bfaa0/air-force-1-07-shoes-ZMwtBc.png",
  },
  {
    id: 3,
    name: "Nike MC Trainer",
    price: "4,109,000₫",

    image:
      "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/694a4a59-a0a3-4468-9daf-677d5c070dba/mc-trainer-training-shoe-MdXfhv.png",
  },
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
