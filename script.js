fetch("data.json")
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    createDiv(products);
  });

function createDiv(products) {
  let placeholder = document.getElementById("cosmetics-container");
  let placeholder2 = document.querySelector("#household-container");
  let out = "";
  let out2 = "";
  // for (let i = 0; i < products.data.length; i++) {
  for (let j = 0; j < products.data[0].productList.length; j++)
    out += `
            <li>${products.data[0].productList[j].name}  ${products.data[0].productList[j].price}<button onclick="addCart('${products.data[0].productList[j].name}')">Add To Cart</button></li> `;

  // }
  for (let j = 0; j < products.data[1].productList.length; j++)
    out2 += `
        <li>${products.data[1].productList[j].name}  ${products.data[1].productList[j].price} <button onclick="addCart('${products.data[0].productList[j].name}')">Add To Cart</button></li> `;
  placeholder.innerHTML = out;
  placeholder2.innerHTML = out2;
}

let cartArr = [];

function addCart(item) {
  console.log("Item Added to cart");
  cartArr.push(item);
  console.log(cartArr);
}
