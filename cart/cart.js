const bill = document.getElementById("bill");
let arr = [
  {
    id: 1,
    quantity: 2,
    name: "Nike Air Huarache",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3306d0ec-5d7c-4d2e-9d09-543f41e478b0/air-huarache-shoes-fg69qQ.png",
    price: "3519000",
  },
  {
    id: 2,
    quantity: 2,
    name: "Jordan Why Not .5 PF",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ef3ae1e-7206-4a5b-bbe0-434c5bad97aa/jordan-why-not-5-pf-basketball-shoes-r2JwFc.png",
    price: "3289000",
  },
  {
    id: 3,
    quantity: 1,
    name: "Nike Mercurial Superfly",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cbd7c504-8f22-4458-b493-d79f15d1b316/mercurial-superfly-8-elite-fg-football-boots-K5G1RM.png",
    price: "7629000",
  },
];
function rederBill() {
  for (let product of arr) {
    bill.innerHTML += `
        
           <tbody>
             <tr>
               <td>${product.id}</td>
               <td>${product.name}</td>
               <td >
                 <img class="img-preview"
                   src="${product.image}"
                   alt=""
                 />
               </td>
               <td>${new Intl.NumberFormat("vi-VN", {
                 style: "currency",
                 currency: "VND",
               }).format(product.price)}</td>
               <td> <input type="number" value="${
                 product.quantity
               }" min="0" max="10"></td>
               <td>${new Intl.NumberFormat("vi-VN", {
                 style: "currency",
                 currency: "VND",
               }).format(product.quantity * product.price)}</td>
               <td><i class="fa fa-trash" style="font-size:24px"></i></td>
       
             </tr>
           </tbody>

        `;
  }
}
rederBill();



var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// --------------------- 
 
