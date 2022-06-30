fetch("data.json")
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    createDiv(products);
  });

function createDiv(products) {
  let placeholder = document.getElementById("cosmetics-container");
  let placeholder2 = document.querySelector("#household-container");
  let placeholderArr = [placeholder, placeholder2]

  for(let i =0; i<products.data.length; i++){
    let out = "";
  for (let j = 0; j < products.data[0].productList.length; j++)
    out += `<div class="product-container">
    <span>Name: </span><span>${products.data[i].productList[j].name}</span><br>
    <span>Price: </span><span>${products.data[i].productList[j].price}</span><br>
    <button onclick="addCart('${products.data[i].productList[j].name}')">Add To Cart</button><br>
    <button onclick="removeCart('${products.data[i].productList[j].name}')">Remove From Cart</button>
    </div>
    `
    placeholderArr[i].innerHTML = out;
  }
} 


let cartArr = [];

function addCart(item) {
  console.log(`${item} Added to cart`);
  cartArr.push(item);
  console.log(cartArr);
}

function removeCart(itemToRemove){
  const index = cartArr.indexOf(itemToRemove) ;
  if(index > -1) {
    cartArr.splice(index,1);
    console.log(`${itemToRemove} Removed From Cart`);
  } else {
    console.log("Item Is Not in the cart");
  }
  console.log(cartArr);
}
